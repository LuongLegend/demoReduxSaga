import {
    SHOW_LOADING,
    HIDE_LOADING,
    SHOW_USER_FORM,
    HIDE_USER_FORM
} from '../constants/ActionTypes'
const initialState = {
    isLoading: false,
    showUserForm: false,
}
const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case HIDE_LOADING:
            return {
                ...state,
                isLoading: false
            };
        case SHOW_USER_FORM:
            return {
                ...state,
                showUserForm: true
            };
        case HIDE_USER_FORM:
            return {
                ...state,
                showUserForm: false
            };
        default:
            return state;
    }
}
export default uiReducer