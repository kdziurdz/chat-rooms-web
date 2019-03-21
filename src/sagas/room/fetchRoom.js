import { put, takeEvery } from 'redux-saga/effects'
export const FETCH_ROOMS = 'FETCH_ROOMS';
export const FETCHED = 'FETCHED';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function fetchRooms() {
    console.log('AKCJA!', {type: FETCH_ROOMS, payload: ['room1', 'room2']})
    return {type: FETCH_ROOMS, payload: ['room1', 'room2']}
}

export function* fetchRoomsAsync(value) {
    console.log('fetchRoomsAsync', value);
    yield delay(1000);
    yield put({ type: FETCHED,  payload: ['YELDED1', 'YELDED2', 'YELDED3']})
}

export function* watchFetchRoomsAsync() {
    yield takeEvery(FETCH_ROOMS, fetchRoomsAsync)
}