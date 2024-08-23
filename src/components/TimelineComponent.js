import React , {useState} from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const TimelineComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <Timeline position="left" sx={{ marginTop: "10px" }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              borderRadius: "50%",
              width: 10,
              height: 10,
              border: `2px solid ${isDarkMode ? 'white' : 'black'}`,
              margin: "0",
              backgroundColor: "white",
            }}
          />
          <TimelineConnector
            sx={{
              borderLeft: `2px solid ${isDarkMode} ? 'white' : 'black`,
              width: 2,
            }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ fontSize: "0.75rem", whiteSpace: "nowrap" }}>
          10.00 AM
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              borderRadius: "50%",
              width: 10,
              height: 10,
              border: `2px solid ${isDarkMode ? 'white' : 'black'}`,
              margin: "0",
              backgroundColor: "white",
            }}
          />
          <TimelineConnector
            sx={{
              borderLeft: `2px solid ${isDarkMode} ? 'white' : 'black`,
              width: 2,
            }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ fontSize: "0.75rem", whiteSpace: "nowrap" }}>
          11.00 AM
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              borderRadius: "50%",
              width: 10,
              height: 10,
              border: `2px solid ${isDarkMode ? 'white' : 'black'}`,
              margin: "0",
              backgroundColor: "white",
            }}
          />
          <TimelineConnector
            sx={{
              borderLeft: `2px solid ${isDarkMode} ? 'white' : 'black`,
              width: 2,
            }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ fontSize: "0.75rem", whiteSpace: "nowrap" }}>
          12.00 PM
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              borderRadius: "50%",
              width: 10,
              height: 10,
              border: `2px solid ${isDarkMode ? 'white' : 'black'}`,
              margin: "0",
              backgroundColor: "white",
            }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ fontSize: "0.75rem", whiteSpace: "nowrap" }}>
          04.00 PM
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

const CombinedScrollComponent = ({ dates }) => {
  return (
    <div className="relative rounded-lg mt-0 bg-purple-500 border border-gray-600 w-full h-96 p-4 flex flex-col">
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
      <div className="flex items-center space-x-2 mb-2">
        <div className="rounded-lg bg-black border border-teal-600 w-20 h-7 flex items-center justify-center">
          <p
            className="text-teal-400 text-xs"
            style={{ fontFamily: "'SF Pro Display', sans-serif" }}
          >
            Today
          </p>
        </div>
        {dates.map((date) => (
          <div
            key={date}
            className="rounded-xl bg-black border border-gray-600 w-10 h-7 flex items-center justify-center"
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
        className="flex overflow-y-scroll no-scrollbar space-x-4"
        style={{ maxHeight: "12rem" }}
      >
        <div className="w-32">
          <TimelineComponent />
        </div>

        <div className="pt-3 flex flex-col space-y-2">
          <div
            className="relative rounded-xl border bg-black border-gray-600 h-14 flex"
            style={{ width: "27rem" }}
          >
            <div className=" rounded-l-xl bg-teal-600 h-14"></div>
            <div className="bg-slate-900 ps-3"></div>
            <h1 className="ps-2 pt-2 text-xs">Send mail to Client</h1>
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
          </div>

          <div
            className="rounded-xl border bg-black border-gray-600 h-14 flex"
            style={{ width: "27rem" }}
          >
            <div className="ps-2 rounded-l-xl bg-teal-600 h-14"></div>
            <div className="bg-slate-900 ps-3"></div>
          </div>
          <div
            className="rounded-xl border bg-black border-gray-600 h-14 flex"
            style={{ width: "27rem" }}
          >
            <div className="ps-2 rounded-l-xl bg-teal-600 h-14"></div>
            <div className="bg-slate-900 ps-3"></div>
          </div>
          <div
            className="rounded-xl border bg-black border-gray-600 h-14 flex"
            style={{ width: "27rem" }}
          >
            <div className="ps-2 rounded-l-xl bg-teal-600 h-14"></div>
            <div className="bg-slate-900 ps-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;
