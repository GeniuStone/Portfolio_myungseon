import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga from '../lib/createRequestSaga';

/* user의 상태를 담을 것, 로그인 유무를 확인(check)  */
// 액션 타입 정의
const TEMP_SET_USER = 'auth/TEMP_SET_USER';

const CHECK = 'auth/CHECK';
const CHECK_SUCCESS = 'auth/CHECK_SUCCESS';
const CHECK_FAILURE = 'auth/CHECK_FAILURE';

const LOGOUT = 'auth/LOGOUT';

// 액션 생성자 정의
export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

// 사가 정의
const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga() {
    try {
        localStorage.removeItem('user'); // localStorage 에서 user 제거하고
    } catch (e) {
        console.log('localStorage is not working');
    }
}

function* logoutSaga() {
    try {
        // 로그아웃 api 호출
        yield call(authAPI.logout);
        localStorage.removeItem('user');
    } catch (e) {
        console.log(e);
    }
}

export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
    yield takeLatest(CHECK_FAILURE, checkFailureSaga);
    yield takeLatest(LOGOUT, logoutSaga);
}

// 초기상태 정의
const initialState = {
    user: null,
    checkError: null,
};

// 리듀서 함수 정의
export default handleActions(
    {
        [TEMP_SET_USER]: (state, { payload: user }) => ({
            ...state,
            user,
        }),
        [CHECK_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            checkError: null,
        }),
        [CHECK_FAILURE]: (state, { payload: error }) => ({
            ...state,
            user: null,
            checkError: error,
        }),
        [LOGOUT]: (state) => ({
            ...state,
            user: null,
        }),
    },
    initialState,
);
