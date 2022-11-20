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

//  Add player to game on connect
io.on('connection', (socket) => {
    console.log('a user connected', socket.id)
    game.createPlayer(socket.id)
		const playerData = game.getPlayers();

		io.emit('all players', playerData)

    
    

//	Remove player from game on disconnect
    socket.on('disconnect', () => {
      console.log('a user disconnected', socket.id)
      game.deletePlayer(socket.id)
      const playerData = game.getPlayers();

      io.emit('all players', playerData)
        
    })


    socket.on('go', () => {
      startGame()
    })
})




function startGame () {
  io.emit('start game')
}






/*
** Start server
*/
server.listen(port, () => {
    console.log('server started', port)
})