
/*
** Entity base class
*/
class Entity {
    constructor (canvas, context, startData) {
        
        this.canvas = canvas
        this.context = context
        
        this.positionX = startData.positionX || 0
        this.positionY = startData.positionY || 0

        this.velocityX = startData.velocityX || 0
        this.velocityY = startData.velocityY || 0

        this.radius = 10
        this.player = startData.player || false

        this.health = 255
    }



    /*
    ** Reverses velocity upon hitting canvas edges
    */
    checkBounce () {
        if (this.positionX > this.canvas.width && this.velocityX > 0) {
            this.velocityX *= -1
            }
        
        if (this.positionX < 0 && this.velocityX < 0) {
            this.velocityX *= -1
            }

        if (this.positionY > this.canvas.height && this.velocityY > 0) {
            this.velocityY *= -1
            }    
        
        if (this.positionY < 0 && this.velocityY < 0) {
            this.velocityY *= -1
            }
    }



    setPlayer () {
        this.player = true
    }



    move () {
        this.positionX += this.velocityX
        this.positionY += this.velocityY
    }



    render ({ context } = this) {
        context.save()
        context.fillStyle = this.player ? '#AA00AA' : '#888888'
        context.strokeStyle = `rgb(255,255,255,${this.health})`
        context.lineWidth = 4
        context.beginPath()
        context.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2)
        context.fill()
        context.stroke()
        context.restore()
    }



    animate () {
        this.checkBounce()
        this.move()
        this.render()
    }
}



export default Entity