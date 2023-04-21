

let screenWidth = 500;
let screenHeight = 500;
let balls = []

function setup() {
  createCanvas(screenWidth, screenHeight);
  background(200);
  angleMode(DEGREES);

  for(let i = 0; i < 10; i++) {
    let randomNum = floor(random(0, 2))
    if(randomNum === 0) {
      balls.push(new Ball)
    }
    else{
      balls.push(new TennisBall)
    }
  }

  
}

function draw() {
  background(200);
  balls.forEach(ball => {
    ball.render()
  });

}