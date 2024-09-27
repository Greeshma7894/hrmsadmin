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
    const token = localStorage.getItem("token");
    console.log("Using Token:", token); // Debug statement

    if (token) {
      config.headers["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6NCwiUHJpdmlsZWdlIjoxLCJSb2xlIjoiRU1QTE9ZRUUiLCJpYXQiOjE3MjQ5OTE2NTN9.8s4tO9e7-wdq5nlDzDsJurYcvKlAfwAEJ1hQr3WvEuM`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default axiosInstance;
