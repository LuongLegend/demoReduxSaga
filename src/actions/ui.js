import {
    SHOW_LOADING,
    HIDE_LOADING,
    SHOW_USER_FORM,
    HIDE_USER_FORM
} from '../constants/ActionTypes'

export const showLoading = () => {
    return {
        type: SHOW_LOADING
    }
}
export const hideLoading = () => {
    return {
        type: HIDE_LOADING
    }
}
export const showUserForm = () => {
    return {
        type: SHOW_USER_FORM
    }
}
export const hideUserForm = () => {
    return {
        type: HIDE_USER_FORM
    }
}
