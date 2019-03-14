import axios from "axios";

const envMode = process.env.NODE_ENV;

let baseURL;

switch (envMode) {
    case 'development': { // production
        baseURL = 'https://samplespring.cfapps.io';
        break;
    }
    default: {
        baseURL = 'http://localhost:8080/'
    }
}
const axiosMain = axios.create({
    baseURL
});

export default axiosMain;