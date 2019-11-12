import { all, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { loginUserSuccess, loginUserError, ILoginUserAction } from './actions/auth';
import { getUsersListSuccess, getUsersListError } from './actions/users';

import * as types from './actions/actionTypes';

function* loginUserSaga({ payload }: ILoginUserAction) {
    try {
        const { data } = yield axios.post('/login', payload);
        yield put(loginUserSuccess(data));
    } catch (error) {
        yield put(loginUserError(error.response));
    }
}

function* getUsersSaga() {
    try {
        const { data } = yield axios.get('/users');
        yield put(getUsersListSuccess(data));
    } catch (error) {
        yield put(getUsersListError(error.response))
    }
}

export default function* rootSaga() {
    yield all([
        yield takeLatest(types.LOGIN_USER, loginUserSaga),
        yield takeLatest(types.GET_USERS_LIST, getUsersSaga)
    ])
}