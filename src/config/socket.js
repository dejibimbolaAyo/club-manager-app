import io from 'socket.io-client';
// const io = require ('socket.io-client')
// const socket = io('http://localhost:9000');
const socket = io('http://38030678.ngrok.io');

console.log("Socket", io)

export default socket;