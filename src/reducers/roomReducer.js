import {FETCH_ROOMS} from "../actions/room/fetchRoom";

const initialState = [];

function roomReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ROOMS:
            console.log('reducer odpalony')
            return [...action.payload];
        default:
            return state
    }
}

export default roomReducer;