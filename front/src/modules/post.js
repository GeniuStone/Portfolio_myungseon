import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as postApi from '../lib/api/posts';

/* 액션 타입 정의 */
const READ_POST = 'post/READ_POST';
const READ_POST_SUCCESS = 'post/READ_POST_SUCCESS';
const READ_POST_FAILURE = 'post/READ_POST_FAILURE';
const UNLOAD_POST = 'post/UNLOAD_POST';

/* 액션 생성자 정의 */
export const readPost = createAction(READ_POST, (id) => id);
export const unloadPost = createAction(UNLOAD_POST);


/* 리덕스 사가 정의 */
const readPostSaga = createRequestSaga(READ_POST, postApi.readPost);


export function* postSaga() {
    yield takeLatest(READ_POST, readPostSaga);    
}

/* 초기상태 정의 */
const initialState = {
    post: null,
    error: null,
};

/* 리듀서 함수 정의 */
const post = handleActions(
    {
        [READ_POST_SUCCESS]: (state, { payload: post }) => ({
            ...state,
            post,            
        }),
        [READ_POST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
        [UNLOAD_POST]: () => initialState,
    },
    initialState,
);

export default post;
