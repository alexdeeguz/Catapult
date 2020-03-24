import Game from './game'
import Object from './object'


let g = new Game()
g.draw()    

window.onload = () => {

    document.addEventListener('keydown', (e) => {
        if (e.keyCode == 38) { // up arrow is pressed
            console.log("hello")
        }

        if (e.keyCode == 40) { // down arrow is pressed
            console.log("hello")
        }
    })

    document.addEventListener('keydown', e => {
        if (e.keyCode == 32) {
            g.updateObjectPos()
        }
    })

    document.addEventListener('click' , e => {
        const diffX = g.userObject.posX - e.clientX
        const diffY = g.userObject.posY - e.clientY
        g.updateObjectPos(diffX, diffY)
    })

    document.addEventListener('mousemove', e => {
        const diffX = g.userObject.posX - e.clientX
        const diffY = g.userObject.posY - e.clientY
        g.updateDirectionArrow(diffX, diffY)
    })
}
