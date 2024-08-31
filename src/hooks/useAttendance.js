import { useMutation } from "react-query";
import { checkIn, checkOut } from "../api/attendanceService";

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
