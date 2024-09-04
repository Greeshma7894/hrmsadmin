import axiosInstance from "./axiosInstance"; 
import { useState, useEffect } from "react";

// Function to check in
export const checkIn = async () => {
  try {
    const response = await axiosInstance.post("/employee/attendance/in");
    return response.data;
  } catch (error) {
    console.error(
      "Error checking in:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// Function to check out
export const checkOut = async () => {
  try {
    const response = await axiosInstance.post("/employee/attendance/out");
    return response.data; 
  } catch (error) {
    console.error("Error checking out:", error);
    throw error;
  }
};

// Function to get attendance data
export const getAttendanceList = async () => {
    try {
      const response = await axiosInstance.get("/employee/attendance/list");
      return response.data; 
    } catch (error) {
      console.error("Error fetching attendance list:", error);
      throw error;
    }
  };

  export const getAttendanceAll = async () => {
    try {
      const response = await axiosInstance.get("/employee/attendance/list/all");
      console.log("hemme", response.data); // Log the full response for debugging
  
      return response.data; 
    } catch (error) {
      console.error("Error fetching attendance list:", error);
      throw error;
    }
  };
  
  