import styled from 'styled-components';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { FaAngleDoubleRight } from 'react-icons/fa';
import palette from '../../palette';
import { Link } from 'react-router-dom';
import qs from 'qs';

const PaginationBlock = styled.div`
    display: flex;
    position: relative;

    > div {
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;

        > .pageBtn {
            border: none;
            background: none;
            font-size: 1.2rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            margin: 0 0.2rem;

            &:disabled {
                cursor: not-allowed;
            }
        }

        > div {
            > .pageNum {
                font-size: 1.1rem;
                margin: 0.6rem;
                cursor: pointer;
            }
        }
    }

    > .postingBtn {
        background-color: ${palette.indigo_2};
        color: ${palette.white_1};
        font-size: 1rem;
        padding: 0.3rem 0.8rem;
        border-radius: 3px;
        display: inline-block;
        font-family: 'SansMedium';
        cursor: pointer;
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
    }
`;

const buildLink = ({ username, page, lastPage }) => {
    if (page > lastPage) {
        return null;
    }
    const query = qs.stringify({ page });
    return username ? `/@${username}?${query}` : `/community/?${query}`;
};

const Pagination = ({ page, username, lastPage, user }) => {
    return (
        <PaginationBlock>
            <div>
                <Link
                    disabled={page === 1}
                    to={
                        page === 1
                            ? undefined
                            : buildLink({ username, page: 1 })
                    }
                    className="pageBtn"
                >
                    <FaAngleDoubleLeft />
                </Link>
                <Link
                    disabled={page === 1}
                    to={
                        page === 1
                            ? undefined
                            : buildLink({ username, page: page - 1 })
                    }
                    className="pageBtn"
                >
                    <FaAngleLeft />
                </Link>
                <div>
                    <Link
                        className="pageNum"
                        disabled={page === lastPage}
                        to={buildLink({ username, page: page, lastPage })}
                    >
                        {page}
                    </Link>
                    <Link
                        className="pageNum"
                        disabled={page === lastPage}
                        to={buildLink({ username, page: page + 1, lastPage })}
                    >
                        {page + 1}
                    </Link>
                    <Link
                        className="pageNum"
                        disabled={page === lastPage}
                        to={buildLink({ username, page: page + 2, lastPage })}
                    >
                        {page + 2}
                    </Link>
                    <Link
                        className="pageNum"
                        disabled={page === lastPage}
                        to={buildLink({ username, page: page + 2, lastPage })}
                    >
                        {page + 3}
                    </Link>
                </div>
                <Link
                    disabled={page === lastPage}
                    to={
                        page === lastPage
                            ? undefined
                            : buildLink({ username, page: page + 1 })
                    }
                    className="pageBtn"
                >
                    <FaAngleRight />
                </Link>
                <Link
                    disabled={page === lastPage}
                    to={
                        page === lastPage
                            ? undefined
                            : buildLink({ username, page: lastPage })
                    }
                    className="pageBtn"
                >
                    <FaAngleDoubleRight />
                </Link>
            </div>
            <Link to={user ? '/posting' : '/login'} className="postingBtn">
                게시글 작성
            </Link>
        </PaginationBlock>
    );
};

export default Pagination;
