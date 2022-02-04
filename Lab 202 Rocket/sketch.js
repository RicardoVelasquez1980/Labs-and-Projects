//Ricardo Velasquez
//Lab 202 Rocket

let rocket, planet;

function setup() {
  cnv = createCanvas(windowWidth - 20, windowHeight - 60);
  cnv.position((windowWidth - width) / 2, 30);

  planet = new Planet();

  rocket = new Rocket();

}

function draw() {
  background(0);

  planet.run();
  rocket.run();

}
