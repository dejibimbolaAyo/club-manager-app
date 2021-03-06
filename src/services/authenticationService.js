import api from "../config/api";
import io from 'socket.io-client';

const socketConnection = 'http://localhost:9000';

let userSocket = io(`${socketConnection}/users`)
let defaultSocket = io(`${socketConnection}`)

export const authenticate = (data) => {
  return api
    .post('/user/auth', data)
    .then(response => response.data)
}