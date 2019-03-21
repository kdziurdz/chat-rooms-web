import {ROOMS_FETCHED} from "../sagas/room/fetchRoom";


const initialState = [];

function roomReducer(state = initialState, action) {
    switch (action.type) {
        case ROOMS_FETCHED:
            console.log('reducer odpalony');
            console.log('action.payload', action.payload);
            return [...action.payload];
        default:
            return state
    }
}

export default roomReducer;