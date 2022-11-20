/*
** Render engine
*/
class Engine {
    constructor () {
        this.FPS = 10
        this.now
        this.then = Date.now()
        this.interval = 1000 / this.FPS
        this.delta

        this.payload = []
        this.loop = this.loop.bind(this)
    }



		/*
		** Add function to run each loop
		*/
    addToEngine(func) {
        this.payload.push(func)
    }



		/*
		** Loop runs at this.FPS frames per second
		*/
    loop() {
        window.requestAnimationFrame(this.loop)

        this.now = Date.now()
        this.delta = this.now - this.then

        if (this.delta > this.interval) {
            this.then = this.now - (this.delta % this.interval);
      


						/*
						** Each function in payload runs each frame
						*/
            this.payload.forEach(p => {p()})
        }
    }
}

  

export default Engine
 
