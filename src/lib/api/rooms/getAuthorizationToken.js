import axiosMain from "../../network/axiosMain";
import urls from "../urls.const";

function getAuthorizationToken (roomId, username, password = null) {
    return axiosMain.post(urls.ROOMS + roomId, {username, password});
}

export default getAuthorizationToken;