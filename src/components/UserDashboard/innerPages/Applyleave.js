import React, { useState } from "react";
import dayjs from "dayjs";
import { useTheme } from "@mui/material/styles";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Button, Typography } from "@mui/material";

const Applyleave = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isSelectingStartDate, setIsSelectingStartDate] = useState(true);
  const theme = useTheme();

  const handleDateChange = (newDate) => {
    if (isSelectingStartDate) {
      setStartDate(dayjs(newDate));
      setEndDate(null); // Reset end date when a new start date is selected
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

  // Custom render day function to highlight the date range
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
          backgroundColor: isStart || isEnd || isInRange ? "#84cc16" : "transparent", // lime-500 color
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

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="mt-10">
        <h1 className="ps-8 text-lg font-semibold">Apply Leave</h1>
      </div>
      <div className="mx-4 text-xs text-start ps-4 pt-2.5 flex justify-start my-2 h-10 bg-gray-200 border border-gray-200 rounded-lg items-center">
        <select
          className="bg-transparent focus:outline-none text-xs mr-2 mb-2 w-full h-full cursor-pointer"
          defaultValue=""
        >
          <option value="" disabled>
            Select leave type*
          </option>
          <option value="Casual Leave">Casual Leave</option>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Paid Leave">Paid Leave</option>
          <option value="Maternity Leave">Maternity Leave</option>
          <option value="Paternity Leave">Paternity Leave</option>
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
                width: "100%", // Full width of the container
              },
              "& .MuiPickersCalendarHeader-root": {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 8px",
                fontSize: "0.775rem",
              },
              "& .MuiPickersArrowSwitcher-root": {
                fontSize: "1.2rem",
                color: "#000",
              },
              "& .MuiPickersCalendarHeader-label": {
                fontSize: "1rem",
                fontWeight: "bold",
                textAlign: "center",
                flex: 1,
              },
              "& .MuiPickersDay-root": {
                fontSize: "0.75rem",
                borderRadius: "50%",
                height: "30px",
                width: "30px",
                margin: "2px",
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              },
              "& .MuiPickersDay-root.Mui-selected": {
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "bold",
              },
              "& .MuiTypography-caption": {
                fontSize: "0.75rem",
                fontWeight: "normal",
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

      {/* Full Day and Half Day Buttons in Horizontal Line */}
      <div className="my-4 mx-10 flex justify-between space-x-6">
        <button className="flex-1 font-semibold text-[13px] bg-lime-500 h-8 rounded-xl">
          Full day
        </button>
        <button className="flex-1 font-semibold text-[13px] bg-lime-500 h-8 rounded-xl">
          Half day
        </button>
      </div>
      <div className="flex mx-6 my-4 text-sm border border-gray-200 py-8 rounded-lg bg-gray-200">
        <p className="-mt-4 ps-3">Reason for leave*</p>
      </div>
    </div>
  );
};

export default Applyleave;
