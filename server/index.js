const { app, server } = require('./express')
const io = require('./socket')
const Game = require('./game')
const express = require('express')
const path = require('path')

const PORT = 8080
const port = process.env.PORT || PORT



/*
**  Serve static files
*/
app.use(express.static(path.join(__dirname, '../public')))



/*
**  Serve home route
*/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})



/*
**  Create new game
*/
const game = new Game()



/*
**  Io events
*/
io.on('connection', (socket) => {
    console.log('a user connected', socket.id)

    //	Create new player in game
    game.createPlayer(socket.id)

		//	Broadcast new player data
		const playerData = game.getPlayers();
		io.emit('new player', playerData)
    
    socket.on('disconnect', () => {
				//	Remove player from game on disconnect
        game.deletePlayer(socket.id)
				
				const playerData = game.getPlayers();
				io.emit('new player', playerData)
        console.log('a user disconnected', socket.id)
    })
})



/*
** Start server
*/
server.listen(port, () => {
    console.log('server started', port)
})