//Ricardo Velasquez
//Light & Materials

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
  directionalLight(0, 255, 0, -1, 1, -1);
  pointLight(255, 255, 0, 100, -250, 75);
  ambientMaterial(255);
  translate(350, -200, 0);
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
  noStroke();
  directionalLight(0, 0, 255, 1, 1, -3);
  ambientMaterial(255);
  translate(-340, 0, 0);
  rotateZ(angle * 0.1);
  rotateX(angle * 0.5);
  rotateY(angle * 1.5);
  sphere(75);
  pop();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  push();
  noStroke();
  pointLight(255, 0, 0, -50, -100, 50);
  specularMaterial(255);
  translate(-150, -0, 0);
  rotateZ(angle * 0.1);
  rotateX(angle * 0.5);
  rotateY(angle * 1.5);
  torus(45, 30);
  pop();

  angle += 0.05;

}
