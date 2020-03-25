
class Target {
    constructor() {
        this.posX = 0
        this.posY = 0
        this.radius = 10
        this.color = 'red'
        this.randomPosition()
    }

    randomPosition() {
        const maxWidth = window.innerWidth 
        const maxHeight = (window.innerHeight * .8)
        this.posX = Math.floor(Math.random() * (maxWidth-50)) + 10
        this.posY = Math.floor(Math.random() * (maxHeight-50)) + 10
    }
}

export default Target