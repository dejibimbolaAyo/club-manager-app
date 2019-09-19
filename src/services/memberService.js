import api from "../config/api";
import io from 'socket.io-client';

const socketConnection = 'http://localhost:9000';

let userSocket = io(`${socketConnection}/users`)
let defaultSocket = io(`${socketConnection}`)

export const register = (data) => {
  return api
    .post('/user/member', data)
    .then(response => response.data)
}

export const updateProfile = (data) => {
  return api
    .put('/member', data, {
      headers: {
        authorization: `Bearer ${data.token}`
      }
    })
    .then(response => response.data)
}

export const getUser = (request) => {
  return api
    .get('/user', {}, {
      headers: {
        authorization: `Bearer ${request.token}`
      }
    })
    .then(response => response.data)
}

export const getUsers = () => {
  return api
    .get('/users')
    .then(response => response.data)
}

export const acceptInvitation = (request) => {
  return api
    .get(`/invitation/`, {invitationCode: request.invitationCode}, {
      headers: {
        authorization: `Bearer ${request.token}`
      }
    })
    .then(response => response.data)
}

export const declineInvitation = (request) => {
  return api
    .delete(`/invitation/`, {invitationCode: request.invitationCode}, {
      headers: {
        authorization: `Bearer ${request.token}`
      }
    })
    .then(response => response.data)
}

// Socket communication
export const listenForNewMember = (cb) => {

  console.log("User socket", userSocket)
  userSocket.on('connect', () => console.log("Connect"))
  userSocket.on('disconnect', () => console.log("Disconnect"))
  userSocket.on('newMember', newMember => cb(newMember))
  userSocket.emit('newMember', 'userId')
}

export const listenToServerHeartbeat = (cb) => {
  const socket = io(`${socketConnection}`)
  socket.on('heartBeat', heartRate => {
    cb(heartRate)
  })
}
