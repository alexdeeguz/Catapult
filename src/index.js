import Game from './game'
import Object from './object'


let g = new Game()
g.draw()    

window.onload = () => {
        document.addEventListener('click' , e => {
            if (g.userObject.velX === 0) {
                const diffX = g.userObject.posX - e.clientX
                const diffY = g.userObject.posY - e.clientY
                g.updateGame(diffX, diffY)
            }
        })

        document.addEventListener('mousemove', e => {
            const diffX = g.userObject.posX - e.clientX
            const diffY = g.userObject.posY - e.clientY
            g.updateDirectionArrow(diffX, diffY)
        })

        const retry = document.getElementById('retry') 
        const startOver = document.getElementById('start-over')

        retry.addEventListener('click', e => {
            e.stopPropagation()
            const modal = document.getElementById("modal-container");
            modal.classList.add("hidden");
            g.over = false
            g.lives = 1
            g.targets.forEach(target => {
                target.color = 'red'
            })
        })

        startOver.addEventListener('click', e => {
            e.stopPropagation()
            const modal = document.getElementById("modal-container");
            modal.classList.add("hidden");
            g.over = false
            g.targets = []
            g.level = 1
            g.lives = 1
            g.score = 0
            g.addTargets()
        })

    
}


