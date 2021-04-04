import { fork, takeLatest, takeEvery, call, put, delay, select } from 'redux-saga/effects' //non-blocking
import {
    DELETE_USER,
    FETCH_USER,
    REMOVE_CURRENT_USER
} from '../constants/ActionTypes'

import {
    getUserSuccess,
    deleteUserSuccess
} from '../actions/user'
import {
    removeCurrentUser
} from '../actions/currentUser'
import { showLoading, hideLoading } from '../actions/ui'
import callApi from '../utils/callApi'

function* watchFetchListUser({ keyword }) {
    // yield take(FETCH_USER)//follow action
    //block until dispatch FETCH_USER action
    yield delay(500);
    yield put(showLoading());
    const res = yield call(() => callApi('user', 'GET', { search: keyword }));
    if (res && res.status === 200) {
        //dispatch action
        yield put(getUserSuccess(res.data))
    }
    yield put(hideLoading());
}

function* watchDeleteUser({ item }) {
    const { id, name } = item;
    yield put(showLoading());
    const res = yield call(() => callApi(`user/${id}`, 'DELETE'));
    if (res && res.status === 200) {
        const user = yield select(state => state.user);
        //remove user from state
        const newUsers = user.filter(item => item.id !== id);
        yield put(deleteUserSuccess(newUsers));
        yield put(hideLoading());
        //check if current user was user's removed
        const currentUser = yield select(state => state.currentUser);
        if(currentUser.id === id)
            yield put(removeCurrentUser());
        // yield alert(`Đã xóa tài khoản ${name} thành công`)
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
    yield takeLatest(FETCH_USER, watchFetchListUser);
    yield takeEvery(DELETE_USER, watchDeleteUser);
    yield fork(watchAddNewUser);
    yield fork(watchUpdateUser);
}

export default rootSaga