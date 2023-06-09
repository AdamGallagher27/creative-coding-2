
let numBlocks = 14;
let chartWidth = 300;
let chartHeight = 400;
let marginLeft = 20;
let marginRight = 5;
let blockGap = 10;
let screenWidth = 500;
let screenHeight = 500;
let blockWidth = (chartWidth - (marginLeft + marginRight) - ((numBlocks - 1) * blockGap)) / numBlocks;
let firstBlockxPos = ((screenWidth - chartWidth) / 2) + marginLeft;
let masterGap = blockWidth + blockGap

function setup() {
  createCanvas(screenWidth, screenHeight);
  background(200);
  angleMode(DEGREES);
  rectMode(CORNER);
  noLoop();
}

function draw() {
  background(200);
  fill(0);
  for (let i = 0; i < numBlocks; i++) {
    push();
    translate(firstBlockxPos + (i * masterGap), 400)
    rect(0, 0, blockWidth, random(-50, -400));
    pop();
  }

}