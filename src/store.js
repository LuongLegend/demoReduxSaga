import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { persistStore } from 'redux-persist';

import rootReducer from './reducer'

const middleware = [];
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export const persistor = persistStore(store);