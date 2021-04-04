import {
    GET_CURRENT_USER,
    UPDATE_CURRENT_USER,
    REMOVE_CURRENT_USER
} from '../constants/ActionTypes'

const currentUserReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CURRENT_USER:
            return action.currentUser;
        case UPDATE_CURRENT_USER:
            return action.currentUser;
        case REMOVE_CURRENT_USER:
            return {};
        default:
            return state;
    }
}
export default currentUserReducer