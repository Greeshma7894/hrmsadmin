import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const TimelineComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const times = [
    "10.00 AM", 
    "11.00 AM",
    "12.00 PM",
    "04.00 PM",
    "04.00 PM",
    "04.00 PM"
  ];

  return (
    <Timeline position="left" sx={{ marginTop: "10px" }}>
      {times.map((time, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                borderRadius: "50%",
                width: 10,
                height: 10,
                border: `2px solid ${isDarkMode ? "white" : "black"}`,
                margin: "0",
                backgroundColor: "white",
              }}
            />
            {index < times.length - 1 && (
              <TimelineConnector
              sx={{
                borderColor: isDarkMode ? "white" : "black",
                borderWidth: 1,
                width: 2,
              }}
            />
            )}
          </TimelineSeparator>
          <TimelineContent sx={{ fontSize: "0.75rem", whiteSpace: "nowrap" }}>
            {time}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineComponent;
