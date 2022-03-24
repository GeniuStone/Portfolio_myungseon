import Posting from '../../components/bulletinBoard/Posting';
import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';
import { writePost } from '../../modules/write';
import { useHistory } from 'react-router-dom';
import { updatePost } from '../../modules/write';

const PostingContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { title, body, post, postError, originalPostId } = useSelector(
        ({ write }) => ({
            title: write.title,
            body: write.body,
            post: write.post,
            postError: write.postError,
            originalPostId: write.originalPostId,
        }),
    );

    const onChangeField = useCallback(
        (payload) => dispatch(changeField(payload)),
        [dispatch],
    );

    // 언마운트될 때 초기화
    useEffect(() => {
        return () => {
            dispatch(initialize());
        };
    }, [dispatch]);

    const onPublish = () => {
        // 기존 게시글의 id가 리덕스에 있다면 (사용자가 수정 버튼을 클릭했다면..)
        if (originalPostId) {
            dispatch(updatePost({ id: originalPostId, title, body }));
            return;
        }

        dispatch(
            writePost({
                title,
                body,
            }),
        );
    };

    // 포스트 등록 성공 or 실패 시
    useEffect(() => {
        if (post) {
            // 포스트 아이디와 유저 정보 가져오기
            const { _id, user } = post;
            history.push(`/@${user.username}/${_id}`);
        }

        if (postError) {
            console.log(postError);
        }
    }, [post, postError, history]);

    return (
        <Posting
            onChangeField={onChangeField}
            title={title}
            body={body}
            onPublish={onPublish}
            isEdit = {!!originalPostId}
        />
    );
};

export default PostingContainer;
