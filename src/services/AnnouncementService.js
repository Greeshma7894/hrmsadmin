import axiosInstance from './axiosInstance';
import { getAnnouncements } from './api';

// WebSocket URL
const WEBSOCKET_URL = 'https://seashell-app-qz64y.ondigitalocean.app/ws';


// Function to connect to the WebSocket
export const connectWebSocket = () => {
  const socket = new WebSocket(WEBSOCKET_URL);

  socket.onopen = () => {
    console.log('WebSocket connection established');
  };

  socket.onclose = (event) => {
    if (event.wasClean) {
      console.log(`WebSocket connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      console.error('WebSocket connection closed unexpectedly');
    }
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  return socket;
};

// Function to fetch initial announcements using REST API
export const fetchAnnouncements = async () => {
  try {
    const response = await axiosInstance.get("/employee/announcement/get");
    console.log("hgagaga",response);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching announcements:', error);
    throw error; // Rethrow the error to handle it in the component
  }
};
