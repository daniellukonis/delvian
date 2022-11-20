/*
** Render engine
*/
class Engine {
    constructor () {
        this.fps = 30
        this.now
        this.then = Date.now()
        this.interval = 1000 / this.fps
        this.delta
        this.payload = []
        this.loop = this.loop.bind(this)
    }

    addToEngine(func) {
        this.payload.push(func)
    }

    loop() {
        window.requestAnimationFrame(this.loop)

        this.now = Date.now()
        this.delta = this.now - this.then

        if (this.delta > this.interval) {
            this.then = this.now - (this.delta % this.interval);
            // ... Code for Drawing the Frame ...
            this.payload.forEach(p => {p()})
        }
    }
}

  
export default Engine
 
