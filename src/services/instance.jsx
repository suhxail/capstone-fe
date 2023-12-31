import axios from "axios";
import getToken from "../utils/authUtils";

const baseURL = 'http://localhost:3001/api';

// authInstance is for setting the default header
const authInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

// const protectedInstance = axios.create({
//     baseURL: baseURL,
//     timeout: 5000,
// });

// protectedInstance.interceptors.request.use(config => {
//     const token = getToken();
//     if(token){
//         config.headers['Authorization'] = token;
//     } 
//     return config;
// }, error => {
//     return Promise.reject(error)
// });

export default {
    authInstance
    // protectedInstance
}