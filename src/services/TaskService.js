import axiosInstance from "./axiosInstance"; 
import { useQuery } from "react-query";

// Function to fetch assigned tasks
const fetchAssignedTasks = async () => {
    const response = await axiosInstance.get('/employee/task/assigned/get');
    return response.data.data;
};

//Hook
export const useAssignedTasks = () => {
    return useQuery('assignedTasks', fetchAssignedTasks);
};
