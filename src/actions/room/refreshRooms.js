export const FETCH_ROOMS = 'FETCH_ROOMS';

export function refreshRooms(query) {
    return {type: FETCH_ROOMS, payload: {query}}
}