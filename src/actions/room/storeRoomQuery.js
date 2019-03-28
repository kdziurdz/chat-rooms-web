export const STORE_ROOM_QUERY = 'STORE_ROOM_QUERY';
export function storeRoomQuery(query) {
    return {type: STORE_ROOM_QUERY, payload: {query}}
}