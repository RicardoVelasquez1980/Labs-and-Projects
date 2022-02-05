//Ricardo Velasquez
//Lab 202 Rocket

let rocket, planet, sun;

function setup() {
  cnv = createCanvas(windowWidth - 20, windowHeight - 60);
  cnv.position((windowWidth - width) / 2, 30);

  sun = new Sun();

  planet = new Planet();

  rocket = new Rocket();

  // frameRate(15);

}

function draw() {
  background(0);

  sun.run();
  if (!rocket.death){
    rocket.run();

  } else {
    push();
    noStroke();
    fill(150, 10, 10);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(200);
    text('DEAD!', width / 2, height / 2);
    pop();
  }

  planet.run();

}
