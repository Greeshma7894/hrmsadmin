import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Task from "./innerPages/Task";
import Profile from "./innerPages/Profile";
import Applyleave from "./innerPages/Applyleave";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function RightSideDrawer({ open, toggleDrawer, selectedPage, task }) {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery("(max-width: 1245px)");

  const drawerBackgroundColor = theme.palette.background.default;
  const handleColor = theme.palette.text.primary;

  const renderContent = () => {
    switch (selectedPage) {
      case 'task':
        return <Task task={task} />;
      case 'profile':
        return <Profile />;
      case 'applyleave':
        return <Applyleave />
      default:
        return <Task task={task} />;
    }
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      PaperProps={{
        sx: {
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
          overflow: "hidden",
          backgroundColor: drawerBackgroundColor,
        },
      }}
    >
      <Box
        sx={{
          width: isScreenSmall ? "36vw" : 550,
          height: "100vh",
          backgroundColor: drawerBackgroundColor,
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
          overflow: "hidden",
          position: "relative",
        }}
        role="presentation"
      >
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{ position: "absolute", top: 10, right: 10, color: handleColor }}
        >
          <CloseIcon />
        </IconButton>
        {renderContent()}
      </Box>
    </Drawer>
  );
}
