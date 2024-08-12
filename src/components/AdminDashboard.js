import React from "react";
import Header from "./Header";
import TimelineComponent from "./TimelineComponent";
import EmployeeDetails from "./EmployeeDetails";
import Navbar from "./Navbar";
import Attendence from "./Attendance";
import { FaBirthdayCake } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { BsPersonUp } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";

const AdminDashboard = () => {
  const dates = Array.from({ length: 12 }, (_, i) => i + 18); // Generate an array of dates from 18 to 29
  const data = [1, 2, 3, 4];

  return (
    <div
      className="dark:bg-black bg-white min-h-screen text-white flex flex-col"
      style={{ fontFamily: "'SF Pro Display', sans-serif" }}
    >
      <Header className="fixed top-0 left-0 w-full" />

      <div className="flex mx-12 ">
        <div className="w-full md:w-1/4">
          <Attendence />
        </div>

        <div className="rounded-lg w-5/12 flex flex-col mx-8 ">
          {" "}
          <div className="w-[118%] dark:text-white text-black  relative -ml-1 rounded-lg mt-0 border border-gray-700   h-72 p-4 flex flex-col">
            <p
              className="text-left mb-0 -mt-2"
              style={{
                fontFamily: "'SF Pro Display', sans-serif",
                fontSize: "9px",
              }}
            >
              April, 2024
            </p>
            <h1
              className="text-left mb-1 -mt-1"
              style={{
                fontFamily: "'SF Pro Display', sans-serif",
                fontSize: "15px",
              }}
            >
              My Tasks
            </h1>
            <div className="flex items-center  space-x-2 mb-2">
              <div className="rounded-lg bg-black border border-teal-600 h-7 flex items-center justify-center">
                <p
                  className="text-teal-400 text-center text-xs w-16"
                  style={{ fontFamily: "'SF Pro Display', sans-serif" }}
                >
                  Today
                </p>
              </div>
              {dates.map((date) => (
                <div
                  key={date}
                  className="rounded-xl dark:bg-black bg-white border border-gray-600 w-20 h-7 flex items-center justify-center"
                >
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "'SF Pro Display', sans-serif",
                      fontSize: "10px",
                    }}
                  >
                    {date}
                  </p>
                </div>
              ))}
            </div>

            {/* Combined Scrollable Container */}
            <div
              className="flex overflow-y-scroll no-scrollbar"
              style={{ maxHeight: "12rem" }}
            >
              <div>
                <TimelineComponent />
              </div>
              <div className="pt-3 flex flex-col  space-y-2">
                <div>
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="relative rounded-xl border dark:text-white text-black  dark:bg-black bg-white border-gray-600 h-14 flex mb-2"
                      style={{ width: "31rem" }}
                    >
                      <div className="ps-2 rounded-l-xl bg-teal-600 h-14"></div>
                      <div className="dark:bg-slate-900 bg-white ps-3"></div>
                      <h1 className="ps-2 pt-2  text-xs">Send mail to Client</h1>
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
                      <span className="absolute left-14 bottom-1 text-xs">
                        Firos V A
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="absolute right-36 pb-1 bottom-1 w-5 h-5"
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
                      <span className="absolute right-[50px] bottom-1 text-xs">
                        Kalur, Ernakulam
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="ps-10 w-full flex justify-start mt-1"
            style={{ paddingLeft: "29rem" }}
          >
            <h2 className="-left-10 text-xs text-white"></h2>
          </div>
          <div className=" h-10 w-[695px] ps-[0px] flex justify-between">
            <div className="rounded-lg  top-3 h-16 border w-[380px] border-gray-800 relative">
              <div className="flex rounded-lg h-18  items-center mb-1">
                <div>
                  <button
                    className="mt-3 mb-2 ml-2 bg-teal-300 text-black py-3 px-3 rounded-lg text-xs font-bold mr-2"
                    style={{ fontFamily: "'SF Pro Display', sans-serif" }}
                  >
                    Apply Leave
                  </button>
                </div>
                <div className="flex flex-col">
                  <p
                    className="text-gray-600 font-bold text-xs"
                    style={{
                      fontFamily: "'SF Pro Display', sans-serif",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Previous leave Status
                  </p>
                  <p
                    className="dark:text-white text-black text-sm font-bold"
                    style={{ fontFamily: "'SF Pro Display', sans-serif" }}
                  >
                    Approved
                  </p>
                </div>
              </div>
              <p
                className=" absolute top-2 right-2 text-green-500 text-xs font-bold"
                style={{ fontFamily: "'SF Pro Display', sans-serif" }}
              >
                View All
              </p>
            </div>

            <div
              className="rounded-lg  mt-[12px] pr-4 h-[250px] border w-[305px] border-gray-800 flex flex-col font-semibold overflow-hidden"
              style={{ fontFamily: "'SF Pro Display', sans-serif" }}
            >
              <div className="pl-3 pt-3 text-xs text-gray-600 mb-4 flex justify-between items-center">
                <span>Upcoming events</span>
                <span className="text-xs text-green-500 pr-3 cursor-pointer">
                  View All
                </span>
              </div>

              <div className="space-y-4 overflow-y-scroll h-full scrollbar-hide">
                <div className="ps-2 flex items-center space-x-2">
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <FaBirthdayCake className="text-gray-400 w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="dark:text-white text-black text-xs">
                      Greeshma B,{" "}
                      <span className="text-xs text-gray-600">
                        has Birthday
                      </span>
                    </span>
                    <span className="text-xs text-gray-500">24 Aug,2024</span>
                  </div>
                </div>
                <div className="ps-2 flex items-center space-x-2">
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <MdWorkHistory className="text-gray-400 w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs dark:text-white text-black">
                      Firos V A ,{" "}
                      <span className="text-xs text-gray-600">
                        has work Anniversary
                      </span>
                    </span>
                    <span className="text-xs text-gray-500">27 Aug,2024</span>
                  </div>
                </div>
                <div className="ps-2 flex items-center space-x-2">
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <MdWorkHistory className="text-gray-400 w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs dark:text-white text-black">
                      Aleena,{" "}
                      <span className="text-xs text-gray-600">
                        has work Anniversary
                      </span>
                    </span>
                    <span className="text-xs text-gray-500">29 Aug,2024</span>
                  </div>
                </div>
                <div className="ps-2 flex items-center space-x-2">
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <MdWorkHistory className="text-gray-400 w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs dark:text-white text-black">
                      Arathy K Nair ,{" "}
                      <span className="text-xs text-gray-600">
                        has work Anniversary
                      </span>
                    </span>
                    <span className="text-xs text-gray-500">30 Aug,2024</span>
                  </div>
                </div>
                <div className="ps-2 flex items-center space-x-2">
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <MdWorkHistory className="text-gray-400 w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs dark:text-white text-black">
                      Arathy K Nair ,{" "}
                      <span className="text-xs text-gray-600">
                        has work Anniversary
                      </span>
                    </span>
                    <span className="text-xs text-gray-500">30 Aug,2024</span>
                  </div>
                </div>
                <div className="ps-2 flex items-center space-x-2">
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                    <FaBirthdayCake className="text-gray-400 w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs dark:text-white text-black">
                      Jancy Daniel ,{" "}
                      <span className="text-xs text-gray-600">
                        has Birthday
                      </span>
                    </span>
                    <span className="text-xs text-gray-500">30 Aug,2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" ps-[0px] pt-8 w-[374px]">
            <div className="border top-3 h-[84px] w-[380px] rounded-lg border-gray-800 p-4 relative">
              {/* Top left "Pending Leaves" text */}
              <div className="font-bold text-xs text-gray-700 text-[SF Pro Display] -mt-2 mb-2">
                Pending Leaves
              </div>

              {/* Top right "Leave Info" text */}
              <div className="absolute top-2 right-4 text-green-500 text-xs font-semibold">
                Leave Info
              </div>

              {/* Icons and text with dates */}
              <div className="flex justify-around">
                <div className="flex flex-col items-center">
                  <span className="font-bold dark:text-white text-black mb-1">10</span>
                  <div className="flex items-center">
                    <div className="bg-white p-2 -mt-8 rounded-full mr-2">
                      <BsPersonUp className="text-gray-800 text-xl" />
                    </div>
                    <span className="text-gray-700 -mt-1 font-bold text-xs">
                      Casual Leave
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold dark:text-white text-black mb-1">3</span>
                  <div className="flex items-center">
                    <div className="bg-white p-2 -mt-8 rounded-full mr-2">
                      <FaUserDoctor className="text-gray-800 text-xl" />
                    </div>
                    <span className="text-gray-700 -mt-1 font-bold text-xs">
                      Sick Leave
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative top-3 rounded-lg text-gray-700 font-bold text-xs pt-1 pl-2 w-[380px] border border-gray-700 h-[83px] mt-2 overflow-hidden">
              <span className="absolute top-1 left-2">Upcoming Holidays</span>
              <div className=" scrollable-images  flex overflow-hidden h-full pt-6">
                <div className=" flex flex-nowrap h-12 space-x-2">
                  <img
                    src="https://i.pinimg.com/736x/00/2b/18/002b187e7a8e46dc8eb2c91ad7a762e0.jpg"
                    alt="Holiday 1"
                    className="h-full object-cover rounded-lg"
                  />
                  <img
                    src="https://i.pinimg.com/564x/2b/57/16/2b5716ad63acb23ff97f5688af65a815.jpg"
                    alt="Holiday 2"
                    className="h-full object-cover rounded-lg flex-shrink-0"
                  />
                  <img
                    src="https://i.pinimg.com/564x/a4/bc/18/a4bc18d52038cbc7412ad693b6c4399e.jpg"
                    alt="Holiday 3"
                    className="h-full object-cover rounded-lg flex-shrink-0"
                  />
                  <img
                    src="https://i.pinimg.com/564x/dc/f9/85/dcf98506953eb2fd0655d5e486bb72c2.jpg"
                    alt="Holiday 3"
                    className="h-full object-cover rounded-lg flex-shrink-0"
                  />
                  <img
                    src="https://i.pinimg.com/564x/84/a8/eb/84a8eb07c7add24a24cd7d3e1d416524.jpg"
                    alt="Holiday 3"
                    className="h-full object-cover rounded-lg flex-shrink-0"
                  />
                  <img
                    src="https://i.pinimg.com/564x/a1/8a/61/a18a613e65cdb0e9385570b9903cca8d.jpg"
                    alt="Holiday 3"
                    className="h-full object-cover rounded-lg flex-shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-12" style={{ width: "28%" }}>
          <EmployeeDetails />
        </div>
      </div>
      <Navbar activePage="hrms" />
    </div>
  );
};

export default AdminDashboard;
