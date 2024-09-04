import axiosInstance from "./axiosInstance";
import { useQuery } from "react-query";

// Function to fetch assigned tasks for a specific date
const fetchAssignedTasks = async (date) => {
  // Ensure date is formatted correctly as a string
  const formattedDate = typeof date === 'string' ? date : date.format('YYYY-MM-DD');

  const response = await axiosInstance.get('/employee/task/assigned/get', {
    params: { date: formattedDate } // Pass the date as a query parameter
  });
  return response.data.data;
};

// Hook
export const useAssignedTasks = (date) => {
  return useQuery(['assignedTasks', date], () => fetchAssignedTasks(date), {
    enabled: !!date, // Ensure the query runs only when a date is available
  });
};
