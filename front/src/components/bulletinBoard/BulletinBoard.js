import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { MdOutlinePhoto } from 'react-icons/md';
import { FaThLarge } from 'react-icons/fa';
import { FaThList } from 'react-icons/fa';
import sampleImage from '../../images/mainver2.jpg';
import palette from '../../palette';
import '../../fonts/fonts.css';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import PaginationContainer from '../../containers/bulletinBoard/PaginationContainer';

const BulletinBoardBlock = styled(Responsive)`
    padding: 6rem 4rem 25rem;

    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 5rem 4rem 24rem;
    }

    @media (max-width: 767px) {
        padding: 3rem 1rem 21rem;
    }
    
    > h2 {
        border-left: 5px solid ${palette.indigo_3};
        padding-left: 0.8rem;
        font-size: 2rem;        

        @media (min-width: 768px) and (max-width: 1023px) {
            font-size: 4vw;
        }

        @media (max-width: 767px) {
            font-size: 6vw;
        }
    }
`;

const BoardTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;

    @media (min-width: 768px) and (max-width: 1023px) {
        text-align: right;
    }

    @media (max-width: 767px) {
        text-align: right;
    }    

    > div {
        display: flex;
        justify-content: right;
        align-items: center;
        flex-grow: 1;

        @media (max-width: 767px) {
            justify-content: space-between;
        }

        > div > .changeBtn {
            font-size: 1.3rem;
            margin-right: 0.5rem;
            cursor: pointer;
            color: ${palette.indigo_1};
        }

        > form {
            display: flex;

            input {
                height: 1.8rem;
                display: block;

                @media (max-width: 767px) {
                    width: 13rem;
                }
            }

            button {
                padding: 0 0.8rem;
                cursor: pointer;
                font-family: 'SansRegular';
                font-size: 1rem;
                color: ${palette.indigo_1};
                background-color: ${palette.gray_1};
                border: 1px solid gray;
            }
        }
    }
`;

const BoardList = styled.div`    
    margin-bottom: 1.5rem;

    > table {
        width: 100%;

        > thead {
            > tr {
                > th {
                    padding: 0.8rem 0;
                    font-family: 'SansRegular';
                    background-color: ${palette.indigo_1};
                    color: white;

                    &:first-child {
                        width: 3rem;
                    }

                    &:nth-child(2) {
                        width: 60%;
                    }

                    &:last-child {
                        width: 4rem;
                    }
                }
            }
        }

        > tbody {
            > tr {
                background-color: ${palette.white_1};

                &:nth-child(even) {
                    background-color: ${palette.white_2};
                }

                > td {
                    text-align: center;
                    padding: 0.7rem 0;

                    &.title {
                        text-align: left;
                        padding-left: 1rem;
                        display: flex;
                        align-items: center;
                        cursor: pointer;

                        &:hover {
                            color: ${palette.indigo_3};
                        }
                    }

                    > .isPhoto {
                        margin-left: 0.5rem;
                        color: ${palette.indigo_1};
                        min-width: 1.5rem;
                    }
                }
            }
        }
    }
`;

const BoardGallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0 2rem;
    display: none;

    > div {
        margin: 0 auto;
        margin-bottom: 0.8rem;

        > span {
            display: block;
            text-align: center;
        }
    }
`;

const BulletinBoard = ({ posts, error, loading, onChangeField, searchItem, onSetFilterItem, filterItem}) => {
    const isPc = useMediaQuery({
        query: '(min-width:1024px)',
    });
    const isTablet = useMediaQuery({
        query: '(min-width:768px) and (max-width:1023px)',
    });  

    if (error) {
        return <BulletinBoardBlock>에러가 발생했습니다.</BulletinBoardBlock>;
    }        

    return (
        <BulletinBoardBlock>    
            <h2>회원 게시판</h2>        
            <BoardTop>            
                <div>
                    <div>
                        <FaThList className="listBtn changeBtn" />
                        <FaThLarge className="galleryBtn changeBtn" />
                    </div>
                    <form>
                        <input type="text" onChange={onChangeField} value={searchItem}/>
                        <button type='button' onClick={() => onSetFilterItem(searchItem)}>검색</button>
                    </form>
                </div>
            </BoardTop>
            {!loading && posts && (
                <BoardList>
                    <table cellSpacing="0">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                {(isPc || isTablet) && <th>작성일</th>}
                                {(isPc || isTablet) && <th>조회수</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {posts.filter((post) => {
                                if(filterItem === '') {
                                    return post;
                                }
                                else if (post.title.toLowerCase().includes(filterItem.toLowerCase())) {
                                    return post;
                                }
                            }).map((post) => (
                                <tr key={post._id}>
                                    <td>{post.postNum }</td>
                                    <td className="title">
                                        <Link
                                            to={`/@${post.user.username}/${post._id}`}
                                        >
                                            {post.title}
                                        </Link>{' '}                                        
                                    </td>
                                    <td>{post.user.username}</td>
                                    {(isPc || isTablet) && (
                                        <td>
                                            {new Date(
                                                post.publishedDate,
                                            ).toLocaleDateString()}
                                        </td>
                                    )}
                                    {(isPc || isTablet) && <td>{post.viewCount || 0}</td>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </BoardList>
            )}
            <BoardGallery>
                <div>
                    <img src={sampleImage} alt="sampleImage" width="300" />
                    <span>test title</span>
                </div>
                <div>
                    <img src={sampleImage} alt="sampleImage" width="300" />
                    <span>test title</span>
                </div>
                <div>
                    <img src={sampleImage} alt="sampleImage" width="300" />
                    <span>test title</span>
                </div>
                <div>
                    <img src={sampleImage} alt="sampleImage" width="300" />
                    <span>test title</span>
                </div>
                <div>
                    <img src={sampleImage} alt="sampleImage" width="300" />
                    <span>test title</span>
                </div>
                <div>
                    <img src={sampleImage} alt="sampleImage" width="300" />
                    <span>test title</span>
                </div>
            </BoardGallery>
            <PaginationContainer></PaginationContainer>
        </BulletinBoardBlock>
    );
};

export default BulletinBoard;
