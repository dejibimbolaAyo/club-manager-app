import api from "../config/api";
import io from 'socket.io-client';

export const getClubs = (data) => {
  return api
    .get('/clubs', {}, )
    .then(response => response.data)
}