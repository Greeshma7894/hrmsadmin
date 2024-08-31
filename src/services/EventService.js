import axiosInstance from "./axiosInstance"; 
import { useQuery } from "react-query";

// Fetch Birthday Users
const fetchBirthdayUsers = async () => {
  const response = await axiosInstance.get('/employee/event/birth-month/get');
  return response.data.data;
};

// Fetch Work Anniversary Users
const fetchWorkAnniversaryUsers = async () => {
  const response = await axiosInstance.get('/employee/event/join-month/get');
  return response.data.data;
};

// Fetch New Joinees
const fetchNewJoinees = async () => {
  const response = await axiosInstance.get('/employee/event/join-month/get');
  return response.data.data;
};


// Hooks to Use in Components
export const useBirthdayUsers = () => {
  return useQuery('birthdayUsers', fetchBirthdayUsers);
};

export const useWorkAnniversaryUsers = () => {
  return useQuery('workAnniversaryUsers', fetchWorkAnniversaryUsers);
};

export const useNewJoinees = () => {
  return useQuery('newJoinees', fetchNewJoinees);
};


