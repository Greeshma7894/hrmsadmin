import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import {
  checkIn,
  checkOut,
  getAttendanceList,
  // getAttendanceAll,
  // fetchAttendanceForCurrentMonth
} from "../services/AttendanceService";
import AttendanceCalendar from "./AttendanceCalendar";

const Attendance = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [workingHours, setWorkingHours] = useState("00:00:00");
  const [checkInTime, setCheckInTime] = useState("00:00");

  const [recentOutTime, setRecentOutTime] = useState("00:00");

  const [recentInTime, setRecentInTime] = useState("00:00");
  //const [attendanceData, setAttendanceData] = useState([]);

  const { mutate: handleCheckIn, isLoading: isCheckingIn } = useMutation(
    checkIn,
    {
      onSuccess: () => {
        setIsCheckedIn(true);
        fetchAttendanceData();
      },
    }
  );

  const { mutate: handleCheckOut, isLoading: isCheckingOut } = useMutation(
    checkOut,
    {
      onSuccess: () => {
        setIsCheckedIn(false);
        fetchAttendanceData();
      },
    }
  );

  const handleCheckInOut = () => {
    if (isCheckedIn) {
      handleCheckOut();
    } else {
      handleCheckIn();
    }
  };

  const formatTime = (isoString) => {
    if (!isoString) return "00:00 AM";
    const timePart = isoString.split("T")[1].split("Z")[0];
    const [hours, minutes] = timePart.split(":");
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${period}`;
  };

  const fetchAttendanceData = async () => {
    try {
      const data = await getAttendanceList();
      //console.log("Attendance Data:", data);

      const { total_work_time } = data.data;
      setWorkingHours(total_work_time || "00:00:00");

      if (data && Array.isArray(data.data.attendance)) {
        const attendance = data.data.attendance;

        const checkIn = attendance.find((item) => item.status === "IN");
        const checkInTime = formatTime(checkIn?.time);
        setCheckInTime(checkInTime)
        //console.log("CHECKIN time is",checkInTime);


        // Check-in entry
        const lastCheckIn = attendance
          .filter((entry) => entry.status === "IN")
          .pop();
        const recentInTime = formatTime(lastCheckIn?.time);
        //console.log("recent time is", recentInTime);

        setRecentInTime(recentInTime);

        // Check-out entry
        const lastCheckOut = attendance
          .filter((entry) => entry.status === "OUT")
          .pop();
        const recentOutTime = formatTime(lastCheckOut?.time);
        //console.log("recentOuttime is ", recentOutTime);

        setRecentOutTime(recentOutTime);

        // Set the state for check-in status
        const lastEntry = attendance[attendance.length - 1];
        const isCheckedIn = lastEntry?.status === "IN";
        setIsCheckedIn(isCheckedIn);
      }
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    }
  };

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  return (
    <div className="flex h-full flex-col">
      {" "}
      {/* Flex container taking full screen height */}
      {/* Sidebar / Attendance */}
      <div className="max-w-1245:h-[170px] dark:bg-black w-full px-2 bg-white dark:border border-gray-700 rounded-lg shadow-md mb-2 pt-5 pb-3">
        <div className="flex justify-around dark:bg-black bg-white items-center px-2 pb-3 pt-2 max-w-1245:-mt-3">
          <div>
            <h1 className="max-w-1245:text-xs text-md dark:text-white text-black font-sf-pro">
              {checkInTime}
            </h1>
            <p className="ps-1 max-w-1245:text-[11px] text-sm text-gray-600 font-sf-pro">
              Check-in
            </p>
          </div>
          <div className="h-12 w-px bg-gray-200"></div> {/* Divider */}
          <div>
            <h1 className="max-w-1245:text-xs text-md dark:text-white text-black mx-3 font-sf-pro">
              {recentOutTime || "00:00"}
            </h1>
            <p className="ps-3 max-w-1245:text-[11px] text-sm text-gray-600 font-sf-pro">
              Check-out
            </p>
          </div>
          <div className="max-w-1245:text-xs dark:bg-gray-800 bg-lime-50 rounded-xl px-4 py-2">
            <h1 className="max-w-1245:text-xs text-bold text-lime-500 mx-4">
              {workingHours}
            </h1>
            <p className="max-w-1245:text-[11px] text-sm text-gray-500 font-sf-pro">
              Working hours
            </p>
          </div>
        </div>
        <div className="flex dark:border border-gray-700 items-center w-full dark:bg-black max-w-1245:mt-1 justify-center bg-gray-100 p-2 mt-5 rounded-xl">
          <div
            onClick={handleCheckInOut}
            className={`flex justify-center w-1/3 px-4 py-4 rounded-lg cursor-pointer ${
              isCheckedIn
                ? "dark:bg-red-500 bg-red-500"
                : "dark:bg-green-500 bg-green-500"
            }`}
          >
            <h1 className="max-w-1245:text-[10px] dark:max-w-1245:text-[10px] text-sm text-white font-sf-pro">
              {isCheckingIn || isCheckingOut
                ? "Processing..."
                : isCheckedIn
                ? "Check-Out"
                : "Check-In"}
            </h1>
          </div>
          <div className="flex items-center w-1/3 justify-center">
            <div className="flex flex-col justify-center">
              <h1 className="max-w-1245:text-xs text-md dark:text-white text-black font-sf-pro">
                {recentInTime || "00:00"}
              </h1>
              <p className="max-w-1245:text-[11px] text-sm text-gray-500 font-sf-pro">
                Recent in
              </p>
            </div>
            <div className="h-12 flex justify-center bg-gray-200"></div>
          </div>
          <div className="justify-center flex flex-col items-center h-full w-1/3">
            <h1 className="max-w-1245:text-xs text-md dark:text-white text-black mx-2 font-sf-pro">
              {recentOutTime || "00:00"}
            </h1>
            <p className="max-w-1245:text-[11px] text-sm text-gray-500 font-sf-pro">
              Recent out
            </p>
          </div>
        </div>
      </div>
      {/* Attendance Calendar Header */}
      <div className="overflow-y-scroll scrollbar-hide">
      <AttendanceCalendar/>
      </div>
    </div>
  );
};

export default Attendance;
