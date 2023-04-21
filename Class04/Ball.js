
class Ball {
    constructor() {
        this.pos = createVector(random(0, screenWidth), random(0, screenHeight))
    }

    render() {
        noStroke()
        fill(255, 0, 0)
        ellipse(this.pos.x, this.pos.y, 10)
    }
}

class TennisBall extends Ball {
    makeBouncy() {
        console.log('i am bouncy')
    }

    render() {
        noStroke()
        fill(0, 255, 0)
        ellipse(this.pos.x, this.pos.y, 10)
    }
}