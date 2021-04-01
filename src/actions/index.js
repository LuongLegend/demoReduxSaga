import {
    GET_USER
} from '../constants/ActionTypes'
export const getUser = (user) => {
    return {
        type: GET_USER,
        user
    }
}