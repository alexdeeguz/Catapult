
class Target {
    constructor() {
        this.posX = 0
        this.posY = 0
        this.randomPosition()
    }

    randomPosition() {
        const maxWidth = window.innerWidth + 15
        const maxHeight = (window.innerHeight * .8) - 10
        this.posX = Math.floor(Math.random() * maxWidth)
        this.posY = Math.floor(Math.random() * maxHeight)
    }
}

export default Target