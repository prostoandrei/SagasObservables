import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { Api } from '../../api';
import {
    USER_FETCH_REQUESTED,
 } from '../../actions'
import { userFetchFailed, userFetchSucceeded } from '../../actions';

function* fetchUser(action) {
    
    try {
        const user = yield call(Api.fetchUser, action.payload.userId)
        yield put(userFetchSucceeded(user))
    } catch (error) {
        yield put(userFetchFailed())
    }
}

export function *fetchUserSaga() {
    yield takeEvery(USER_FETCH_REQUESTED, fetchUser)
}