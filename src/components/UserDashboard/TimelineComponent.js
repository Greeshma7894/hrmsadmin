import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const TimelineComponent = ({ times, isDarkMode }) => {
  if (!times || times.length === 0) return null;

  return (
    <Timeline position="left" sx={{ marginTop: "10px" }}>
      {times.map((time, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            {/* Add a dot above the line if there's only one task */}
            {times.length === 1 && index === 0 && (
              <TimelineDot
                sx={{
                  borderRadius: "50%",
                  width: 10,
                  height: 10,
                  border: `2px solid ${isDarkMode ? "white" : "black"}`,
                  margin: "0",
                  backgroundColor: "white",
                  position: "relative",
                   
                }}
              />  
            )}
            {/* Add a connector line above the first dot if there's only one task */}
            {times.length === 1 && index === 0 && (
              <TimelineConnector
                sx={{
                  borderColor: isDarkMode ? "white" : "black",
                  borderWidth: 1,
                  width: 2,
                  minHeight: "20px", // Adjust the height as needed
                  position: "relative",
                   // Adjust the position as needed
                }}
              />
            )}
            {/* Add the standard dot */}
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
            {/* Add the connector below the dot if there are more tasks */}
            {(times.length > 1 || index < times.length - 1) && (
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
