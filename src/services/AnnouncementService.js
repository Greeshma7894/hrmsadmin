const WEBSOCKET_URL = 'https://seashell-app-qz64y.ondigitalocean.app/ws'; 

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
