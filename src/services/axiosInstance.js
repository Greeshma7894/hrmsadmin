import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to include token in headers
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from localStorage or any other storage
    const token = localStorage.getItem("token"); 
  
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
