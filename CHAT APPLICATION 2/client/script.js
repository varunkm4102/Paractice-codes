const WebSocket = require('ws');

const ws = new WebSocket('ws://127.0.0.1:9899');

ws.onopen = () => {
  const message = 'hello guys'; // Corrected syntax
  ws.send(message); // Sending a string, not an object
};
