const axios = require('axios');
const axiosApiInstance = axios.create();

const serverURL = `http://localhost:5001/api/`;
// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async config => {
    console.log('header - ', document.cookie);

    const tokenCookie = document.cookie.split(';').find(cookie => cookie.includes('token'));
    console.log('token cookie - ', tokenCookie);

    const token = tokenCookie.split('=')?.[1];
    console.log('token - ', token);

    config.headers = { 
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return config;
  },
  error => {
    Promise.reject(error)
});

export default axiosApiInstance;