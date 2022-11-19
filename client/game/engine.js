
const fpsData = {
    interval: 1000 / 30,
    now: 0,
    then: Date.now(),
    delta: 0,

}

function startEngine(entity){
    requestAnimationFrame(()=>startEngine(entity))
    
    fpsData.now = Date.now()
    fpsData.delta = fpsData.now - fpsData.then

    if(fpsData.delta > fpsData.interval){
        fpsData.then = fpsData.now - (fpsData.delta % fpsData.interval)

        // loop functions below
        entity.render()
        // console.log(1)
        // end loop  funcitons
    }

    // fpsData.averageFPS = (fpsData.averageFPS + fpsData.delta) / 2

    // fpsData.loopTimer++
}

function engine (entity) {
    requestAnimationFrame(() => engine(entity))
    entity.render()
    console.log(1)
}

export { engine, startEngine }