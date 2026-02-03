// Crescent Moon + Mountains + Moving Clouds
// Click to make the moon spin

let clouds = [];
let moonAngle = 0;
let moonSpin = 0;

function setup() {
  createCanvas(800, 450);
  angleMode(RADIANS);

  // Create a few clouds with random starting positions
  for (let i = 0; i < 6; i++) {
    clouds.push({
      x: random(-200, width),
      y: random(60, 200),
      s: random(0.8, 1.6),
      v: random(0.4, 1.2)
    });
  }
}

function draw() {
  drawSky();
  drawStars();

  // Moon behind mountains (draw moon first)
  drawMoon(width * 0.68, height * 0.25);

  // Moving clouds (some can overlap the moon a bit)
  updateClouds();
  drawClouds();

  // Mountains in front of moon
  drawMountains();

  // Moon spin easing (smoothly slows down)
  moonSpin *= 0.96;
  moonAngle += moonSpin;
}

function mousePressed() {
  // Add a burst of spin each click
  moonSpin += 0.35;
}

// ---------- SCENE LAYERS ----------

function drawSky() {
  // Simple vertical gradient sky
  for (let y = 0; y < height; y++) {
    let t = y / height;
    let r = lerp(10, 30, t);
    let g = lerp(15, 35, t);
    let b = lerp(35, 65, t);
    stroke(r, g, b);
    line(0, y, width, y);
  }
  noStroke();
}

function drawStars() {
  // Subtle twinkly dots (deterministic positions using noise-ish approach)
  randomSeed(7);
  noStroke();
  for (let i = 0; i < 90; i++) {
    let x = random(width);
    let y = random(height * 0.55);
    let a = random(80, 200);
    fill(255, 255, 255, a);
    circle(x, y, random(1, 2.3));
  }
}

function drawMoon(x, y) {
  push();
  translate(x, y);
  rotate(moonAngle);

  // Full moon base
  noStroke();
  fill(235, 235, 220);
  circle(0, 0, 120);

  // "Cut out" part of moon to form crescent by drawing sky-colored circle offset
  // (Use a color close to the sky at that height)
  fill(18, 22, 45);
  circle(35, -8, 120);

  // Soft highlight
  fill(255, 255, 255, 30);
  arc(-10, -10, 110, 110, -PI * 0.1, PI * 0.9);

  pop();
}

function drawMountains() {
  noStroke();

  // Back ridge
  fill(25, 28, 40);
  beginShape();
  vertex(0, height * 0.65);
  vertex(width * 0.10, height * 0.55);
  vertex(width * 0.20, height * 0.62);
  vertex(width * 0.33, height * 0.50);
  vertex(width * 0.46, height * 0.64);
  vertex(width * 0.60, height * 0.52);
  vertex(width * 0.72, height * 0.63);
  vertex(width * 0.86, height * 0.54);
  vertex(width, height * 0.66);
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  // Front ridge with sharper peaks
  fill(12, 14, 22);
  beginShape();
  vertex(0, height * 0.78);
  vertex(width * 0.12, height * 0.60);
  vertex(width * 0.22, height * 0.76);
  vertex(width * 0.34, height * 0.58);
  vertex(width * 0.46, height * 0.80);
  vertex(width * 0.58, height * 0.62);
  vertex(width * 0.70, height * 0.81);
  vertex(width * 0.84, height * 0.59);
  vertex(width, height * 0.82);
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  // Ground fog band
  fill(255, 255, 255, 10);
  rect(0, height * 0.82, width, height * 0.18);
}

// ---------- CLOUDS ----------

function updateClouds() {
  for (let c of clouds) {
    c.x += c.v;
    if (c.x > width + 220) {
      c.x = -220;
      c.y = random(60, 200);
      c.s = random(0.8, 1.6);
      c.v = random(0.4, 1.2);
    }
  }
}

function drawClouds() {
  for (let c of clouds) {
    drawCloud(c.x, c.y, c.s);
  }
}

function drawCloud(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  noStroke();

  // Soft cloud
  fill(255, 255, 255, 90);
  ellipse(0, 0, 110, 45);
  ellipse(-35, 5, 65, 35);
  ellipse(35, 8, 70, 32);
  ellipse(-10, -12, 75, 40);

  // Slight darker underside
  fill(220, 230, 255, 45);
  ellipse(10, 12, 95, 28);

  pop();
}
