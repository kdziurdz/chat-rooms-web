import axiosMain from "../../network/axiosMain";
import urls from "../urls.const";

function getRooms() {
    return axiosMain.get(urls.ROOMS);
}

export default getRooms