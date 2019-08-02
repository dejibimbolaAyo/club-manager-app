import api from "../config/api";
import socket from "../config/socket";


export const fetchMembers = () => {
    return api
    .get('/users')
    .then(response => response.data)
}

export const listenForMembers = (cb) => {
    socket.emit('fetchMembers', "Please send me members");
    socket.on('newUser', members => cb(members));
}

// export const fetchMembers = () => {
//     axios({
//         method: 'get',
//         url: `${BASE_URL}/users`,
//         responseType: 'application/json'
//     }).then(result => {
//         return result
//     })
// }
