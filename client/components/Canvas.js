import React, { useEffect, useState } from 'react'
import { entity1 } from '../game'
import { dataToServer } from '../game/socket'




function Canvas() {

    useEffect( )

    function handleOnClick () {
        entity1.render();
    }

    return (
        <canvas onClick={handleOnClick}></canvas>
    )
}

export default Canvas