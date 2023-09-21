import axios from 'axios';
/** Default config for axios instance */
const API_ENDPOINT = 'https://my-json-server.typicode.com/';
let config = {
    baseURL: `${API_ENDPOINT}`
};

/** Creating the instance for axios */
const httpClient = axios.create(config);

/** Adding the response interceptors */
httpClient.interceptors.response.use(
    response => {
        /** TODO: Add any response interceptors */
        return response;
    },
    error => {
        /** TODO: Do something with response error */
        return Promise.reject(error);
    }
);

export default httpClient;