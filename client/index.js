
import Engine from './engine'
import Game from './game'
import { io } from 'socket.io-client'
import { canvas, context, clearCanvas } from './canvas'


/*
** Game data state
*/
const game = new Game()



/*
** Game engine
*/
const engine = new Engine()
engine.addToEngine(clearCanvas)
engine.addToEngine(() => animateAll(game.playerEntities))


function renderAll (playerEntities) {
	playerEntities.forEach(entity => {
		entity.render()
});
}


function animateAll (playerEntities) {
	playerEntities.forEach(entity => {
			entity.animate()
	});
} 



/*
** Socket io connection
*/
const socket = io()



/*
** Update game state from server
*/
socket.on('all players', (playerData) => {
    game.setSocketID(socket.id)
    game.setPlayers(playerData)
    game.setPlayer()
    game.parsePlayers()
		clearCanvas()
		renderAll(game.playerEntities)

		engine.stop()
		
})



socket.on('start game', () => {
	engine.start()
})



socket.on('stop game', () => {
	engine.stop()
})



canvas.addEventListener('click', () => {
	socket.emit('go')
})





