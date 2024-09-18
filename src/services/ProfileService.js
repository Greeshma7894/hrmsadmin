import axiosInstance from "./axiosInstance";
import { getUser, updateUser } from "./api";
import { useMutation } from "react-query";

export const fetchUserProfile = async () => {
  const response = await axiosInstance.get("/employee/profile/get");

  return response.data.data;
};

const updateUserProfile = async (userData) => {
  const response = await axiosInstance.put('/employee/profile/update', {
    fields: userData // Ensure the payload format matches API expectations
  });
  return response.data;
};

export const useUpdateUserProfile = (onSuccess, onError) => {
  return useMutation(updateUserProfile, {
    onSuccess, // Callback when the mutation is successful
    onError, // Callback when an error occurs
  });
};
