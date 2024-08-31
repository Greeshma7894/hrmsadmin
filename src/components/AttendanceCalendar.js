import React from 'react'


const AttendenceData = [
    {
      date: "16",
      month: "Apr",
      hours: "9.00 Hours",
      timeRange: "09:00 AM to 06:00 PM",
      status: "On Time",
    },
    {
      date: "15",
      month: "Apr",
      hours: "8.50 Hours",
      timeRange: "09:00 AM to 05:30 PM",
      status: "Late",
    },
    {
      date: "14",
      month: "Apr",
      hours: "7.50 Hours",
      timeRange: "10:00 AM to 05:30 PM",
      status: "Delay",
    },
    {
      date: "13",
      month: "Apr",
      hours: "9.00 Hours",
      timeRange: "09:00 AM to 06:00 PM",
      status: "On Time",
    },
    {
      date: "12",
      month: "Apr",
      hours: "8.00 Hours",
      timeRange: "09:00 AM to 05:00 PM",
      status: "On Time",
    },
    {
      date: "11",
      month: "Apr",
      hours: "9.50 Hours",
      timeRange: "08:30 AM to 06:00 PM",
      status: "On Time",
    },
  ];

const AttendanceCalendar = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="max-w-1245:text-xs ps-3  mb-1 text-sm dark:text-gray-400  text-gray-600 ">
          Attendance Calendar
        </h1>
        <h1 className="max-w-1245:text-xs text-sm text-green-500 mr-1 cursor-pointer hover:underline">
          View all
        </h1>
      </div>
      {/* Scrollable container for attendance calendar */}
      <div className=" rounded-lg scrollbar-hide max-w-1245:h-[58%] min-w-1245:h-[70%]   overflow-y-scroll">
        {AttendenceData.map((entry, index) => (
          <div
            key={index}
            className="dark:bg-black bg-white border dark:border-gray-700 rounded-xl shadow-md pt-2 pb-2 px-3 flex items-center justify-between mb-2 max-w-1245:h-[70px]"
          >
            <div>
              <h1 className="max-w-1245:text-xl text-2xl dark:text-white text-black">
                {entry.date}
              </h1>
              <p className="text-xs ps-1.5 text-gray-500">{entry.month}</p>
            </div>
            <div className="ml-5 mb-1">
              <h2 className="text-xs pt-2 dark:text-white text-black">
                {entry.hours}
              </h2>
              <p className="text-[10px] dark:text-gray-400 text-gray-700">
                {entry.timeRange}
              </p>
              <p className="max-w-1245:text-[10px] text-xs mt-2 font-bold text-green-700">
                Get details
              </p>
            </div>
            <div
              className={` max-w-1245:h-[24px] max-w-1245:w-[70px] h-[27px] w-[75px] ml-auto rounded-full mb-6 pt-1 max-w-1245:text-[10px] text-xs text-center  ${
                entry.status === "On Time"
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
    
  )
}

export default AttendanceCalendar
