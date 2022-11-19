/*
** Socket io connection
*/
import { io } from 'socket.io-client'
const socket = io();
socket.on('socketID', () => {console.log(socket.id)})
//create entity
//send entity data


/*
** Setup canvas
*/
const canvas =  document.querySelector('canvas')
const context = canvas.getContext('2d')
const WIDTH = 600
const HEIGHT = 600
canvas.width =  WIDTH
canvas.height = HEIGHT



/*
** Canvas helper functions
*/
function clearCanvas () {
    context.clearRect(0, 0, WIDTH, HEIGHT)
}



/*
** General helper functions
*/
function randomInt (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
} 



/*
** Entity base class
*/
class Entity {
    constructor (canvas, context, socket) {
        
        this.canvas = canvas
        this.context = context
        this.socket = socket

        this.positionX = Math.floor(Math.random() * this.canvas.width)
        this.positionY = Math.floor(Math.random() * this.canvas.height)

        this.velocityX = 1
        this.velocityY = 0

        this.radius = 10
    }

    checkBounce () {
        if (this.positionX > this.canvas.width && this.velocityX > 0) {
            this.velocityX *= -1
            this.dataToServer()
            }
            
        
        if (this.positionX < 0 && this.velocityX < 0) {
            this.velocityX *= -1
            this.dataToServer()
        }
    }

    getData () {
        return [this.positionX, this.positionY, this.velocityX, this.velocityY] 
    }

    setData (data) {
        this.positionX = data[0]
        this.positionY = data[1]
        this.velocityX = data[2]
        this.velocityY = data[3]
    }

    dataToServer () {
        this.socket.emit('dataToServer', this.getData())
    }

    move () {
        this.positionX += this.velocityX
        this.positionY += this.velocityY
    }

    render ({ context } = this) {
        context.save()
        context.strokeStyle = '#888888'
        context.lineWidth = 2
        context.beginPath()
        context.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2)
        context. stroke()
        context.restore()
    }

    animate () {
        this.checkBounce()
        this.move()
        this.render()
    }
}


const e1 = new Entity(canvas, context, socket)






socket.on('dataToClients', data => console.log(data))



/*
** Render engine
*/
const fps = 10;
let now;
let then = Date.now();
let interval = 1000/fps;
let delta;
  
function engine() {
    requestAnimationFrame(engine);
     
    now = Date.now();
    delta = now - then;
     
    if (delta > interval) {
        // update time stuffs
         
        // Just `then = now` is not enough.
        // Lets say we set fps at 10 which means
        // each frame must take 100ms
        // Now frame executes in 16ms (60fps) so
        // the loop iterates 7 times (16*7 = 112ms) until
        // delta > interval === true
        // Eventually this lowers down the FPS as
        // 112*10 = 1120ms (NOT 1000ms).
        // So we have to get rid of that extra 12ms
        // by subtracting delta (112) % interval (100).
        // Hope that makes sense.
         
        then = now - (delta % interval);
         
        // ... Code for Drawing the Frame ...
        // dataToServer(e1.emitCoord())
        clearCanvas()
        e1.animate()
    }
}
 
engine();