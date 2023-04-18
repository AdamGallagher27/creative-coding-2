
class AirField {
    constructor(){
        this.planes = []
        this.posX = 0
        this.posY = 0
        this.width = 10
        this.height = 20
    }

    generatePlanes(num) {
        for(let i = 0; i < num; i++) {
            this.planes.push(new Plane())
        }
    }

    flyPlanes() {
        this.planes.forEach(plane => {
            plane.fly()
            plane.render()
          });
        
    }

}