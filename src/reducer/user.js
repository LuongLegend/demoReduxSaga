import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    DELETE_USER,
    DELETE_USER_SUCCESS
} from '../constants/ActionTypes'

const userReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_USER:
            return state;
        case FETCH_USER_SUCCESS:
            return [...action.user];
        case DELETE_USER:
            return state;
        case DELETE_USER_SUCCESS:
            return [...action.user];
        default:
            return state;
    }
}
export default userReducer