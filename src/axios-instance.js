import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});

instance.interceptors.request.use(function (config) {
    const token = reactLocalStorage.get('token');
    config.headers.Authorization =  token;

    return config;
});

export default instance;