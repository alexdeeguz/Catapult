import Game from './game'
import Object from './object'


let g = new Game()
g.draw()    

window.onload = () => {

    document.addEventListener('click' , e => {
        const diffX = g.userObject.posX - e.clientX
        const diffY = g.userObject.posY - e.clientY
        g.updateGame(diffX, diffY)
    })

    document.addEventListener('mousemove', e => {
        const diffX = g.userObject.posX - e.clientX
        const diffY = g.userObject.posY - e.clientY
        g.updateDirectionArrow(diffX, diffY)
    })
}
