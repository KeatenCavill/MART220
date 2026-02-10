let cloudx = 0;
let cloudy = 200;

let moonAngle = 0;
let moonSpin = false;

let cloudImg, moonImg, townImg;
let gameFont;

function preload() {
  cloudImg = loadImage("../Week 4/images/cloud.png");
  moonImg = loadImage("../Week 4/images/moon.png");
  townImg = loadImage("../Week 4/images/town.png");
  gameFont = loadFont("../Week 4/assets/PressStart2P-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);
  textFont(gameFont);

  setInterval(moveCloud, 50);
}

function moveCloud() {
  cloudx += 2;
  cloudy += random(-1, 1);
  cloudy = constrain(cloudy, 120, 260);

  if (cloudx > width + 140) cloudx = -140;
}

function draw() {
  background(8, 17, 59);

  if (moonSpin) moonAngle += 0.05;

  push();
  translate(80, 80);
  rotate(moonAngle);
  imageMode(CENTER);
  image(moonImg, 0, 0, 190, 140);
  pop();

  fill(50);
  triangle(0, 400, 50, 200, 100, 400);
  triangle(100, 400, 120, 250, 200, 400);
  triangle(200, 400, 250, 250, 300, 400);
  triangle(300, 400, 380, 345, 400, 400);

  fill(74);
  triangle(50, 400, 90, 300, 150, 400);
  triangle(150, 400, 200, 300, 300, 400);
  triangle(300, 400, 310, 280, 360, 400);

  imageMode(CORNER);
  image(cloudImg, cloudx, cloudy, 140, 80);

  let townHeight = 90;
  image(townImg, 0, height - townHeight, width, townHeight);

  fill(255);
  textSize(12);
  text("The Moon and Mountains", 20, 20);
  text("Keaten", width - 80, height - 10);
}

function mousePressed() {
  moonSpin = !moonSpin;
}
