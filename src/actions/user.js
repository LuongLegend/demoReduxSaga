import {
    FETCH_USER,
    FETCH_USER_SUCCESS
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
