import {
    GET_CURRENT_USER,
    UPDATE_CURRENT_USER,
    REMOVE_CURRENT_USER
} from '../constants/ActionTypes'

const currentUserReducer = (state = null, action) => {
    switch (action.type) {
        case GET_CURRENT_USER:
            return action.currentUser;
        case UPDATE_CURRENT_USER:
            return action.currentUser;
        case REMOVE_CURRENT_USER:
            return null;
        default:
            return state;
    }
}
export default currentUserReducer