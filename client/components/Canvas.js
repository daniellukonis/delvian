import React, { useEffect, useState } from 'react'
import { dataToServer } from '../game/socket'



function Canvas() {

    function handleOnClick () {
        dataToServer(123)
    }

    return (
        <canvas onClick={handleOnClick}></canvas>
    )
}

export default Canvas