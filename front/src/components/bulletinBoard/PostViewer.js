import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../palette';
import '../../fonts/fonts.css';
import Comment from './Comment';
import { Link } from 'react-router-dom';

const PostViewerBlock = styled(Responsive)`
    padding: 6rem 4rem 25rem;

    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 5rem 4rem 24rem;
    }

    @media (max-width: 767px) {
        padding: 3rem 1rem 21rem;
    }

    > div.postViewerContainer {
        padding: 1.5rem 2rem;
        border: 1px solid lightgray;
        box-shadow: 5px 5px 10px -11px ${palette.gray_2};
    }

    > div.listBtn {
        background-color: ${palette.gray_1};
        padding: 0.2rem 1.2rem;
        font-size: 0.95rem;
        font-family: 'SansRegular';
        cursor: pointer;
        display: inline-block;
        border-radius: 5px;
        margin-top: 1rem;

        @media (max-width: 767px) {
            font-size: 2.5vw;
        }
    }
`;

const PostTitle = styled.div`
    > p {
        font-family: 'SansRegular';
        font-size: 1.4rem;
        font-weight: bold;
        padding-left: 0.5rem;

        @media (max-width: 767px) {
            font-size: 4vw;
        }
    }

    > hr {
        margin-top: 0.7rem;
        //height: 8px;
        //border: 0;
        //box-shadow: 0 8px 4px -8px gray inset;
    }

    > div.postInfo {
        text-align: right;
        margin-top: 0.3rem;

        > span {
            color: ${palette.indigo_3};
            font-family: 'SansMedium';
            font-size: 0.9rem;
            margin: 0 0.5rem;

            @media (max-width: 767px) {
                font-size: 2.5vw;
            }
        }
    }
`;

const PostContent = styled.div`
    margin-top: 1.5rem;
    padding-left: 0.5rem;

    img {
        max-width: 900px;
        max-height: 900px;
    }
`;

const ButtonContainer = styled.div`
    > div {
        margin-top: 2rem;
        display: flex;
        justify-content: right;
    }

    > div > div {
        background-color: ${palette.gray_1};
        padding: 0.2rem 1.2rem;
        font-size: 0.95rem;
        font-family: 'SansRegular';
        cursor: pointer;
        border-radius: 5px;

        @media (max-width: 767px) {
            font-size: 2.5vw;
        }

        &:first-child {
            margin-right: 0.5rem;
        }
    }
`;

const PostViewer = ({ post, error, loading, onEdit, onRemove, ownPost }) => {
    if (error) {
        if (error.response && error.response.status === 404) {
            return (
                <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>
            );
        }

        return <PostViewerBlock>오류가 발생했습니다.</PostViewerBlock>;
    }

    if (loading || !post) {
        return null;
    }

    const { title, body, user, publishedDate } = post;

    let {viewCount} = post;

    return (
        <PostViewerBlock>
            <div className="postViewerContainer">
                <PostTitle>
                    <p>{title}</p>
                    <hr />
                    <div className="postInfo">
                        <span>작성자 : {user.username}</span>|
                        <span>
                            작성일 :{' '}
                            {new Date(publishedDate).toLocaleDateString()}{' '}
                            {new Date(publishedDate).toLocaleTimeString()}
                        </span>
                        |<span>조회수 : {viewCount}</span>
                    </div>
                </PostTitle>
                {/* quill 에디터에서 받아온 내용은 html 태그가 포함되어 있음 이를 실제 게시글에도 적용하기 위해서 */}
                <PostContent
                    dangerouslySetInnerHTML={{ __html: body }}
                ></PostContent>
                <ButtonContainer>
                    {ownPost && (
                        <div>
                            <div onClick={onEdit} className="editBtn">
                                수정
                            </div>
                            <div className="removeBtn" onClick={onRemove}>
                                삭제
                            </div>
                        </div>
                    )}
                </ButtonContainer>
                <Comment />
            </div>
            <div className='listBtn'>
                <Link to={'/community'}>게시글 목록</Link>
            </div>
        </PostViewerBlock>
    );
};

export default PostViewer;
