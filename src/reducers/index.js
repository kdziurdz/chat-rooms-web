import roomReducer from "./roomReducer";
import {combineReducers} from 'redux'
import roomConnectionReducer from "./roomConnectionReducer";
import tokenReducer from "./tokenReducer";
import roomQueryReducer from "./roomQueryReducer";

export default combineReducers({
    rooms: roomReducer,
    roomConnection: roomConnectionReducer,
    authToken: tokenReducer,
    roomQuery: roomQueryReducer
})