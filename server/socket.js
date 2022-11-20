const { server } = require('./express')
const { Server } = require('socket.io')
const io = new Server(server)

module.exports = io