import jwtDecode from "jwt-decode";

export const STORE_TOKEN = 'STORE_TOKEN';
export const CLEAR_TOKEN = 'CLEAR_TOKEN';

function decodeToken(token) {
    return jwtDecode(token)
}

export function storeToken(token) {
    return {type: STORE_TOKEN, payload: {raw: token, decoded: decodeToken(token)}}
}

export function clearToken() {
    return {type: CLEAR_TOKEN}
}