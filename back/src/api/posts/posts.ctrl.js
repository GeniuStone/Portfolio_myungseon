/* 컨트롤러 - 라우터 처리 [함수(조회, 쓰기, 삭제, 수정 등의 작업)만 모아놓는 파일 */
import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from 'joi';
import sanitizeHtml from 'sanitize-html';

const { ObjectId } = mongoose.Types;

export const getPostById = async (ctx, next) => {
    // id 파라미터 가져와서
    const { id } = ctx.params;
    // id가 유효하지 않으면
    if (!ObjectId.isValid(id)) {
        ctx.status = 400;
        return;
    }

    try {
        const post = await Post.findById(id);

        if (!post) {
            ctx.status = 404;
            return;
        }   
        
        post.viewCount ++;
        post.save();

        ctx.state.post = post;
        return next();
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const checkOwnPost = (ctx, next) => {
    // 컨텍스트에서 해당 state 비구조화 할당으로 가져오고
    const { user, post } = ctx.state;
    // post 모델의 유저 아이디와 유저 모델(토큰 발급시 생성되는)의 아이디가 일치하는지 검사
    if (post.user._id.toString() !== user._id) {
        ctx.status = 403;
        return;
    }
    return next();
};

export const write = async (ctx) => {
    const schema = Joi.object().keys({
        // 객체가 다음 필드를 가지고 있음을 검증
        title: Joi.string().required(), // required() 가 있으면 필수 항목
        body: Joi.string().required(),
    });

    // 검증 후, 검증 실패시 에러처리
    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400; // Bad Request
        ctx.body = result.error;
        return;
    }

    const { title, body } = ctx.request.body;

    const post = new Post({
        title,
        body,
        user: ctx.state.user,
    });
    try {
        await post.save();
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};

const shortenTitle = (title) => {
    const filtered = sanitizeHtml(title, { allowedTags: [] });

    return filtered.length < 35 ? filtered : `${filtered.slice(0, 35)}...`;
};

/* 모든 포스트 조회 함수 */
export const list = async (ctx) => {
    // query 는 문자열이기 때문에 숫자로 변환해주어야합니다.
    // 값이 주어지지 않았다면 1 을 기본으로 사용합니다.
    const page = parseInt(ctx.query.page || '1', 10);

    if (page < 1) {
        ctx.status = 400;
        return;
    }

    const { username } = ctx.query;
    // tag, username 값이 유효하면 객체 안에 넣고, 그렇지 않으면 넣지 않음
    const query = {
        ...(username ? { 'user.username': username } : {}),
    };

    try {
        const posts = await Post.find(query)
            .sort({ _id: -1 })
            .limit(10)
            .skip((page - 1) * 10)
            .lean()
            .exec();

        const postCount = await Post.countDocuments(query).exec();

        ctx.set('Last-Page', Math.ceil(postCount / 10));

        const postNum = (index, page) => {
            let result = 0;
            if (page > 1) {
                result = postCount - (page - 1) * 10 - index;
                return result;
            }

            result = postCount / page - index;
            return result;
        };

        ctx.body = posts.map((post, index) => ({
            ...post,
            title: shortenTitle(post.title),
            postNum: postNum(index, page),            
        }));
    } catch (e) {
        ctx.throw(500, e);
    }
};
/*        

/* 특정 포스트를 조회하는 함수 */
export const read = async (ctx) => {
    // id 파라미터 가져와서
    /*const { id } = ctx.params;
    try {
        const post = await Post.findById(id).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }*/        

    // 파라미터에서 id를 가져와서 해당 아이디의 게시글을 찾는 작업은 getPostById가 사전에 해주기 때문에
    // 얘는 그냥 조회만 해주면 됨
    ctx.body = ctx.state.post;
};

/* 특정 포스트를 삭제하는 함수 */
export const remove = async (ctx) => {
    // id 파라미터 가져와서
    const { id } = ctx.params;
    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    } catch (e) {
        ctx.throw(500, e);
    }
};

/* 특정 포스트(필드)를 수정하는 함수 */
export const update = async (ctx) => {
    const { id } = ctx.params;
    // write 에서 사용한 schema 와 비슷한데, required() 가 없습니다.
    const schema = Joi.object().keys({
        title: Joi.string(),
        body: Joi.string(),
    });

    // 검증 후, 검증 실패시 에러처리
    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400; // Bad Request
        ctx.body = result.error;
        return;
    }

    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true, // 이 값을 설정하면 업데이트된 데이터를 반환합니다.
            // false 일 때에는 업데이트 되기 전의 데이터를 반환합니다.
        }).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};
