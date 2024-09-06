import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Task from './innerPages/Task';

export default function RightSideDrawer({ open, toggleDrawer }) {
  // Ensure toggleDrawer is a function
  if (typeof toggleDrawer !== 'function') {
    throw new Error("toggleDrawer is not a function");
  }

  const list = () => (
    <Box
      sx={{
        width: 550,
        height: '100vh',
        backgroundColor: 'white',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
      }}
      role="presentation"
    >
      {/* Close button in the top right corner */}
      <IconButton
        onClick={toggleDrawer(false)}
        sx={{ position: 'absolute', top: 10, right: 10 }}
      >
        <CloseIcon />
      </IconButton>

      {/* Content inside the drawer */}
      <Task />

      <Box
        sx={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80px',
          height: '5px',
          backgroundColor: 'gray',
          borderRadius: '10px',
        }}
      ></Box>
    </Box>
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      PaperProps={{
        sx: {
          borderTopLeftRadius: '20px',
          borderBottomLeftRadius: '20px',
          overflow: 'hidden',
        },
      }}
    >
      {list()}
    </Drawer>
  );
}
