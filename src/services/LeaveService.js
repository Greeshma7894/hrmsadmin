import axiosInstance from "./axiosInstance";
import { useQuery } from "react-query";

// Function to fetch leave data
const fetchLeaveData = async (params) => {
  const response = await axiosInstance.get('/employee/leave/get', {
    params: params, // Pass any additional parameters if needed
  });
  return response.data.data; // Adjust this according to the structure of your API response
};

// Hook to use leave data in a component
export const useLeaveData = (params) => {
  return useQuery(['leaveData', params], () => fetchLeaveData(params), {
    enabled: !!params, // Ensure the query runs only when params are available
  });
};
