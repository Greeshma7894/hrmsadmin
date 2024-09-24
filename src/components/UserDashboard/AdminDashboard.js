import React, { useState, useEffect } from "react";
import Attendance from "../UserDashboard/Attendance";
import Header from "../UserDashboard/Header";
import TimelineComponent from "../UserDashboard/TimelineComponent";
import EmployeeDetails from "../UserDashboard/EmployeeDetails";
import Navbar from "../UserDashboard/Navbar";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useTheme } from "@mui/material/styles";
import Events from "../UserDashboard/Events";
import Announcements from "../UserDashboard/Announcements";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { GrLocation } from "react-icons/gr";
import { useAssignedTasks } from "../../services/TaskService";
import RightSideDrawer from "../UserDashboard/Drawer";
import { FaMapMarkerAlt } from "react-icons/fa";

const AdminDashboard = ({ isDarkTheme }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("task");
  const [selectedTask, setSelectedTask] = useState(null);
  const theme = useTheme();

  const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");

  const { data: tasks, isLoading, isError } = useAssignedTasks(formattedDate);
  console.log("tasks are", tasks);

  const toggleDrawer = (open) => (event) => {
    // Debugging: Check if toggleDrawer is triggered on div click
    // console.log("Drawer toggle triggered:", open);

    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Filter tasks based on the selected date
  const filteredTasks = tasks?.task?.filter((task) =>
    dayjs(task.date).isSame(selectedDate, "day")
  );

  const taskTimes = filteredTasks?.map((task) => {
    console.log(task.completion_time); // Log the completion_time for each task
    return dayjs(task.completion_time).format("hh:mm A");
  });
  


  // Log the taskTimes array
  //console.log("hehhhehe",taskTimes);

  const handleDateChange = (newDate) => {
    setSelectedDate(dayjs(newDate)); // Ensure newDate is wrapped in dayjs
    setIsCalendarOpen(false); // Close the calendar after date is selected
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setDrawerOpen(true);
  };

  const formatTime = (isoString) => {
    if (!isoString) return "00:00 AM"; // Default if there's no input

    try {
      // Extract the time part
      const timePart = isoString.split("T")[1].split("Z")[0];
      const [hours, minutes] = timePart.split(":");
      const hour = parseInt(hours, 10);
      const period = hour >= 12 ? "PM" : "AM";
      const formattedHour = hour % 12 || 12;

      // Return formatted time
      return `${formattedHour}:${minutes} ${period}`;
    } catch (error) {
      console.error("Error parsing ISO string:", error);
      return "Invalid Time";
    }
  };

  return (
    <div className="pt-4 overflow-hidden dark:bg-neutral-900 bg-gray-200 h-screen flex flex-col">
      <div className="px-4 flex h-[87%]">
        <div className="w-full h-full md:w-1/4">
          <Attendance />
        </div>

        <div className="mx-4 w-1/2 h-3/4">
          <div className="lg:w-full h-[78%] dark:bg-black bg-white dark:text-white text-black relative rounded-lg mt-0 dark:border border-gray-700 p-4 flex flex-col">
            <div className="flex justify-between items-center mb-2 -mt-2">
              <h1 className="text-left text-sm font-semibold">My Tasks</h1>
              <p
                className="dark:text-white text-gray-400 text-right text-xs font-thin cursor-pointer"
                onClick={toggleCalendar}
              >
                {selectedDate.format("MMMM, yyyy")}
              </p>
            </div>

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
                      width: "100%",
                      height: "auto",
                      "& .MuiPickersDay-root": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "inherit",
                        fontSize: "0.75rem",
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
                        fontSize: "0.875rem",
                      },
                      "& .MuiIconButton-root": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "inherit",
                        fontSize: "0.875rem",
                      },
                      "& .MuiTypography-root": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "inherit",
                        fontSize: "0.75rem",
                      },
                      "& .MuiSelect-select": {
                        fontSize: "0.75rem",
                      },
                      "& .MuiSelect-icon": {
                        fontSize: "0.75rem",
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
            )}

            <div className="overflow-x-auto mb-4 no-scrollbar h-[54px] max-w-1245:h-[63px]">
              <div className="flex space-x-2">
                {Array.from(
                  { length: selectedDate.daysInMonth() },
                  (_, i) => i + 1
                ).map((date) => (
                  <div
                    key={date}
                    className={`cursor-pointer flex flex-col items-center justify-center max-w-1245:w-12 max-w-1245:h-11 w-15 h-10 p-2 rounded-md ${
                      selectedDate.date() === date
                        ? "bg-lime-500 dark:bg-darkTeal-400 text-white"
                        : "bg-gray-100 dark:bg-gray-800"
                    }`}
                    onClick={() => handleDateChange(selectedDate.date(date))}
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

            <div className="flex overflow-y-scroll h-full no-scrollbar justify-end">
              <div className="">
                {taskTimes && taskTimes.length > 0 && (
                  <TimelineComponent
                    times={taskTimes}
                    isDarkMode={isDarkTheme}
                  />
                )}
              </div>
              <div className="pt-3  flex w-full h-full flex-col space-y-2 ">
                {isLoading && <p>Loading...</p>}
                {isError && <p>Error fetching tasks.</p>}
                {!isLoading &&
                  !isError &&
                  (!filteredTasks || filteredTasks.length === 0) && (
                    <p>No tasks for this date.</p>
                  )}

                {!isLoading &&
                  !isError &&
                  Array.isArray(filteredTasks) &&
                  filteredTasks.length > 0 &&
                  filteredTasks.map((task) => (
                    <div className="">
                      {/* Task div with onClick to trigger the drawer */}
                      <div
                        key={task.id}
                        className="relative rounded-xl border dark:text-white text-black dark:bg-black bg-white dark:border-gray-700 h-[3.5rem] flex"
                        onClick={() => handleTaskClick(task)} // Trigger drawer on click
                      >
                        <div className="ps-2 rounded-l-xl dark:bg-lime-500 bg-lime-500 h-14"></div>
                        <div className="dark:bg-slate-900 bg-white ps-3"></div>
                        <div className="w-full flex justify-between">
                          <div>
                            <h1 className="ps-2 pt-4 max-w-1245:text-xs max-w-1245:pt-5 text-base">
                              {task.title}
                            </h1>
                          </div>
                          <div className="relative right-[10px] flex justify-between end-0 items-end">
                            <span className="absolute right-0 top-2 text-xs">
                              {formatTime(task.date)}
                            </span>
                            <div className="mb-1 flex">
                              <div className="flex items-center space-x-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-4 h-4 max-w-1245:w-3"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                  />
                                </svg>
                                <span className="text-xs pr-3 dark:text-white max-w-1245:text-[11px]">
                                  {task.reporting_to[0]?.name || "Unassigned"}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                {/* Location icon */}
                                <FaMapMarkerAlt className="w-3 h-3 text-current max-w-1245:w-3" />
                                <span className="text-xs dark:text-white max-w-1245:text-[11px]">
                                  {task.place_name}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Drawer Component */}
                      <RightSideDrawer
                        open={drawerOpen}
                        toggleDrawer={toggleDrawer}
                        selectedPage={selectedPage}
                        task={selectedTask}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="w-full h-3/4 max-w-1245:h-[74%] py-3 flex ">
            <div className="w-1/2 overflow-y-scroll scrollbar-hide rounded-lg h-[74%] dark:bg-black bg-white dark:border border-gray-700 flex flex-col overflow-hidden">
              <Events />
            </div>
            <div className="overflow-y-scroll scrollbar-hide  pe-0 h-full w-1/2 px-3">
              <div className="rounded-lg h-[74%] dark:bg-black bg-white dark:border border-gray-700 flex flex-col overflow-hidden">
                <Announcements />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full md:w-1/4">
          <EmployeeDetails />
        </div>
      </div>

      <Navbar activePage="hrms" />
    </div>
  );
};

export default AdminDashboard;
