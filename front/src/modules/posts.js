import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as postsApi from '../lib/api/posts';

const LIST_POSTS = 'posts/LIST_POSTS';
const LIST_POSTS_SUCCESS = 'posts/LIST_POSTS_SUCCESS';
const LIST_POSTS_FAILURE = 'posts/LIST_POSTS_FAILURE';

export const listPosts = createAction(LIST_POSTS, ({ page, username }) => ({
    page,
    username,
}));

const listPostsSaga = createRequestSaga(LIST_POSTS, postsApi.listPosts);

export function* postsSaga() {
    yield takeLatest(LIST_POSTS, listPostsSaga);
}

const initialState = {
    posts: null,
    error: null,
    lastPage: 1,
};

const posts = handleActions(
    {
        [LIST_POSTS_SUCCESS]: (state, { payload: posts, meta: response }) => ({
            ...state,
            posts,
            lastPage: parseInt(response.headers['last-page'], 10),
        }),
        [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default posts;
