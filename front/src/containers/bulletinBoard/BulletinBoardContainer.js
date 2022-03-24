import BulletinBoard from '../../components/bulletinBoard/BulletinBoard';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { listPosts } from '../../modules/posts';
import { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';

const BulletinBoardContainer = ({ location, match }) => {
    const dispatch = useDispatch();
    const [searchItem, setSearchItem] = useState('');
    const [filterItem, setFilterItem] = useState('');

    const { posts, error, loading } = useSelector(({ posts, loading }) => ({
        posts: posts.posts,
        error: posts.error,
        loading: loading['posts/LIST_POSTS'],
    }));

    useEffect(() => {
        const { username } = match.params;
        const { page } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });

        dispatch(listPosts({ page, username }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, location.search]);

    const onChangeField = (e) => {
        setSearchItem(e.target.value);
    }

    const onSetFilterItem = (item) => {
        setFilterItem(item);
    }

    return <BulletinBoard posts={posts} error={error} loading={loading} onChangeField={onChangeField} searchItem={searchItem} onSetFilterItem={onSetFilterItem} filterItem={filterItem}/>;
};

export default withRouter(BulletinBoardContainer);
