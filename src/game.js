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
        this.level = 10
        this.userDirX = 0
        this.userDirY = 0
        this.arrowX = this.userObject.posX + 10
        this.arrowY = this.userObject.posY + 10

        this.addTargets()
    }

    detectCollision() {
        for (let i = 0; i < this.targets.length; i++) {
            let target = this.targets[i]
            if (this.userObject.posX > (target.posX - target.radius - 10) && this.userObject.posX < (target.posX + target.radius + 10)
                && this.userObject.posY > (target.posY - target.radius - 10) && this.userObject.posY < (target.posY + target.radius + 10) && target.color === 'red') {
                this.userObject.posX = target.posX
                this.userObject.posY = target.posY
                target.color = 'green'
                return true
            }
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

    updateObjectPos(vx, vy) {
        const updateObject = setInterval(() => {
            if (this.detectCollision()) {
                vx = 0
                vy = 0
                clearInterval(updateObject)
            }
            this.userObject.posX += vx * .1
            this.userObject.posY += vy * .1
            // vy += 5
            this.draw()


            if (this.userObject.posY > this.canvas.height) {
                if (vy < 0 && vy > -2) {
                    vy = 0
                }
                this.userObject.posY = this.canvas.height - this.userObject.rad
            }

            if (Math.abs(vx) < 1) {
                vx = 0;
            }
            
        }, 1000/40);
        
    }

    updateDirectionArrow(vx, vy) {
        // if (vx < 50 &&  vx > -50 && vy < 50 && vy > -50) {
        //     console.log(vx)
            this.arrowX = this.userObject.posX + vx
            this.arrowY = this.userObject.posY + vy
        // }
        this.draw()
    }
}


export default Game