import axiosMain from "../../network/axiosMain";
import urls from "../urls.const";

function getRooms(query = null) {
    return axiosMain.get(urls.ROOMS, {
        params: {
            query: query || null
        }
    });
}

export default getRooms