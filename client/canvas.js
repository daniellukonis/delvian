
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



export { canvas, context, clearCanvas }