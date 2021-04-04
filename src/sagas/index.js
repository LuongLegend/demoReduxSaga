import { fork, takeLatest, takeEvery, call, put, delay, select } from 'redux-saga/effects' //non-blocking
import {
    DELETE_USER,
    FETCH_USER,
    ADD_USER,
    UPDATE_USER
} from '../constants/ActionTypes'

import {
    getUserSuccess,
    deleteUserSuccess,
    addUserSuccess,
    updateUserSuccess
} from '../actions/user'
import {
    updateCurrentUser,
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
        const newUserList = user.filter(item => item.id !== id);
        yield put(deleteUserSuccess(newUserList));
        //check if current user was user's removed
        const currentUser = yield select(state => state.currentUser);
        if (currentUser.id === id)
            yield put(removeCurrentUser());
        alert(`Đã xóa tài khoản ${name} thành công`)
    }
    yield put(hideLoading());
}
function* watchAddNewUser({ item }) {
    yield put(showLoading());
    const res = yield call(() => callApi(`user`, 'POST', item));
    if (res && res.status === 201) {
        const user = yield select(state => state.user);
        const newUserList = [...user, res.data];
        yield put(addUserSuccess(newUserList));
        alert('Thêm mới tài khoản thành công')
    }
    yield put(hideLoading());
}
function* watchUpdateUser({ item }) {
    yield put(showLoading());
    const res = yield call(() => callApi(`user/${item.id}`, 'PUT', item));
    if (res && res.status === 200) {
        //update user list
        const user = yield select(state => state.user);
        const userIndex = user.findIndex(i => i.id === item.id);
        user[userIndex] = item;
        yield put(updateUserSuccess(user));
        //update currentUser
        yield put(updateCurrentUser(item));
        alert('Cập nhật tài khoản thành công')
    }
    yield put(hideLoading());
}
function* rootSaga() {
    yield takeLatest(FETCH_USER, watchFetchListUser);
    yield takeEvery(DELETE_USER, watchDeleteUser);
    yield takeEvery(ADD_USER, watchAddNewUser);
    yield takeEvery(UPDATE_USER, watchUpdateUser);
}

export default rootSaga