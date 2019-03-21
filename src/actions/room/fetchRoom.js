export const FETCH_ROOMS = 'FETCH_ROOMS';
export function fetchRooms(query) {
    return {type: FETCH_ROOMS, payload: {query}}
}