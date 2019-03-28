import axiosMain from "../../network/axiosMain";
import urls from "../urls.const";

function createRoom(name, password) {
    return axiosMain.post(urls.ROOMS, {name, password});
}

export default createRoom;