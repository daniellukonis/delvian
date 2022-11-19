class Entity {
    constructor (canvas, context) {
        this.canvas = canvas
        this.context = context
        this.positionX = Math.floor(this.canvas.width / 2)
        this.positionY = Math.floor(this.canvas.height / 2)
        this.speedX = 1;
        this.speedY = 1
        this.angle = 0;

        this.radius = 40;
    }

    move () {
        this.positionX += this.speedX
        this.positionY += this.speedY
    }

    setPosition () {
        this.positionX = Math.floor(this.canvas.width / 2)
        this.positionY = Math.floor(this.canvas.height / 2)
    }

    setAngle (x2, y2) {
        const x1 = this.positionX
        const y1 = this.positionY
        const x = x2 - x1
        const angle = Math.atan2((y2 - y1) , (x2 - x1))
        this.angle = angle
    }

    render ({ context} = this) {
        context.fillStyle = '#555555'
        context.strokeStyle = '#888888'
        context.lineWidth = 4

        context.save();
        context.translate(this.positionX, this.positionY)
        context.rotate(this.angle)
        context.beginPath()
        context.moveTo(0, 0)
        context.arc(0, 0, this.radius, 0, Math.PI * 2)
        context.fill();
        context.stroke();
        context.restore();
    }

    animate (x, y) {
        this.setAngle(angle)
        this.render()
    }
}

export { Entity }