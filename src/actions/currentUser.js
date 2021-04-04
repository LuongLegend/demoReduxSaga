import {
    GET_CURRENT_USER,
    UPDATE_CURRENT_USER,
    REMOVE_CURRENT_USER
} from '../constants/ActionTypes'

export const getCurrentUser = (currentUser) => {
    return {
        type: GET_CURRENT_USER,
        currentUser
    }
}

export const updateCurrentUser = (currentUser) => {
    return {
        type: UPDATE_CURRENT_USER,
        currentUser
    }
}

export const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    }
}

