import {put, select, takeEvery} from 'redux-saga/effects'
import {FETCH_ROOMS} from "../../actions/room/fetchRoom";
import getRooms from "../../lib/api/rooms/getRooms";

export const ROOMS_FETCHED = 'ROOMS_FETCHED';


export function* fetchRoomsAsync() {
    const query = yield select((state) => state.roomQuery);
    const rooms = yield getRooms(query);
    yield put({type: ROOMS_FETCHED, payload: rooms.data})
}

export function* watchFetchRoomsAsync() {
    yield takeEvery(FETCH_ROOMS, fetchRoomsAsync)
}