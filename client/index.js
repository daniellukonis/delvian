
import Engine from './engine'
import Game from './game'
import { io } from 'socket.io-client'
import { canvas, context, clearCanvas } from './canvas'


/*
** Game data state
*/
const game = new Game()



/*
** Socket io connection
*/
const socket = io();
socket.on('new player', (playerData) => {
    game.setSocketID(socket.id)
    game.setPlayers(playerData)
    game.setPlayer()
    game.parsePlayers()
})

socket.on('request client update', () => {
    
    socket.emit()
})



/*
** General helper functions
*/
function randomInt (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}



/*
** Active browser tab check
*/
document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {
        console.log('not visible');
    } else {
        console.log('is visible');
        //request game update
    }
});



function renderAll (playerEntities) {
    playerEntities.forEach(entity => {
        entity.animate()
    });
} 



/*
** Game engine
*/
const engine = new Engine()
engine.addToEngine(clearCanvas)
engine.addToEngine(() => renderAll(game.playerEntities))
engine.loop()