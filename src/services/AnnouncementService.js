import { getAnnouncements } from "./api";
import axiosInstance from './axiosInstance'

// Function to fetch initial announcements using REST API
export const fetchInitialAnnouncements = async () => {
  try {
    // Use the imported `getAnnouncements` constant instead of the hardcoded URL
    const response = await axiosInstance.get(getAnnouncements);
    //console.log("Fetched announcements:", response.data.data);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching announcements:', error);
    throw error; // Rethrow the error to handle it in the component
  }
};

// WebSocket URL (ensure it's wss:// for secure WebSocket)
const websocketURL = "wss://seashell-app-qz64y.ondigitalocean.app/ws";

export const fetchAnnouncements = (onMessageCallback) => {
  // Create a WebSocket connection
  const socket = new WebSocket(websocketURL);

  socket.onopen = () => {
    console.log("WebSocket connection opened");
  };
  // WebSocket on message event
  socket.onmessage = (event) => {
    try {
      const messageData = JSON.parse(event.data);
      console.log("Received WebSocket message:", messageData);

      console.log("Message Data:", messageData);
      // Use the actual structure of the message
      if (messageData) {
        onMessageCallback(messageData);
      } else {
        console.warn("Unexpected message format:", messageData);
      }
    } catch (error) {
      console.error("Error processing WebSocket message:", error);
    }
  };

  // WebSocket on error event
  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
    // reject(error);
  };

  // WebSocket on close event
  socket.onclose = () => {
    console.log("WebSocket closed. ");
  };

  // Return the WebSocket instance so it can be closed later if needed
  return socket;
};
