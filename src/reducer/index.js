import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './user'
import uiReducer from './ui'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    user: userReducer,
    ui: uiReducer
});

export default persistReducer(persistConfig, rootReducer);
