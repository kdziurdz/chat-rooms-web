import roomReducer from "./roomReducer";
import {combineReducers} from 'redux'
import roomConnectionReducer from "./roomConnectionReducer";
import tokenReducer from "./tokenReducer";

export default combineReducers({
    rooms: roomReducer,
    roomConnection: roomConnectionReducer,
    authToken: tokenReducer
})