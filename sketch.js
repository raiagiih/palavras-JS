function setup() {
  createCanvas(400, 400);
background("purple");
}

function draw() { 
  fill("pink");
  stroke("white");
    
 if(mouseIsPressed)
  rect(mouseX,mouseY,20,10);
}
