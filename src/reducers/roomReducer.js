import {ROOMS_FETCHED} from "../sagas/room/fetchRoom";


const initialState = [];

function roomReducer(state = initialState, action) {
    switch (action.type) {
        case ROOMS_FETCHED:
            return [...action.payload];
        default:
            return state
    }
}

export default roomReducer;