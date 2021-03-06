import User from '../../models/user';
import Joi from 'joi';

/* 회원가입 라우터 처리 함수 */
export const register = async (ctx) => {
    // Request Body 검증하기
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().min(3).max(20).required(),
        password: Joi.string().required(),
        name: Joi.string().required(),
        callnumber: Joi.string().required(),
        email: Joi.string().required(),
    });

    const result = schema.validate(ctx.request.body);

    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { username, password, name, callnumber, email } = ctx.request.body;
    try {
        const existsUsername = await User.findByUsername(username);
        if (existsUsername) {
            ctx.status = 409; // Conflict
            console.log('아이디 중복');
            return;
        }

        const existsEmail = await User.findByUseremail(email);
        if (existsEmail) {
            ctx.status = 409; // Conflict
            console.log('이메일 중복');
            return;
        }

        const user = new User({
            username,
            name,
            callnumber,
            email,
        });
        await user.setPassword(password); // 비밀번호 설정
        await user.save(); // 데이터베이스에 저장

        ctx.body = user.serialize();

        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
            httpOnly: true,
        });
    } catch (e) {
        ctx.throw(500, e);
    }
};

/* 로그인 라우터 처리 함수 */
export const login = async (ctx) => {
    const { username, password } = ctx.request.body;

    if (!username || !password) {
        ctx.status = 401;
        return;
    }

    try {
        const user = await User.findByUsername(username);

        if (!user) {
            ctx.status = 401;
            return;
        }

        const valid = await user.checkPassword(password);

        if (!valid) {
            ctx.status = 401;
            return;
        }

        ctx.body = user.serialize();

        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
            httpOnly: true,
        });
    } catch (e) {
        ctx.throw(500, e);
    }
};

/* 로그인 상태 확인 라우터 처리 함수 */
export const check = async (ctx) => {
    // 미들웨어에서 토큰의 유무에 따라 user state 설정
    const { user } = ctx.state;

    if (!user) {
        ctx.status = 401;
        return;
    }

    ctx.body = user;
};

/* 로그아웃 라우터 처리 함수 */
export const logout = async (ctx) => {
    // 토큰 지우기
    ctx.cookies.set('access_token');
    ctx.status = 204;
};
