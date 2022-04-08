import axios from 'axios';

let BASE_URL = "http://localhost:8000/api/";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
    }
})

export default axiosInstance