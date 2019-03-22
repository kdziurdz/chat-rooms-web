import roomReducer from "./roomReducer";
import {combineReducers} from 'redux'
import roomConnectionReducer from "./roomConnectionReducer";

export default combineReducers({
    rooms: roomReducer,
    roomConnection: roomConnectionReducer
})