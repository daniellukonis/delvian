
import { canvas, context, container, resizeCanvas,
     Entity, engine, startEngine
    } from './game'

resizeCanvas(canvas, container)
const e1 = new Entity(canvas, context)

window.addEventListener('resize', e => {
    resizeCanvas(canvas, container)
    e1.setPosition();
})

canvas.addEventListener('mousemove', e => {
    const target = e.target
    const rect = target.getBoundingClientRect()
    const x = Math.floor(e.clientX - rect.left)
    const y = Math.floor(e.clientY - rect.top)
    e1.setAngle(x, y)

})

startEngine(e1)

