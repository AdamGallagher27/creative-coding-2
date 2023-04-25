
const screenWidth = 1000;
const screenHeight = 1000;


const apWidth = 50
const apHeight = 70
const apTail = 30
const rotAngle = 90

let airField = new AirField

function setup() {
  createCanvas(screenWidth, screenHeight);
  background(200);
  angleMode(DEGREES);
  
  airField.generatePlanes(4)
  console.log(airField)
}

function draw() {
  background(0);

  airField.flyPlanes()

}