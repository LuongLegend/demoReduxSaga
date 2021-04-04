import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    ADD_USER,
    ADD_USER_SUCCESS,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
} from '../constants/ActionTypes'

export const getUser = (keyword = '') => {
    return {
        type: FETCH_USER,
        keyword
    }
}
export const getUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        user
    }
}

export const deleteUser = (item) => {
    return {
        type: DELETE_USER,
        item
    }
}

export const deleteUserSuccess = (user) => {
    return {
        type: DELETE_USER_SUCCESS,
        user
    }
}
export const addUser = (item) => {
    return {
        type: ADD_USER,
        item
    }
}

export const addUserSuccess = (user) => {
    return {
        type: ADD_USER_SUCCESS,
        user
    }
}
export const updateUser = (item) => {
    return {
        type: UPDATE_USER,
        item
    }
}

export const updateUserSuccess = (user) => {
    return {
        type: UPDATE_USER_SUCCESS,
        user
    }
}
