
/*
**  Game server class
*/
class Game {
    constructor () {
        this.players = {}
        this.board = {width: 600, height: 600}
    }



    /*  helper function  */
    randomInt (min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    }


    
    /*  creates new player at random position and velocity */
    createPlayer (playerID) {
        const positionX = this.randomInt(0, this.board.width)
        const positionY = this.randomInt(0, this.board.height)
        const velocityX = this.randomInt(0, 4)
        const velocityY = this.randomInt(0, 4)
        this.players[playerID] = { positionX, positionY, velocityX, velocityY }
    }



    /*  deletes player when they die or disconnect  */
    deletePlayer (playerID) {
        delete this.players[playerID]
    }



    /*  returns array of player positions and velocities  */
    getPlayers () {
        return Object.values(this.players)
    }
}



module.exports = Game