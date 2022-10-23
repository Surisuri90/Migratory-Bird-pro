
function setup() {
  //createCanvas(100, 100, WEBGL);
  describe('quad with a texture, mapped using normalized coordinates');
  const myCanvas = createCanvas(800,800);
  //Set the parent of the canvas to an exisitng html element's id value
  myCanvas.parent("canvas");
  //background(240);}

}

function draw() {
  texture(img);
  textureMode(NORMAL);
  beginShape();
  vertex(-50, -50, 0, 0);
  vertex(50, -50, 1, 0);
  vertex(50, 50, 1, 1);
  vertex(-50, 50, 0, 1);
  endShape();
}

function draw() {
   
    background(3000.2061);
    image(img,0,0,3000,2061);
    mouseMoved();
   
}

function mouseMoved() {
    strokeWeight(1.5);
  stroke(20,20,80,20);
 
    ellipse(mouseX, mouseY, 70, 70);}