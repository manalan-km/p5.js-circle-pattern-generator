let x,y;
let r,g,b;

let radius = 30;
let alpha;

function setup() {
  //dynamically creates canvas based on window width and
  //height
  createCanvas(windowWidth, windowHeight);
  //creates a black backgound
  background(0);
}

function draw() {
  /*
  Initialising x,y,r,g,b,radius and alpha values
  */
  x = random(windowWidth);
  y = random(windowHeight);

  r =  random(255);
  g =  random(255);
  b =  random(255);

  
  alpha = random(80,150);
  //sets up the fill of the circle
  fill(r,g,b,alpha);
  //makes the circle not have stroke
  noStroke();
  //draws the circle
  circle(x,y,radius);
}


