import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './user'
import currentUserReducer from './currentUser'
import uiReducer from './ui'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    user: userReducer,
    currentUser: currentUserReducer,
    ui: uiReducer
});

// export default rootReducer;
export default persistReducer(
    persistConfig,
    rootReducer);
