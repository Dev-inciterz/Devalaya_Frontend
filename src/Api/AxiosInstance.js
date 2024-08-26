// src/api/axiosInstances.js
import axios from 'axios';

const BaseUrl = process.env.REACT_APP_API_BASE_URL
console.log("the url", BaseUrl)
// Axios instance without Bearer token
const axiosWithoutToken = axios.create({


  baseURL: BaseUrl, // Replace with your API base URL from environment variables
  headers: {
    'Content-Type': 'application/json', // Set default content type if applicable
  },
});

// Axios instance with Bearer token
const axiosWithToken = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Replace with your API base URL from environment variables
  headers: {
    'Content-Type': 'application/json', // Set default content type if applicable
  },
});

// Request interceptor for adding Bearer token
axiosWithToken.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get the token from local storage or any other storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optionally, add response interceptors to handle common errors
axiosWithToken.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Example: Redirect to login page on 401 unauthorized error
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export { axiosWithoutToken, axiosWithToken };
