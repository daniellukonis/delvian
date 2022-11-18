const express = require('express')
const { Server } = require('socket.io')
const http = require('http')
const path = require('path')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('disconnect', () => {
        console.log('a user disconnected')
    })

    socket.on('dataToServer', (data) => {
        io.emit('dataToClients', data)
    })
})

server.listen(8080, () => {
    console.log('server started', 8080)
})