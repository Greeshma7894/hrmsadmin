import axiosInstance from "./axiosInstance";
import { useQuery , useMutation } from "react-query";

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

const postApplyLeave = async (leaveData) => {
  const response = await axiosInstance.post('/employee/leave/apply', leaveData);
  return response.data.data; // Adjust this based on the API response structure
};

// Hook for applying leave
export const useApplyLeave = () => {
  return useMutation(postApplyLeave, {
    onSuccess: (data) => {
      console.log("Leave applied successfully:", data);
    },
    onError: (error) => {
      console.error("Error applying leave:", error);
    },
  });
};
