import roomReducer from "./roomReducer";
import { combineReducers } from 'redux'

export default combineReducers({
    rooms: roomReducer
})