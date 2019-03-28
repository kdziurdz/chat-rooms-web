import { all } from 'redux-saga/effects'
import {watchFetchRoomsAsync} from "./room/fetchRoom";
export default function* rootSaga() {
    yield all([
        watchFetchRoomsAsync()
    ])
}