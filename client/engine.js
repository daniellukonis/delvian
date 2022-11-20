/*
** Render engine
*/
class Engine {
    constructor () {
        this.FPS = 30
        this.now
        this.then = Date.now()
        this.interval = 1000 / this.FPS
        this.delta

        this.payload = []
        this.loop = this.loop.bind(this)

        this.active = false
    }



		/*
		** Add function to run each loop
		*/
    addToEngine(func) {
        this.payload.push(func)
    }



    start() {
      this.active = true
      this.loop()
    }



    stop() {
      this.active = false
    }


    
		/*
		** Loop runs at this.FPS frames per second
		*/
    loop() {
        this.active && window.requestAnimationFrame(this.loop)

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
 
