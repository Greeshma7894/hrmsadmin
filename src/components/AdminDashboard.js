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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { FaUsers } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaSuitcaseRolling } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";

const AdminDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const dates = Array.from({ length: 30 }, (_, i) => i + 1); // Example dates for simplicity

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
    // Update the dates array based on the selected month
    // Here, we're simply simulating the update; in a real case, you'd generate dates dynamically.
  };
  const data = [1, 2, 3, 4];
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

        <div className="mx-5 w-1/2 h-3/4">
          <div className="bg-white lg:w-full h-4/5 dark:text-white text-black relative rounded-lg mt-0 dark:border border-gray-700 dark:bg-black p-4 flex flex-col">
            <div className="flex justify-between items-center mb-2 -mt-2">
              <h1 className="text-left text-sm font-semibold">My Tasks</h1>
              <p
                className="dark:text-white text-gray-400 text-right text-xs font-thin cursor-pointer"
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              >
                {format(selectedDate, "MMMM, yyyy")}
              </p>
            </div>

            {isCalendarOpen && (
              <div className="absolute z-10 top-14 right-0 bg-white dark:bg-black p-2 rounded shadow-lg">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  showMonthYearPicker
                  inline
                />
              </div>
            )}

            {/* Horizontal Scrollable Calendar */}
            <div className="overflow-x-auto mb-4 no-scrollbar h-[50px] max-w-1245:h-[53px]">
              <div className="flex space-x-2">
                {dates.map((date) => (
                  <div
                    key={date}
                    className={`cursor-pointer flex flex-col items-center justify-center max-w-1245:w-12 max-w-1245:h-9 w-10 h-8 p-2 rounded-md ${
                      selectedDate.getDate() === date
                        ? "bg-lime-500 dark:bg-darkTeal-400 text-white"
                        : "bg-gray-100 dark:bg-gray-800"
                    }`}
                    onClick={() =>
                      setSelectedDate(
                        new Date(
                          selectedDate.getFullYear(),
                          selectedDate.getMonth(),
                          date
                        )
                      )
                    }
                  >
                    <span className="text-[11px] font-bold">{date}</span>
                    <span className="text-[9px]">
                      {format(selectedDate, "MMM")}
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
                <div>
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="relative rounded-xl border dark:text-white text-black dark:bg-black bg-white dark:border-gray-700 h-[3.5rem] flex mb-2"
                    >
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke=" #fff"
                        className="absolute  right-[100px] pb-0 bottom-1 w-4 h-4"
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
                      </svg>
                      <span className="absolute dark:text-white right-[10px] bottom-1 text-xs">
                        Kalur, Ernakulam
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-3/4 py-3 flex ">
            <div className="w-1/2 rounded-lg h-[74%]  dark:bg-black bg-white dark:border border-gray-700 flex flex-col overflow-hidden">
              <div className="pl-3 pt-3 text-xs text-gray-500 mb-4 flex justify-between items-center">
                <span className="font-bold max-w-1245:font-semibold max-w-1245:text-[11px]">
                  Upcoming events
                </span>
                <span className="text-xs font-semibold text-green-500 pr-3 cursor-pointer">
                  View All
                </span>
              </div>

              <div className="space-y-4 overflow-y-scroll h-full scrollbar-hide">
                <div className="ps-4 flex items-center space-x-2">
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <FaBirthdayCake className="text-gray-400 w-6 h-6" />
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
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <MdWorkHistory className="text-gray-400 w-6 h-6" />
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
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <FaBirthdayCake className="text-gray-400 w-6 h-6" />
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
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <FaBirthdayCake className="text-gray-400 w-6 h-6" />
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
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <FaBirthdayCake className="text-gray-400 w-6 h-6" />
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
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <FaBirthdayCake className="text-gray-400 w-6 h-6" />
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
                  <span className="text-xs font-semibold text-green-500 pr-3 cursor-pointer">
                    View All
                  </span>
                </div>

                <div className="flex flex-col space-y-2 overflow-y-auto h-full pr-3 scrollbar-hide">
                  <div className="bg-gray-100 dark:bg-gray-900 w-[93%] h-[40%] rounded-lg ml-4 flex items-center p-4">
                    <FaUsers className="dark:text-gray-400 text-gray-800 text-4xl max-w-1245:text-3xl mr-4" />
                    <div>
                      <h2 className="max-w-1245:text-[10px] dark:text-white text-black text-sm font-bold max-w-1245:font-semibold">
                        Team Meeting
                      </h2>
                      <p className="dark:text-gray-400 text-gray-700 text-xs max-w-1245:text-[8px]">
                        There will be a team meeting at 3:00 PM in the meeting
                        room.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg w-[93%] h-[40%] ml-4 flex items-center p-4">
                    <FaRocket className="dark:text-gray-400 text-gray-800 text-4xl mr-4 max-w-1245:text-3xl" />
                    <div>
                      <h2 className="dark:text-white max-w-1245:text-[10px] text-black text-sm font-bold max-w-1245:font-semibold">
                        Project Launch Update
                      </h2>
                      <p className="text-gray-700 dark:text-gray-400 text-xs max-w-1245:text-[8px]">
                        Reminder: Tomorrow morning, we have a function for our
                        new project launch. Make sure to be prepared!
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg w-[93%] h-[40%] ml-4 flex items-center p-4">
                    <FaSuitcaseRolling className="text-gray-800 text-4xl dark:text-gray-400 mr-4 max-w-1245:text-3xl" />{" "}
                    {/* Icon */}
                    <div>
                      <h2 className="dark:text-white max-w-1245:text-[10px] text-black text-sm font-bold max-w-1245:font-semibold">
                        Trip Update
                      </h2>
                      <p className="text-gray-700 text-xs dark:text-gray-400 max-w-1245:text-[8px]">
                        Our team is going for a 3-day trip to Munnar starting
                        this Sunday. Get ready for some fun!
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg w-[93%] h-[40%] ml-4 flex items-center p-4">
                    <FaUmbrellaBeach className="text-gray-800 text-4xl dark:text-gray-400 mr-4 max-w-1245:text-3xl" />{" "}
                    {/* Icon */}
                    <div>
                      <h2 className="dark:text-white max-w-1245:text-[10px] text-black text-sm font-bold max-w-1245:font-semibold">
                        Holiday Update
                      </h2>
                      <p className="text-gray-700 text-xs dark:text-gray-400 max-w-1245:text-[8px]">
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
      <div className="mt-3  pb-4">
        <Navbar className="" activePage="hrms" />
      </div>
    </div>
  );
};

export default AdminDashboard;
