import { fork, takeLatest, takeEvery, call, put, delay } from 'redux-saga/effects' //non-blocking
import {
    FETCH_USER,
} from '../constants/ActionTypes'

import { getUserSuccess } from '../actions/user'
import { showLoading, hideLoading } from '../actions/ui'
import callApi from '../utils/callApi'

function* watchFetchListUser({keyword}) {
    // yield take(FETCH_USER)//follow action
    //block until dispatch FETCH_USER action
    yield delay(500);
    yield put(showLoading());
    const res = yield call(() => callApi('user', 'GET', {search: keyword}));
    console.log(res);
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
    yield takeLatest(FETCH_USER,watchFetchListUser);
    yield fork(watchAddNewUser);
    yield fork(watchUpdateUser);
}

export default rootSaga