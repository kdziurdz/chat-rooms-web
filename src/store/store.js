import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'

//const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    //applyMiddleware(sagaMiddleware)
);
//sagaMiddleware.run(helloSaga)

export default store;