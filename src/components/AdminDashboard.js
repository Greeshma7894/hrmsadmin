import React, { useState } from "react";
import Attendence from "./Attendance";
import Header from "./Header";
import TimelineComponent from "./TimelineComponent";
import { FaBirthdayCake } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { BsPersonUp } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import EmployeeDetails from "./EmployeeDetails";
import Navbar from "./Navbar";
import { FaUsers } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaSuitcaseRolling } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useTheme } from "@mui/material/styles";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { GrLocation } from "react-icons/gr";

const AdminDashboard = ({ isDarkTheme }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const theme = useTheme();

  const strokeColor = isDarkTheme ? "#fff" : "#000";

  const dates = Array.from({ length: 30 }, (_, i) => i + 1); // Example dates for simplicity

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false); // Close the calendar after selecting a date
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const data = [1, 2, 3, 4, 5, 6]; // Your existing data
  return (
    <div className="pt-4 overflow-hidden dark:bg-neutral-900 bg-gray-200 h-screen  flex flex-col">
      {/* <div>
        <Header className="fixed h-full top-0 left-0 w-full" />
        <div />
      </div> */}

      <div className="px-4 flex h-[87%]">
        <div className="w-full h-full md:w-1/4">
          <Attendence />
        </div>

        <div className="mx-4  w-1/2 h-3/4">
          <div className=" lg:w-full h-[78%] dark:text-white text-black relative rounded-lg mt-0 dark:border border-gray-700 dark:bg-black bg-white p-4 flex flex-col">
            <div className="flex justify-between items-center mb-2 -mt-2">
              <h1 className="text-left text-sm font-semibold">My Tasks</h1>
              <p
                className="dark:text-white text-gray-400 text-right text-xs font-thin cursor-pointer"
                onClick={toggleCalendar}
              >
                {selectedDate.format("MMMM, yyyy")}
              </p>
            </div>

            {/* Render Calendar Conditionally */}
            {isCalendarOpen && (
              <div
                className={`absolute z-10 top-10 right-0 bg-gray-100 dark:bg-black rounded-lg shadow-lg p-1 ${
                  window.innerWidth < 1245 ? "w-56" : "w-72"
                }`}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                    value={selectedDate}
                    onChange={handleDateChange}
                    sx={{
                      width: "100%", // Full width of the container
                      height: "auto", // Auto height to fit content
                      "& .MuiPickersDay-root": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "inherit",
                        fontSize: "0.75rem", // Smaller font size for date cells
                      },
                      "& .MuiPickersDay-root.Mui-selected": {
                        backgroundColor:
                          theme.palette.mode === "dark" ? "#90caf9" : "#1976d2",
                      },
                      "& .MuiPickersDay-root.Mui-selected:hover": {
                        backgroundColor:
                          theme.palette.mode === "dark" ? "#64b5f6" : "#115293",
                      },
                      "& .MuiPickersArrowSwitcher-root": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "inherit",
                        fontSize: "0.875rem", // Smaller size for arrows
                      },
                      "& .MuiIconButton-root": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "inherit",
                        fontSize: "0.875rem", // Smaller size for navigation buttons
                      },
                      "& .MuiTypography-root": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "inherit",
                        fontSize: "0.75rem", // Smaller font size for month/year labels
                      },
                      "& .MuiSelect-select": {
                        fontSize: "0.75rem", // Smaller font size for year dropdown
                      },
                      "& .MuiSelect-icon": {
                        fontSize: "0.75rem", // Smaller size for year dropdown arrow
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
            )}

            {/* Horizontal Scrollable Dates */}
            <div className="overflow-x-auto mb-4 no-scrollbar h-[54px] max-w-1245:h-[63px]">
              <div className="flex space-x-2">
                {dates.map((date) => (
                  <div
                    key={date}
                    className={`cursor-pointer flex flex-col items-center justify-center max-w-1245:w-12 max-w-1245:h-11 w-15 h-10 p-2 rounded-md ${
                      selectedDate.date() === date
                        ? "bg-lime-500 dark:bg-darkTeal-400 text-white"
                        : "bg-gray-100 dark:bg-gray-800"
                    }`}
                    onClick={() => setSelectedDate(selectedDate.date(date))}
                  >
                    <span className="text-[11px] flex items-center justify-center w-6 font-bold">
                      {date}
                    </span>
                    <span className="text-[9px]">
                      {selectedDate.format("MMM")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Combined Scrollable Container */}
            <div className="flex overflow-y-scroll h-full no-scrollbar">
              <div>
                <TimelineComponent />
              </div>
              <div className="pt-3 flex w-full h-full flex-col space-y-2">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="relative rounded-xl border dark:text-white text-black dark:bg-black bg-white dark:border-gray-700 h-[3.5rem] flex"
                  >
                    {/* Task content goes here */}
                    <div className="ps-2 rounded-l-xl dark:bg-lime-500 bg-lime-500 h-14"></div>
                    <div className="dark:bg-slate-900 bg-white ps-3 "></div>
                    <h1 className="ps-2 pt-2 text-xs">Send mail to Client</h1>
                    <span className="absolute right-4 top-2 text-xs">
                      12:45 PM
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="absolute left-9 bottom-1 w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <span className="absolute dark:text-white left-14 bottom-1 text-xs">
                      Firos V A
                    </span>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke={ strokeColor }
                      className="absolute dark:text-white text-black right-[100px] pb-0 bottom-1 w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg> */}
                    <GrLocation className="absolute dark:text-white text-gray-800 right-[104px] max-w-1245:right-[106px] pb-0 bottom-1 w-4 h-4" />
                    <span className="absolute dark:text-white right-[10px] bottom-1 text-xs">
                      Kalur, Ernakulam
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-3/4 max-w-1245:h-[74%] py-3 flex ">
            <div className="w-1/2  rounded-lg h-[74%]  dark:bg-black bg-white dark:border border-gray-700 flex flex-col overflow-hidden">
              <div className="pl-3 pt-3 text-xs text-gray-500 mb-4 flex justify-between items-center">
                <span className="font-bold max-w-1245:font-semibold max-w-1245:text-[11px]">
                  Upcoming events
                </span>
                <span className="text-xs font-semibold text-green-500 pr-3 cursor-pointer hover:underline">
                  View All
                </span>
              </div>

              <div className="space-y-4 overflow-y-scroll h-full scrollbar-hide">
                <div className="ps-4 flex items-center space-x-2">
                  <div className="relative w-10 h-10 overflow-hidden bg-orange-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <FaBirthdayCake className="text-orange-400 w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="dark:text-white text-black font-semibold text-xs max-w-1245:text-[11px]">
                      Greeshma B,{" "}
                      <span className="text-[12px] text-gray-600 max-w-1245:text-[10px]">
                        has Birthday
                      </span>
                    </span>
                    <span className="text-[12px] text-gray-500">
                      24 Aug,2024
                    </span>
                  </div>
                </div>
                <div className="ps-4 flex items-center space-x-2">
                  <div className="relative w-10 h-10 overflow-hidden bg-violet-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <MdWorkHistory className="text-rose-500 w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold dark:text-white text-black max-w-1245:text-[11px]">
                      Firos V A ,{" "}
                      <span className="text-[12px] text-gray-600 max-w-1245:text-[10px]">
                        has work Anniversary
                      </span>
                    </span>
                    <span className="text-[12px] text-gray-500">
                      27 Aug,2024
                    </span>
                  </div>
                </div>
                <div className="ps-4  flex items-center space-x-2">
                  <div className="relative w-10 h-10 overflow-hidden bg-orange-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <FaBirthdayCake className="text-orange-400 w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold dark:text-white text-black text-xs max-w-1245:text-[11px]">
                      Greeshma B,{" "}
                      <span className=" text-[12px] text-gray-600 max-w-1245:text-[10px]">
                        has Birthday
                      </span>
                    </span>
                    <span className="text-[12px] text-gray-500">
                      24 Aug,2024
                    </span>
                  </div>
                </div>
                <div className="ps-4 flex items-center space-x-2">
                  <div className="relative w-10 h-10 overflow-hidden bg-orange-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <FaBirthdayCake className="text-orange-400 w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold dark:text-white text-black text-xs max-w-1245:text-[11px]">
                      Greeshma B,{" "}
                      <span className="text-[12px] text-gray-600 max-w-1245:text-[10px]">
                        has Birthday
                      </span>
                    </span>
                    <span className="text-[12px] text-gray-500">
                      24 Aug,2024
                    </span>
                  </div>
                </div>
                <div className="ps-4 flex items-center space-x-2">
                  <div className="relative w-10 h-10 overflow-hidden bg-orange-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <FaBirthdayCake className="text-orange-400 w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="dark:text-white font-semibold text-black text-xs max-w-1245:text-[11px]">
                      Greeshma B,{" "}
                      <span className="text-[12px] text-gray-600 max-w-1245:text-[10px]">
                        has Birthday
                      </span>
                    </span>
                    <span className="text-[12px] text-gray-500">
                      24 Aug,2024
                    </span>
                  </div>
                </div>
                <div className="ps-4  flex items-center space-x-2">
                  <div className="relative w-10 h-10 overflow-hidden bg-orange-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <FaBirthdayCake className="text-orange-400 w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="dark:text-white font-semibold text-black text-xs max-w-1245:text-[11px]">
                      Greeshma B,{" "}
                      <span className="text-[12px] text-gray-600 max-w-1245:text-[10px]">
                        has Birthday
                      </span>
                    </span>
                    <span className="text-[12px] text-gray-500">
                      24 Aug,2024
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className=" pe-0 h-full w-1/2 px-3">
              <div className="rounded-lg h-[74%] dark:bg-black bg-white dark:border border-gray-700 flex flex-col overflow-hidden">
                <div className="pl-3 pt-3 text-xs text-gray-500 mb-4 flex justify-between items-center">
                  <span className="font-bold max-w-1245:font-semibold max-w-1245:text-[11px]">
                    Announcements
                  </span>
                  <span className="text-xs font-semibold text-green-500 pr-3 cursor-pointer  hover:underline">
                    View All
                  </span>
                </div>

                <div className="flex flex-col space-y-2 overflow-y-auto h-full pr-3 scrollbar-hide">
                  <div className="bg-violet-100 dark:bg-violet-300 w-[93%] h-[40%] rounded-lg ml-4 flex items-center p-4">
                    <FaUsers className=" text-violet-600 text-4xl max-w-1245:text-3xl mr-4" />
                    <div>
                      <h2 className="max-w-1245:text-[10px] dark:text-black text-black text-sm font-bold max-w-1245:font-semibold">
                        Team Meeting
                      </h2>
                      <p className="dark:text-gray-900 text-gray-700 text-xs max-w-1245:text-[8px]">
                        There will be a team meeting at 3:00 PM in the meeting
                        room.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-200 dark:bg-slate-300  rounded-lg w-[93%] h-[40%] ml-4 flex items-center p-4">
                    <FaRocket className=" dark:text-gray-800  text-slate-500 text-4xl mr-4 max-w-1245:text-3xl" />
                    <div>
                      <h2 className="dark:text-black max-w-1245:text-[10px] text-black text-sm font-bold max-w-1245:font-semibold">
                        Project Launch Update
                      </h2>
                      <p className="text-gray-700 dark:text-gray-800 text-xs max-w-1245:text-[8px]">
                      Reminder: Tomorrow morning, we have our project launch. Be prepared!
                      </p>
                    </div>
                  </div>
                  <div className="bg-orange-100 dark:bg-orange-200  rounded-lg w-[93%] h-[40%] ml-4 flex items-center p-4">
                    <FaSuitcaseRolling className="text-orange-600 text-4xl dark:text-orange-600 mr-4 max-w-1245:text-3xl" />{" "}
                    {/* Icon */}
                    <div>
                      <h2 className="dark:text-black max-w-1245:text-[10px] text-black text-sm font-bold max-w-1245:font-semibold">
                        Trip Update
                      </h2>
                      <p className="text-gray-700 dark:text-gray-800 text-xs  max-w-1245:text-[8px]">
                        Our team is going for a 3-day trip to Munnar starting
                        this Sunday. Get ready for some fun!
                      </p>
                    </div>
                  </div>
                  <div className="bg-rose-100 dark:bg-rose-200 rounded-lg w-[93%] h-[40%] ml-4 flex items-center p-4">
                    <FaUmbrellaBeach className="text-rose-600 text-4xl dark:text-rose-800 mr-4 max-w-1245:text-3xl" />{" "}
                    {/* Icon */}
                    <div>
                      <h2 className="dark:text-black max-w-1245:text-[10px] text-black text-sm font-bold max-w-1245:font-semibold">
                        Holiday Update
                      </h2>
                      <p className="text-gray-700 text-xs dark:text-gray-800 max-w-1245:text-[8px]">
                        You have a 5-day holiday for Onam! Enjoy your time off
                        and celebrate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-full w-full md:w-1/4">
          <EmployeeDetails />
        </div>
      </div>
      <div className="mt-3 pb-5 max-w-1245:mt-1">
        <Navbar className="" activePage="hrms" />
      </div>
    </div>
  );
};

export default AdminDashboard;
