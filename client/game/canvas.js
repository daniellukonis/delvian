const canvas = document.querySelector('#canvas')
const container = document.querySelector('#canvas-container')
const context = canvas.getContext('2d')

function resizeCanvas (canvas, container) {
    canvas.width = Math.floor(container.clientWidth)
    canvas.height = Math.floor(container.clientHeight)
}



export { canvas, context, container, resizeCanvas}

// canvas.addEventListener('mousemove', e => {
//     const target = e.target
//     const rect = target.getBoundingClientRect()
//     const x = Math.floor(e.clientX - rect.left)
//     const y = Math.floor(e.clientY - rect.top)
//     console.log(x, y)
// })