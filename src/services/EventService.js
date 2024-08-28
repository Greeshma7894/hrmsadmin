import axiosInstance from "./axiosInstance"; 
import { useQuery } from "react-query";

const fetchBirthdayUsers = async () => {
    const response = await axiosInstance.get('/employee/event/birth-month/get');
    return response.data.data;
  };
  export const useBirthdayUsers = () => {
    return useQuery('birthdayUsers', fetchBirthdayUsers);
  };
