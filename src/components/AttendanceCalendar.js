import React from "react";
import { useAttendanceData } from "../hooks/useAttendance";

const AttendanceCalendar = () => {
  const { attendanceData, isLoading, isError } = useAttendanceData();
  //console.log("Attendance Data is:", attendanceData); // Log attendance data

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading attendance data</p>;
  if (!attendanceData.length)
    return <p>No attendance records available for August.</p>;

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="max-w-1245:text-xs ps-3 mb-1 text-sm dark:text-gray-400 text-gray-600">
          Attendance Calendar
        </h1>
        <h1 className="max-w-1245:text-xs text-sm text-green-500 mr-1 cursor-pointer hover:underline">
          View all
        </h1>
      </div>
      <div className="rounded-lg scrollbar-hide max-w-1245:h-[58%] min-w-1245:h-[70%] overflow-y-scroll">
        {attendanceData.map((entry, index) => (
          <div
            key={index}
            className="dark:bg-black bg-white border dark:border-gray-700 rounded-xl shadow-md pt-2 pb-2 px-3 flex items-center justify-between mb-2 max-w-1245:h-[70px]"
          >
            <div>
              <h1 className="max-w-1245:text-xl text-2xl dark:text-white text-black">
                {new Date(entry.date).getDate()}{" "}
              </h1>
              <p className="text-xs ps-1.5 text-gray-500">
                {new Date(entry.date).toLocaleString("default", {
                  month: "short",
                })}
              </p>
            </div>
            <div className="ml-5 mb-1">
              <h2 className="text-xs pt-2 dark:text-white text-black">
                {entry.total_work_time} Hours
              </h2>
              {/* Display the time from the attendance array */}
              <p className="text-[10px] dark:text-gray-400 text-gray-700">
  {entry.attendance[0] && entry.attendance[0].time ? (
    `${entry.attendance[0].time.slice(11, 16)} ${
      parseInt(entry.attendance[0].time.slice(11, 13), 10) >= 12 ? 'PM' : 'AM'
    }`
  ) : "N/A"}
</p>


              <p className="max-w-1245:text-[10px] text-xs mt-2 font-bold text-green-700">
                Get Details
              </p>
            </div>
            <div
              className={`max-w-1245:h-[24px] max-w-1245:w-[70px] h-[27px] w-[75px] ml-auto rounded-full mb-6 pt-1 max-w-1245:text-[10px] text-xs text-center ${
                entry.status === "On time"
                  ? "bg-lime-500 text-black"
                  : entry.status === "Late"
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              {entry.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceCalendar;
