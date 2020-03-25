import Object from './object'
import Target from './target'

class Game {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight * 0.8;
        this.gravity = 0.5
        this.userObject = new Object()
        this.targets = []
        this.level = 1
        this.lives = 5
        this.score = 0
        this.userDirX = 0
        this.userDirY = 0
        this.arrowX = this.userObject.posX + 10
        this.arrowY = this.userObject.posY + 10

        this.addTargets()
    }

    allTargetsHit() {
        for (let i = 0; i < this.targets.length; i++) {
            if (this.targets[i].color === 'red') {
                return false
            }
        }
        return true
    }

    detectCollision() {
        for (let i = 0; i < this.targets.length; i++) {
            let target = this.targets[i]
            if (this.userObject.posX > (target.posX - target.radius - 10) && this.userObject.posX < (target.posX + target.radius + 10)
                && this.userObject.posY > (target.posY - target.radius - 10) && this.userObject.posY < (target.posY + target.radius + 10) && target.color === 'red') {
                this.userObject.posX = target.posX
                this.userObject.posY = target.posY
                target.color = 'green'
                this.score++
                return true
            }
        }
        return false
    }

    missed() {
        if (this.userObject.posX < 0 || this.userObject.posX > this.canvas.width || this.userObject.posY > this.canvas.height) {
            return true
        }
        return false
    }

    addTargets() {
        for (let i = 0; i < this.level; i++) {
            this.targets.push(new Target())
        }
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.beginPath();
        this.ctx.arc(this.userObject.posX,this.userObject.posY, this.userObject.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'lightgray';
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(this.userObject.posX, this.userObject.posY);
        this.ctx.lineTo(this.arrowX, this.arrowY);
        this.ctx.strokeStyle = 'white';
        this.ctx.stroke();

        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = 'white'
        this.ctx.fillText(`LIVES: ${this.lives}`, 10, 50);
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = 'white'
        this.ctx.fillText(`SCORE: ${this.score}`, 10, 90);

        this.targets.forEach(target => {
            this.ctx.beginPath();
            this.ctx.arc(target.posX, target.posY, target.radius, 0, 2 * Math.PI);
            this.ctx.fillStyle = target.color;
            this.ctx.fill();
            this.ctx.stroke();
        })
    }

    allObjects() {
        return [].concat(this.targets, this.userObject)
    }

    updateGame(vx, vy) {
        const updateGame = setInterval(() => {
            // stop object if it hit a target
            if (this.detectCollision()) {
                vx = 0
                vy = 0
                clearInterval(updateGame)
            }
            this.userObject.posX += vx * .1
            this.userObject.posY += vy * .1
            // gravity if object is moving
            if (vx !== 0) {
                vy += 3
            }
            this.draw()

            if (this.allTargetsHit()) {
                this.reset()
                this.nextLevel()
                this.addTargets()
                clearInterval(updateGame)
                this.draw()
            }

            if (this.missed()) {
                this.lives--
                vx = 0
                vy = 0
                this.userObject.posX = window.innerWidth / 2
                this.userObject.posY = window.innerHeight / 2
                clearInterval(updateGame)
            }
            
        }, 1000/40);
    }

    reset() {
        this.targets = []
        this.userObject.posX = window.innerWidth / 2
        this.userObject.posY = window.innerHeight / 2
    }

    nextLevel() {
        this.level++
    }

    updateDirectionArrow(vx, vy) {
            this.arrowX = this.userObject.posX + vx
            this.arrowY = this.userObject.posY + vy
            this.draw()
    }
}


export default Game