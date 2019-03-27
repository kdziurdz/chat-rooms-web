import {CLEAR_TOKEN, STORE_TOKEN} from "../actions/user/storeToken";

const initialState = null;

function tokenReducer(state = initialState, action) {
    switch (action.type) {
        case STORE_TOKEN:
            return action.payload;
        case CLEAR_TOKEN:
            return null;
        default:
            return state
    }
}

export default tokenReducer;