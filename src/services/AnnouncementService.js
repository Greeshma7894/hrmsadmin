import { useQuery } from 'react-query';
import axiosInstance from './axiosInstance';

// Function to fetch announcements
const fetchAnnouncements = async () => {
  const response = await axiosInstance.get('/employee/announcement/get');
  return response.data.data; 
};

// Custom hook to use announcements query
export const useAnnouncements = () => {
  return useQuery('announcements', fetchAnnouncements);
};