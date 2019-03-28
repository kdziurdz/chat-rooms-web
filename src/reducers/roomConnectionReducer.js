import {CLEAR_ROOM_CONNECTION, STORE_ROOM_CONNECTION} from "../actions/room/storeRoomConnection";

const initialState = null;

function roomConnectionReducer(state = initialState, action) {
    switch (action.type) {
        case STORE_ROOM_CONNECTION:
            return action.payload;
        case CLEAR_ROOM_CONNECTION:
            return null;
        default:
            return state
    }
}

export default roomConnectionReducer;