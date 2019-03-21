import {put, takeEvery} from 'redux-saga/effects'
import {FETCH_ROOMS} from "../../actions/room/fetchRoom";
import axiosMain from '../../lib/network/axiosMain'

export const ROOMS_FETCHED = 'ROOMS_FETCHED';

function getRooms() {
    return axiosMain.get('/api/1/rooms/');
}

export function* fetchRoomsAsync(value) {
    console.log('fetchRoomsAsync', value);
    const rooms = yield getRooms();
    yield put({type: ROOMS_FETCHED, payload: rooms.data})
}

export function* watchFetchRoomsAsync() {
    yield takeEvery(FETCH_ROOMS, fetchRoomsAsync)
}