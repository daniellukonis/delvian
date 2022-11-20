import Entity from './entity'
import Engine from './engine'
import { io } from 'socket.io-client'
import { canvas, context, clearCanvas } from './canvas'



const gameData = {
    playerEntities: [],
    playerData: {},
    socket: ''
}



/*
** Socket io connection
*/
const socket = io();
socket.on('new player', (playerData) => {
    // gameData.playerData = playerData
    gameData.socket = socket.id
    gameData.playerEntities = (playerData.map(e => {
        return new Entity(canvas, context, e)
    }))
    console.log(gameData)
})



/*
** General helper functions
*/
function randomInt (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}



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
engine.addToEngine(() => renderAll(gameData.playerEntities))
engine.loop()