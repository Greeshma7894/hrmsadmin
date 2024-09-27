import axiosInstance from "./axiosInstance";
import { getUser, updateUser } from "./api";
import { useMutation } from "react-query";

export const fetchUserProfile = async ({userData}) => {
  const response = await axiosInstance.get("/employee/profile/get");

  return response.data.data;
};

const updateUserProfile = async (userData) => {
  try {
    const response = await axiosInstance.put("/employee/profile/update", {
      fields: userData,
    });

    console.log("Response from server after update:", response.data);

    // Check if data is null and handle accordingly
    if (response.data) {
      return response.data; // Return actual user data if present
    } else {
      // Handle the case where no user data is returned
      console.warn("No user data returned after update");
      return null; // Or handle as needed
    }
  } catch (error) {
    console.error("Error updating user profile:", error.response?.data || error.message);
    throw error;
  }
};


export const useUpdateUserProfile = (onSuccess, onError) => {
  return useMutation(updateUserProfile, {
    onSuccess, // Callback when the mutation is successful
    onError, // Callback when an error occurs
  });
};

const uploadProfileImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile); // Append the image file to FormData

  const response = await axiosInstance.post(
    "/employee/profile/image/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data", // Required for file uploads
      },
    }
  );

  return response.data; // Return the API response
};

export const useUploadProfileImage = (onSuccess, onError) => {
  return useMutation(uploadProfileImage, {
    onSuccess, // Callback when the mutation is successful
    onError, // Callback when an error occurs
  });
};
