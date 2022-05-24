import axios from 'axios';

let BASE_URL = "http://65.0.17.95/";
const getAuthTokens = () => {
    const authTokens = localStorage.getItem('authTokens');
    return authTokens ? JSON.parse(authTokens).access_token : null
}

console.log(getAuthTokens())
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        Authorization: getAuthTokens() !== null
            ? 'Bearer ' + getAuthTokens()
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json'
    }
})

export default axiosInstance