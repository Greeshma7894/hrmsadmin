import axiosInstance from "./axiosInstance";
import { getUser } from "./api";

export const fetchUserProfile = async () => {
    const response = await axiosInstance.get('/employee/profile/get');
    
    return response.data.data;
  };