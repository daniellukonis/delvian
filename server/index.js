const express = require('express')
const { Server } = require('socket.io')
const http = require('http')
const path = require('path')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

const players = {}

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

io.on('connection', (socket) => {
    socket.emit('socketID', socket.id)
    players[socket.id] = []
    console.log('a user connected', players)

    socket.on('disconnect', () => {
        delete players[socket.id]
        console.log('a user disconnected')
    })

    socket.on('dataToServer', (data) => {
        players[socket.id] = data
        console.log(players)
        io.emit('dataToClients', players)
    })
})

server.listen(8080, () => {
    console.log('server started', 8080)
})