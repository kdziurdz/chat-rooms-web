import axiosMain from "../../network/axiosMain";
import urls from "../urls.const";

function getMessages(roomId, query = null) {
    return axiosMain.get(`${urls.ROOMS}${roomId}/messages`, {
        params: {
            query: query || null
        }
    });
}

export default getMessages