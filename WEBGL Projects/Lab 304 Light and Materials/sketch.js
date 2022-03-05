//Ricardo Velasquez
//3D Shapes

let angle;

function setup() {
  var cnv = createCanvas(900, 650, WEBGL);
  cnv.position((windowWidth - width) / 2, 30);

  angle = random(TWO_PI)

}

function draw(){
  background(175);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  push();
  normalMaterial();
  translate(-340, -200, 0);
  rotateZ(angle * 0.1);
  rotateX(angle * 0.5);
  rotateY(angle * 1.5);
  box(100);
  pop();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  push();
  ambientLight(255);
  ambientMaterial(255);
  translate(-150, -200, 0);
  rotateZ(angle * 0.1);
  rotateX(angle * 0.5);
  rotateY(angle * 1.5);
  sphere(75);
  pop();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  push();
  noStroke();
  ambientLight(0, 0, 255);
  ambientMaterial(255);
  translate(20, -200, 0);
  rotateZ(angle * 0.1);
  rotateX(angle * 0.5);
  rotateY(angle * 1.5);
  sphere(75);
  pop();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  push();
  pointLight(255, 255, 0, 100, -250, 75);
  ambientMaterial(255);
  translate(180, -200, 0);
  rotateZ(angle * 0.1);
  rotateX(angle * 0.5);
  rotateY(angle * 1.5);
  cylinder(50, 100);
  pop();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  push();
  ambientLight(255);
  ambientMaterial(255);
  translate(-150, -200, 0);
  rotateZ(angle * 0.1);
  rotateX(angle * 0.5);
  rotateY(angle * 1.5);
  sphere(75);
  pop();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  push();
  ambientLight(255);
  ambientMaterial(255);
  translate(-150, -200, 0);
  rotateZ(angle * 0.1);
  rotateX(angle * 0.5);
  rotateY(angle * 1.5);
  sphere(75);
  pop();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  push();
  ambientLight(255);
  ambientMaterial(255);
  translate(-150, -200, 0);
  rotateZ(angle * 0.1);
  rotateX(angle * 0.5);
  rotateY(angle * 1.5);
  sphere(75);
  pop();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  push();
  ambientLight(255);
  ambientMaterial(255);
  translate(-150, -200, 0);
  rotateZ(angle * 0.1);
  rotateX(angle * 0.5);
  rotateY(angle * 1.5);
  sphere(75);
  pop();

  angle += 0.05;

}
