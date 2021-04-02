import {
    FETCH_USER,
    FETCH_USER_SUCCESS
} from '../constants/ActionTypes'

export const getUser = () => {
    return {
        type: FETCH_USER
    }
}
export const getUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        user
    }
}
