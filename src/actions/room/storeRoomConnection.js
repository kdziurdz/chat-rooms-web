export const STORE_ROOM_CONNECTION = 'STORE_ROOM_CONNECTION';
export const CLEAR_ROOM_CONNECTION = 'CLEAR_ROOM_CONNECTION';

export function storeRoomConnection(connection) {
    return {type: STORE_ROOM_CONNECTION, payload: connection}
}

export function clearRoomConnection() {
    return {type: CLEAR_ROOM_CONNECTION}
}