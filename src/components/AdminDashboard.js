import React from "react";
import Attendence from "./Attendance";
import Header from "./Header";
import TimelineComponent from "./TimelineComponent";
import { FaBirthdayCake } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { BsPersonUp } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import EmployeeDetails from "./EmployeeDetails";
import Navbar from "./Navbar";

const AdminDashboard = () => {
  const dates = Array.from({ length: 12 }, (_, i) => i + 18); // Generate an array of dates from 18 to 29
  const data = [1, 2, 3, 4];
  return (
    <div className="pt-4 overflow-hidden dark:bg-neutral-900 bg-gray-200 h-screen  flex flex-col">
      {/* <div>
        <Header className="fixed h-full top-0 left-0 w-full" />
        <div />
      </div> */}

      <div className=" px-4 flex h-[78%]">
        <div className=" w-full h-full md:w-1/4">
          <Attendence />
        </div>

        <div className="mx-5 w-1/2 h-3/4 ">
          <div className="bg-white lg:w-full h-4/5 dark:text-white text-black  relative rounded-lg mt-0 dark:border border-gray-700 dark:bg-black p-4 flex flex-col">
            <p
              className="dark:text-white text-gray-400 text-left text-xs font-thin mb-0 -mt-2"
             
            >
              April, 2024
            </p>
            <h1
              className="text-left text-sm font-semibold mb-1 -mt-1"
              
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
                  className="rounded-xl dark:bg-black bg-white border border-gray-700 w-20 h-7 flex items-center justify-center"
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
              className="flex overflow-y-scroll h-full no-scrollbar"
              
            >
              <div>
                <TimelineComponent />
              </div>
              <div className="pt-3 flex  w-full h-full flex-col  space-y-2">
                <div>
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="relative rounded-xl  border  dark:text-white text-black  dark:bg-black bg-white dark:border-gray-700 h-[3.5rem] flex mb-2"
                      
                    >
                      <div className="ps-2 rounded-l-xl dark:bg-teal-600 bg-teal-300 h-14"></div>
                      <div className="dark:bg-slate-900 bg-white ps-3 "></div>
                      <h1 className="ps-2 pt-2 text-xs">
                        Send mail to Client
                      </h1>
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
                      <span className="absolute text-gray-600 left-14 bottom-1 text-xs">
                        Firos V A
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#4B5563"
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
                      <span className="absolute text-gray-600 right-[50px] bottom-1 text-xs">
                        Kalur, Ernakulam
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-3/4 py-3 flex ">
          <div
                className=" w-1/2 rounded-lg h-[74%]  dark:bg-black bg-white dark:border border-gray-700 flex flex-col overflow-hidden"
                
              >
                <div className="pl-3 pt-3 text-xs text-gray-500 mb-4 flex justify-between items-center">
                  <span className="font-bold max-w-1245:font-semibold max-w-1245:text-[11px]">Upcoming events</span>
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
                      <span className="dark:text-white text-black text-xs max-w-1245:text-[11px]">
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
                      <span className="text-xs dark:text-white text-black max-w-1245:text-[11px]">
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
                  <div className="ps-4 flex items-center space-x-2">
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                      <MdWorkHistory className="text-gray-400 w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs dark:text-white text-black max-w-1245:text-[1px]">
                        Aleena,{" "}
                        <span className="text-[12px] text-gray-600 max-w-1245:text-[10px]">
                          has work Anniversary
                        </span>
                      </span>
                      <span className="text-xs text-gray-500">29 Aug,2024</span>
                    </div>
                  </div>
                  <div className="ps-4 flex items-center space-x-2">
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                      <MdWorkHistory className="text-gray-400 w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs dark:text-white text-black max-w-1245:text-[10px]">
                        Arathy K Nair ,{" "}
                        <span className="text-[12px] text-gray-600 max-w-1245:text-[10px]">
                          has work Anniversary
                        </span>
                      </span>
                      <span className="text-[12px] text-gray-500">
                        30 Aug,2024
                      </span>
                    </div>
                  </div>
                  <div className="ps-4 flex items-center space-x-2">
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                      <MdWorkHistory className="text-gray-400 w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs dark:text-white text-black max-w-1245:text-[10px]">
                        Arathy K Nair ,{" "}
                        <span className="text-[12px] text-gray-600 max-w-1245:text-[10px]">
                          has work Anniversary
                        </span>
                      </span>
                      <span className="text-[12px] text-gray-500">
                        30 Aug,2024
                      </span>
                    </div>
                  </div>
                  <div className="ps-4 flex items-center space-x-2">
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
                      <FaBirthdayCake className="text-gray-400 w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs dark:text-white text-black max-w-1245:text-[10px]">
                        Jancy Daniel ,{" "}
                        <span className="text-[12px] text-gray-600 max-w-1245:text-[10px]">
                          has Birthday
                        </span>
                      </span>
                      <span className="text-xs text-gray-500">30 Aug,2024</span>
                    </div>
                  </div>
                </div>
              </div>

            <div className=" pe-0 h-full w-1/2 px-3">
              <div
                className="rounded-lg h-[74%]  dark:bg-black bg-white dark:border border-gray-700 flex flex-col overflow-hidden"
                
              >
                <div className="pl-3 pt-3 text-xs text-gray-500 mb-4 flex justify-between items-center">
                  <span className="font-bold">Announcements</span>
                  <span className="text-xs font-semibold text-green-500 pr-3 cursor-pointer">
                    View All
                  </span>
                </div>

                <div className="space-y-4 overflow-y-scroll h-full scrollbar-hide">
                  <div className="ps-4 flex items-center space-x-2">
                   
                    
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
      <div className="mt-3 pb-4">
      <Navbar activePage="hrms" />
      </div>
    </div>
  );
};

export default AdminDashboard;
