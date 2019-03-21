export const FETCH_ROOMS = 'FETCH_ROOMS';

export function fetchRooms() {
    console.log('AKCJA!', {type: FETCH_ROOMS, payload: ['room1', 'room2']})
    return {type: FETCH_ROOMS, payload: ['room1', 'room2']}
}