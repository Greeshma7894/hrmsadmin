import React from "react";

function Attendence() {
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

  return (
    <div className="flex h-full flex-col">
      {" "}
      {/* Flex container taking full screen height */}
      {/* Sidebar / Attendance */}
      <div className="dark:bg-black w-full px-2  bg-white dark:border border-gray-700 rounded-lg shadow-md mb-2 pt-5 pb-3">
        <div className="flex justify-around dark:bg-black bg-white items-center  px-2 pb-3 pt-3">
          <div>
            <h1 className="text-md font-bold dark:text-white text-black font-sf-pro">
              10:00 AM
            </h1>
            <p className="text-sm  text-gray-600 font-sf-pro">Check-in</p>
          </div>
          <div className="h-12 w-px bg-gray-200"></div> {/* Divider */}
          <div>
            <h1 className="text-md dark:text-white text-black font-bold mx-3 font-sf-pro">
              00:00
            </h1>
            <p className="font-semibold text-sm text-gray-600 font-sf-pro">Check-out</p>
          </div>
          <div className="bg-gray-800 rounded-xl px-4 py-2">
            <h1 className="text-bold font-bold text-green-500 mx-4">
              5:37:12
            </h1>
            <p className="text-sm text-gray-500 font-sf-pro">Working hours</p>
          </div>
        </div>
        <div className="flex  dark:border border-gray-700 items-center w-full dark:bg-black  bg-gray-100 p-2 mt-5 rounded-xl">
          <div className="bg-red-500 flex justify-center w-1/3 px-4 py-4 rounded-lg">
            <h1 className=" text-sm text-black font-sf-pro">Check-out</h1>
          </div>
          <div className="flex items-center  w-1/3 justify-center">
            <div className="flex  flex-col justify-center">
              <h1 className="text-md dark:text-white text-black font-bold font-sf-pro">
                03:07 PM
              </h1>
              <p className="text-sm text-gray-500 font-sf-pro">Recent in</p>
            </div>
            <div className="h-12 flex justify-center bg-gray-200"></div>
          </div>
          <div className=" justify-center flex flex-col items-center h-full w-1/3">
            <h1 className="text-md  dark:text-white text-black font-bold mx-2 font-sf-pro">
              00:00
            </h1>
            <p className="text-sm text-gray-500  font-sf-pro ">Recent out</p>
          </div>
        </div>
      </div>
      {/* Attendance Calendar Header */}
      <div className="flex justify-between">
        <h1 className="ps-3 mb-1 text-sm dark:text-gray-400  text-gray-600 ">
          Attendance Calendar
        </h1>
        <h1 className="text-sm text-green-500 mr-1">View all</h1>
      </div>
      {/* Scrollable container for attendance calendar */}
      <div className="scrollbar-hide h-full overflow-y-scroll">
  {AttendenceData.map((entry, index) => (
    <div
      key={index}
      className="dark:bg-black bg-white border dark:border-gray-700 rounded-xl shadow-md pt-2 pb-2 px-3 flex items-center justify-between mb-2"
    >
      <div>
        <h1 className="text-2xl dark:text-white text-black font-bold">{entry.date}</h1>
        <p className="text-xs ps-1.5 text-gray-500">{entry.month}</p>
      </div>
      <div className="ml-5 mb-1">
        <h2 className="text-xs pt-2 dark:text-white text-black">{entry.hours}</h2>
        <p className="text-[10px] text-gray-600">{entry.timeRange}</p>
        <p className="text-xs mt-2 font-bold text-green-700">Get details</p>
      </div>
      <div
        className={`ml-auto rounded-full mb-6 pt-1 text-sm text-center ${
          entry.status === "On Time"
            ? "bg-emerald-300 text-black"
            : entry.status === "Late"
            ? "bg-red-500 text-white"
            : "bg-blue-500 text-black"
        }`}
        style={{ width: "90px", height: "28px" }}
      >
        {entry.status}
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default Attendence;
