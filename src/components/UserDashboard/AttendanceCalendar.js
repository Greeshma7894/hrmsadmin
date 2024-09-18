import React from "react";
import { useAttendanceData } from "../../hooks/useAttendance";

const AttendanceCalendar = () => {
  const { attendanceData, isLoading, isError } = useAttendanceData();
 // console.log("attendance Data", attendanceData);

  // Get the current month and year
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // JavaScript months are 0-indexed
  const currentYear = currentDate.getFullYear(); // Full year

  //console.log("Current Month:", currentMonth);
  //console.log("Current Year:", currentYear);

  const filteredAttendance = attendanceData.filter((entry) => {
    const entryDate = new Date(Date.parse(entry.date));
    return (
      entryDate.getMonth() === currentMonth &&
      entryDate.getFullYear() === currentYear
    );
  });

  const formatTime = (isoString) => {
    if (!isoString) return "00:00 AM";
    const timePart = isoString.split("T")[1].split("Z")[0];
    const [hours, minutes] = timePart.split(":");
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${period}`;
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading attendance data</p>;
  if (!filteredAttendance.length)
    return <p>No attendance records available for this month.</p>;

  return (
    <>
      <div className="rounded-lg scrollbar-hide overflow-y-auto h-[58vh] max-h-[70vh]">
        {filteredAttendance.map((entry, index) => (
          <div
            key={index}
            className="dark:bg-black bg-white border dark:border-gray-700 rounded-xl shadow-md pt-2 pb-2 px-3 flex items-center justify-between mb-2 max-w-1245:h-[70px]"
          >
            <div className="">
              <h1 className="max-w-1245:text-xl text-2xl dark:text-white text-black ps-2">
                {new Date(entry.date).getDate()}{" "}
              </h1>
              <p className="text-xs ps-1.5 text-gray-800 dark:text-white">
                {new Date(entry.date).toLocaleString("default", {
                  month: "short",
                })}
              </p>
            </div>

            <div className="ml-5 mb-1">
              <h2 className="text-xs pt-2 dark:text-white text-black max-w-1245:text-[11px]">
                {entry.total_work_time} Hours
              </h2>
              {/* Display the time from the attendance array */}
              <p className="text-[10px] dark:text-gray-400 text-gray-900 pt-1">
                {entry.attendance && entry.attendance.length > 0 ? (
                  <>
                    {/* Entry Time (first 'in') */}
                    {entry.attendance[0].time ? (
                      <>{formatTime(entry.attendance[0].time)}</>
                    ) : (
                      "Entry Time: N/A"
                    )}
                    &nbsp; to &nbsp;
                    {/* Exit Time (last 'out') */}
                    {entry.attendance[entry.attendance.length - 1].time ? (
                      <>
                        {formatTime(
                          entry.attendance[entry.attendance.length - 1].time
                        )}
                      </>
                    ) : (
                      "Exit Time: N/A"
                    )}
                  </>
                ) : (
                  "N/A"
                )}
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
    </>
  );
};

export default AttendanceCalendar;
