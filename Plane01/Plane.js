class Plane {
    constructor() {
        // this.apWidth = random(40, 50)
        // this.apHeight = random(20, 50)
        // this.apTail = random(5, 25)
        this.speedX = random(-5, 5)
        this.speedY = random(-5, 5)
        this.posX = random(0, 500)
        this.posY = random(0, 500)
        
        this.startX = this.posX
        this.startY = this.posY
    
        this.altitude = Math.random() >= 0.5 ? 1000 : 2000
        this.size = random(0.3, 1)
        this.rotation = atan2(this.speedY, this.speedX) + 90
    }

    render() {
        push()
        beginShape()
        translate(this.posX, this.posY)
        rotate(this.rotation)
        scale(this.size)
        vertex(0, 0)
        vertex(apWidth / 2, apTail)
        vertex(0, -apHeight)
        vertex(-(apWidth / 2), apTail)
        vertex(0, 0)
        endShape()
        pop()
    }

    fly() {



        this.posX += this.speedX
        this.posY += this.speedY

        // right side
        if(this.posX > screenWidth){
            this.posY = random(100, screenHeight - 100)
            this.posX = 0
            return
        }

        // left side
        if(this.posX < 0){
            this.posY = random(100, screenHeight - 100)
            this.posX = screenHeight
            return
        }

        // top
        if(this.posY < 0) {
            this.posY = screenHeight
            this.posX = random(100, screenWidth - 100)
            return
        }

        // bottom
        if(this.posY > screenHeight){
            this.posY = 0
            this.posX = random(100, screenWidth - 100)
            return
        }
        
       
    }
}