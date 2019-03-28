import axios from "axios";
import UrlProvider from "./UrlProvider";

const baseURL = UrlProvider.getBaseUrl();

const axiosMain = axios.create({
    baseURL
});

export default axiosMain;