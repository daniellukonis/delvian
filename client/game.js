import Entity from "./entity"
import { canvas, context } from "./canvas"

/*
**  Game client class
*/
class Game {
    constructor () {
        this.players = {}
        this.playerEntities = []
        this.socketID = ''
        this.board = {width: 600, height: 600}
    }

    setPlayer () {
        this.players[this.socketID].player = true
    }

    setPlayers (players) {
        this.players = players
    }

    getPlayers () {
        return this.players
    }

    parsePlayers () {
        const players = Object.values(this.players)
        this.playerEntities = players.map(e => {
            return new Entity(canvas, context, e)
        })
    }

    getPlayerEntities () {
        return this.playerEntities
    }

    setSocketID (id) {
        this.socketID = id
    }
}

export default Game