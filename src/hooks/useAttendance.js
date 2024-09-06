import { useMutation } from "react-query";
//import { checkIn, checkOut } from "../api/attendanceService";
import { checkIn,checkOut } from "../services/AttendanceService";
import { getAttendanceAll } from "../services/AttendanceService";
import { useState,useEffect } from "react";

// Hook to handle check-in
export const useCheckIn = () => {
  return useMutation({
    mutationFn: checkIn,
    onSuccess: () => {
      console.log("Checked in successfully!");
    },
    onError: (error) => {
      console.error("Check-in failed:", error);
    },
  });
};

// Hook to handle check-out
export const useCheckOut = () => {
  return useMutation({
    mutationFn: checkOut,
    onSuccess: () => {
      console.log("Checked out successfully!");
    },
    onError: (error) => {
      console.error("Check-out failed:", error);
    },
  });
};


export const useAttendanceData = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await getAttendanceAll();
        console.log("Fetched Response:", response); // Log the response for debugging
        
        const { data } = response; // Assuming the response has a 'data' field

        if (Array.isArray(data)) {
          const currentDate = new Date();
          const currentMonth = currentDate.getMonth(); // JavaScript months are 0-indexed
          const currentYear = currentDate.getFullYear();

          // Filter data for the current month and year
          const filteredData = data.filter(entry => {
            const entryDate = new Date(entry.date);
            return entryDate.getMonth() === currentMonth && entryDate.getFullYear() === currentYear;
          });

          setAttendanceData(filteredData);
        } else {
          console.warn("Unexpected data format:", data);
          setAttendanceData([]);
        }
      } catch (error) {
        console.error("Error fetching attendance data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAttendance();
  }, []);

  return { attendanceData, isLoading, isError };
};