import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import sagas from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(sagas);

export default store;