import {ROOM_SELECTED} from "../actions/room/selectRoom";

const initialState = [];

function roomReducer(state = initialState, action) {
    switch (action.type) {
        case ROOM_SELECTED:
            return {id: action.payload.id};
        default:
            return state
    }
}

export default roomReducer;