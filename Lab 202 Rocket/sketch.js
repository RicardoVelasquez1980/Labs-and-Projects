//Ricardo Velasquez
//Lab 202 Rocket

let rocket, planet;


function setup() {
  cnv = createCanvas(windowWidth - 20, windowHeight - 60);
  cnv.position((windowWidth - width) / 2, 30);

  test = createVector(mouseX, mouseY);

  planet = new Planet();

}

function draw() {
  background(245);


  test.x = mouseX;
  test.y = mouseY;


  planet.run();

}
