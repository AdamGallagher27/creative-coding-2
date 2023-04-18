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

        if(this.posX > screenWidth){
            console.log('right')
            this.posY = (map(this.posY, 0, 500, 500, 0 ) )
            this.posX = 0
            console.log(this.posX)
            return
        }

        if(this.posX < 0){
            // console.log('left')
            this.posY = map(this.posY, 0, 500, 500, 0 )
            this.posX = screenWidth - 5
            return
        }

        if(this.posY > screenHeight){
            // console.log('bottom')
            this.posX = -(map(this.posX, 0, 500, 500, 0 ) )
            this.posY = screenHeight - 5
            return
        }

        if(this.posY < 0){
            // console.log('top')
            this.posX = -(map(this.posX, 0, 500, 500, 0 ) )
            this.posY = 5 
            return
        }
    }
}