import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const TimelineComponent = ({ times, isDarkMode, originalTimes }) => {
  if (!times || times.length === 0) return null;
  console.log("times",times);
  

  // Calculate the number of dots to display as x + 1
  const dotsCount = times.length + 1;

  return (
    <Timeline position="left" sx={{ marginTop: "10px" }}>
      {Array.from({ length: dotsCount }).map((_, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            {/* Render a dot for each index */}
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
            {/* Add the connector below each dot, except for the last one */}
            {index < dotsCount - 1 && (
              <TimelineConnector
                sx={{
                  borderColor: isDarkMode ? "white" : "black",
                  borderWidth: 1,
                  width: 2,
                }}
              />
            )}
          </TimelineSeparator>
          {/* Display the time for the first dot and subsequent task content */}
          <TimelineContent sx={{ fontSize: "0.75rem", whiteSpace: "nowrap" }}>
            {index === 0 ? "00:00 AM" : times[index - 1] || ""}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineComponent;
