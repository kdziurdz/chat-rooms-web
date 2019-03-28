export const SELECT_ROOM = 'SELECT_ROOM';
export const ROOM_SELECTED = 'ROOM_SELECTED';

export function selectRoom(id) {
    return {type: ROOM_SELECTED, payload: {id}}
}