import {STORE_ROOM_QUERY} from "../actions/room/storeRoomQuery";

const initialState = null;

function roomQueryReducer(state = initialState, action) {
    switch (action.type) {
        case STORE_ROOM_QUERY:
            return action.payload.query;
        default:
            return state
    }
}

export default roomQueryReducer;