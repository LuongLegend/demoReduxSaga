import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer'
import rootSaga from './sagas'
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);