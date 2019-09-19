import api from "../config/api";
import io from 'socket.io-client';

const socketConnection = 'http://localhost:9000';

let userSocket = io(`${socketConnection}/users`)
let defaultSocket = io(`${socketConnection}`)

export const registerAdmin = (data) => {
  return api
    .post('/user/admin', data)
    .then(response => response.data)
}

export const updateProfile = (data) => {
  return api
    .put('/admin', data, {
    headers: {
      authorization: `Bearer ${data.token}`
    }
  })
    .then(response => response.data)
}

export const getClubMembers = (request) => {
  return api.get(`/club/${request.clubId}/members`, {}, {
    headers: {
      authorization: `Bearer ${request.token}`
    }
  }).then(response => response.data)
}

export const getClubDetails = (request) => {
  return api.get(`/club`, {
    clubId: request.clubId
  }, {
    headers: {
      authorization: `Bearer ${request.token}`
    }
  }).then(response => response.data)
}
