import PostViewer from '../../components/bulletinBoard/PostViewer';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readPost, unloadPost } from '../../modules/post';
import { withRouter } from 'react-router-dom';
import { setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/posts';

// url 파라미터 등의 정보를 가지고 있는 match 객체
const PostViewerContainer = ({ match, history }) => {
    const { postId } = match.params;
    const dispatch = useDispatch();

    // 스토어에서 필요한 데이터 가져오기
    // 스토어 접근은 그냥 x, 액션을 통해서 접근!
    // 액션 타입을 payload로 받는 loading
    const { post, error, loading, user } = useSelector(
        ({ post, loading, user }) => ({
            post: post.post,
            error: post.error,
            loading: loading['post/READ_POST'],
            user: user.user,
        }),
    );

    useEffect(() => {
        // match 객체에서 가져온 게시글 id를 파라미터로 줘서 readPost 액션 생성자 실행
        dispatch(readPost(postId));               

        // 언마운트 시에는 리덕스의 데이터 초기화
        return () => {
            dispatch(unloadPost());
        };
    }, [dispatch, postId]);

    // write 리덕스에 기존 게시글의 id 저장
    const onEdit = () => {
        dispatch(setOriginalPost(post));
        history.push('/posting');
    };

    const onRemove = async () => {
        try {
            if (window.confirm('정말 삭제하시겠습니까?') === true) {
                await removePost(postId);
                history.push('/community');
                alert('게시글이 삭제되었습니다.');
            } else {
                alert('삭제가 취소되었습니다.');
            }
        } catch (e) {
            console.log(e);
        }
    };

    const ownPost = (user && user._id) === (post && post.user._id);

    return (
        <PostViewer
            post={post}
            error={error}
            loading={loading}
            onEdit={onEdit}
            onRemove={onRemove}
            ownPost={ownPost}
        />
    );
};

// url 파라미터로 받아온 id 값을 조회하기 위해 withRouter 함수 사용
export default withRouter(PostViewerContainer);
