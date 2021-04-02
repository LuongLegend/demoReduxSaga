import { fork, take, takeEvery, call, put, delay } from 'redux-saga/effects' //non-blocking
import {
    FETCH_USER,
} from '../constants/ActionTypes'

import { getUserSuccess } from '../actions/user'
import { showLoading, hideLoading } from '../actions/ui'
import callApi from '../utils/callApi'

function* watchFetchListUser() {
    // yield take(FETCH_USER)//follow action
    //block until dispatch FETCH_USER action
    yield put(showLoading());
    // yield delay(500);
    const res = yield call(() => callApi('user', 'GET'));
    if (res && res.status === 200) {
        //dispatch action
        yield put(getUserSuccess(res.data))
    }
    yield put(hideLoading());
}

function* watchAddNewUser() {
    console.log('add new user')
}
function* watchUpdateUser() {
    console.log('update user')
}
function* rootSaga() {
    yield takeEvery(FETCH_USER,watchFetchListUser);
    yield fork(watchAddNewUser);
    yield fork(watchUpdateUser);
}

export default rootSaga