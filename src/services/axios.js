import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://server.appsstaging.com/1461/ask_india/public/api/',
});

axiosInstance.interceptors.response.use(
  response => response,
  error =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong',
    ),
);

export default axiosInstance;
