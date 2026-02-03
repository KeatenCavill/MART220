
let cloudx = 0
let cloudy = 200

let moonangle= 0
let moonspin = false
  
function setup() {
  createCanvas(400, 400);
}

function draw() {
  

  background(8,17,59);
  
  if (moonspin){
    moonangle += 0.05
  }
  
  push();
  translate(80,80)
  rotate(moonangle)
  
  fill(255,255,111);
  circle(80,80,100);
  fill(8,17,59);
  circle(110,60,100);
  pop();
  
  fill(0,0,0);
  
  triangle(0,400,50,200,100,400);
  
  triangle(100,400,120,250,200,400);
  
  triangle(200,400,250,250,300,400);
  
  triangle(300,400, 380,345, 400,400);
  
  fill(74,74,74);
  
  triangle(50,400,90,300,150,400);
  
  triangle(150,400,200,300,300,400)
  
  triangle(300,400,310,280,360,400)

  cloudx += 2;              
  cloudy += random(-1, 1);
  cloudy = constrain(cloudy, 120, 260);

  if (cloudx > 400){
    
  cloudx = 0;
  }

  cloud(cloudx, cloudy)
  
  
  
  fill(255,255,255)
  text("Keaten", 350, 389)
  textSize(20)
  text("The Moon and Mountains", 165, 20)

}

function cloud(x,y){
  let locationx = x
  let locationy = y
  fill(255,255,255)
  noStroke()
  circle(locationx+5,locationy+40,50)
  circle(locationx+15,locationy+20,50)
  circle(locationx+5,locationy+5,50)
  circle(locationx+40, locationy+20,50)
}

function mousePressed(){
  moonspin = !moonspin
}