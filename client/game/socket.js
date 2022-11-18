/*
**  Import io function from socket.io-client
*/
import { io } from 'socket.io-client'



/*
**  Initialize socket.io connection
*/
const socket = io(); 



/*
**  Send data to server
*/
function dataToServer (data) {
    socket.emit('dataToServer', data)
}



/*
**  Recieve data from server
*/
socket.on('dataToClients', data => console.log(data))



export { dataToServer }