import React, { useState } from "react";
import dayjs from "dayjs";
import { useTheme } from "@mui/material/styles";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Button, Typography, Snackbar, Alert } from "@mui/material";
import axiosInstance from "../../../services/axiosInstance";

const ApplyLeave = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isSelectingStartDate, setIsSelectingStartDate] = useState(true);
  const [leaveType, setLeaveType] = useState("");
  const [reason, setReason] = useState("");
  const [isFullDay, setIsFullDay] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const theme = useTheme();

  const handleDateChange = (newDate) => {
    if (isSelectingStartDate) {
      setStartDate(dayjs(newDate));
      setEndDate(null);
    } else {
      setEndDate(dayjs(newDate));
    }
    setIsSelectingStartDate(!isSelectingStartDate);
    setIsCalendarOpen(false);
  };

  const openCalendarForStartDate = () => {
    setIsSelectingStartDate(true);
    setIsCalendarOpen(true);
  };

  const openCalendarForEndDate = () => {
    setIsSelectingStartDate(false);
    setIsCalendarOpen(true);
  };

  const renderDay = (day, _value, DayComponentProps) => {
    const isInRange =
      startDate &&
      endDate &&
      day.isAfter(startDate, "day") &&
      day.isBefore(endDate, "day");
    const isStart = startDate && day.isSame(startDate, "day");
    const isEnd = endDate && day.isSame(endDate, "day");

    return (
      <div
        style={{
          backgroundColor: isStart || isEnd || isInRange ? "#84cc16" : "transparent",
          color: isStart || isEnd ? "#fff" : undefined,
          borderRadius: isStart || isEnd ? "50%" : undefined,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DayComponentProps.day {...DayComponentProps} />
      </div>
    );
  };

  const handleSubmit = async () => {
    const leaveDates = [];
    if (startDate && endDate) {
      let currentDate = startDate;
      while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, 'day')) {
        leaveDates.push({
          date: currentDate.format("YYYY-MM-DD"),
          half_day: isFullDay ? "false" : "true",
          half_day_type: isFullDay ? "0" : "1",
        });
        currentDate = currentDate.add(1, 'day');
      }
    }

    const leaveData = {
      leave_date: leaveDates,
      reason: reason,
      leave_type: leaveType,
      cc: ["4"],
    };

    try {
      const response = await axiosInstance.post("/employee/leave/apply", leaveData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSnackbarMessage("Leave applied successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      setTimeout(() => {
        window.location.reload(); // Refresh the page
      }, 6000); // Delay refresh to show notification
    } catch (error) {
      setSnackbarMessage(
        `Failed to apply leave. Error: ${
          error.response
            ? `${error.response.status} - ${error.response.data.message || error.response.data}`
            : error.message
        }`
      );
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="mt-5">
        <h1 className="ps-8 text-lg font-semibold">Apply Leave</h1>
      </div>
      <div className="mx-4 text-xs text-start ps-4 pt-2.5 flex justify-start my-2 h-10 bg-gray-200 border border-gray-200 rounded-lg items-center">
        <select
          className="bg-transparent focus:outline-none text-xs mr-2 mb-2 w-full h-full cursor-pointer"
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
        >
          <option value="" disabled>
            Select leave type*
          </option>
          <option value="1">Casual Leave</option>
          <option value="2">Sick Leave</option>
          <option value="3">Paid Leave</option>
          <option value="4">Maternity Leave</option>
          <option value="5">Paternity Leave</option>
        </select>
      </div>

      {/* Calendar Section with Footer Inside */}
      <div className="mx-6 border h-[350px] border-gray-200 rounded-xl">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={selectedDate}
            onChange={handleDateChange}
            renderDay={renderDay}
            sx={{
              "&.MuiCalendarPicker-root": {
                width: "100%",
               
              },
              "& .MuiPickersCalendarHeader-root": {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 8px",
                fontSize: "0.775rem",
                
              },
              "& .MuiPickersDay-root": {
                fontSize: "0.75rem",
                borderRadius: "50%",
              },
            }}
          />

          {/* Footer Section */}
          <div className="flex justify-between items-center -my-14 mx-2 h-16 bg-gray-100 rounded-lg">
            <div className="flex flex-col">
              <Typography
                onClick={openCalendarForStartDate}
                className="cursor-pointer ps-5"
                variant="caption"
              >
                Start date
              </Typography>
              <Typography className="ps-4" variant="caption">
                {startDate ? startDate.format("DD/MM/YYYY") : "--/--/--"}
              </Typography>
            </div>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                minWidth: "80px",
                borderRadius: "8px",
                fontSize: "0.875rem",
              }}
            >
              {startDate && endDate
                ? `${endDate.diff(startDate, "day")} days`
                : "0 days"}
            </Button>

            <div className="flex pb-0 flex-col">
              <Typography
                onClick={openCalendarForEndDate}
                className="cursor-pointer pe-6"
                variant="caption"
              >
                End date
              </Typography>
              <Typography className="" variant="caption">
                {endDate ? endDate.format("DD/MM/YYYY") : "--/--/--"}
              </Typography>
            </div>
          </div>
        </LocalizationProvider>
      </div>

      {/* Full Day and Half Day Buttons */}
      <div className="my-4 mx-10 flex justify-between space-x-6">
        <button
          className={`flex-1 font-semibold text-[13px] rounded-lg p-2 ${
            isFullDay ? "bg-lime-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setIsFullDay(true)}
        >
          Full Day
        </button>
        <button
          className={`flex-1 font-semibold text-[13px] rounded-lg p-2 ${
            !isFullDay ? "bg-lime-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setIsFullDay(false)}
        >
          Half Day
        </button>
      </div>

      {/* Reason Input */}
      <div className="mx-4 text-start my-2 h-20 bg-gray-200 border border-gray-200 rounded-lg flex items-center">
        <textarea
          className="bg-transparent focus:outline-none text-xs w-full h-full p-2"
          placeholder="Reason for leave*"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end my-3 mx-5">
        <button
          className="bg-lime-500 text-white py-2 px-8 rounded-lg text-[12px] font-semibold"
          onClick={handleSubmit}
        >
          Apply 
        </button>
      </div>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ApplyLeave;
