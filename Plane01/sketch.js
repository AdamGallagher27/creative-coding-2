
const screenWidth = 1000;
const screenHeight = 1000;


const apWidth = 50
const apHeight = 70
const apTail = 30
const rotAngle = 90
let planes = []

let airField = new AirField

function setup() {
  createCanvas(screenWidth, screenHeight);
  background(200);
  angleMode(DEGREES);


  for(let i = 0; i < 1; i++) {
    planes.push(new Plane())
  }
  
  airField.generatePlanes(4)
  console.log(airField)
}

function draw() {
  background(0);

  airField.flyPlanes()

  // first plane
  // push()
  
  // beginShape()
  //   translate(250, 250)
  //   rotate(rotAngle)
  //   scale(apScale)
  //   vertex(0, 0)
  //   vertex(apWidth / 2, apTail)
  //   vertex(0, -apHeight)
  //   vertex(-(apWidth / 2), apTail)
  //   vertex(0, 0)
  // endShape()

  // pop()

  // planes.forEach(plane => {
  //   plane.fly()
  //   plane.render()
  // });

}