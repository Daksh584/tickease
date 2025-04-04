// src/components/axiosInstance.js (or utils/axiosInstance.js)
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api', // 👈 Don't duplicate this later
});

// Automatically attach token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log("🔐 Token attached to request:", token); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
