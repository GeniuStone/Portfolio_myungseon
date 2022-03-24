import Pagination from '../../components/bulletinBoard/Pagination';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

const PaginationContainer = ({ location, match }) => {
    const { posts, lastPage, loading, user } = useSelector(({ posts, loading, user }) => ({
        posts: posts.posts,
        lastPage: posts.lastPage,
        loading: loading['posts/LIST_POSTS'],
        user : user.user
    }));

    if (!posts || loading) {
        return null;
    }

    const { username } = match.params;
    const { page = 1 } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });

    return (
        <Pagination
            username={username}
            page={parseInt(page, 10)}
            lastPage={lastPage}
            user={user}
        ></Pagination>
    );
};

export default withRouter(PaginationContainer);
