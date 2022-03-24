import styled from 'styled-components';
import palette from '../../palette';
import '../../fonts/fonts.css';

const CommentBlock = styled.div`
    margin-top: 5rem;

    > div > p {
        font-family: 'SansMedium';
        margin: 1rem 0 0.5rem;

        > span {
            color: red;
        }
    }
`;

const CommentList = styled.div`
    > div {
        border-bottom: 1px solid lightgray;
        padding: 0.5rem;
    }

    > div > div.userInfo {
        font-family: 'SansRegular';
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${palette.gray_2};

        > span.username {
            font-weight: bold;
            font-size: 1.05rem;

            @media (max-width: 767px) {
                font-size: 3vw;
            }
        }

        > div {
            > span.publishedDate {
                margin-right: 0.8rem;

                @media (max-width: 767px) {
                    font-size: 2.5vw;
                }
            }

            > span.removeBtn {
                color: red;
                cursor: pointer;
                font-size: 0.85rem;
            }
        }
    }

    > div > p {
        margin-top: 0.5rem;
        @media (max-width: 767px) {
                font-size: 3vw;
            }
    }
`;

const Comment = () => {
    return (
        <CommentBlock>
            <div>
                <p>
                    총 <span>2</span>개의 댓글이 있습니다.
                </p>
                <hr />
                <CommentList>
                    <div>
                        <div className="userInfo">
                            <span className="username">황갑순</span>
                            <div>
                                <span className="publishedDate">
                                    {new Date().toLocaleDateString()}{' '}
                                    {new Date().toLocaleTimeString()}
                                </span>
                                <span className="removeBtn">X</span>
                            </div>
                        </div>
                        <p>호호 횐님 안녕하세요</p>
                    </div>
                    <div>
                        <div className="userInfo">
                            <span className="username">이복남</span>
                            <div>
                                <span className="publishedDate">
                                    {new Date().toLocaleDateString()}{' '}
                                    {new Date().toLocaleTimeString()}
                                </span>
                                <span className="removeBtn">X</span>
                            </div>
                        </div>
                        <p>어쩔티비~</p>
                    </div>
                </CommentList>
            </div>
        </CommentBlock>
    );
};

export default Comment;
