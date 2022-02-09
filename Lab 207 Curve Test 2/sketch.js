//Ricardo Velasquez
//Lab 207 Curve Test 2

let sun, planets = [], moons = [];

function setup() {
  // cnv = createCanvas(windowWidth - 20, windowHeight - 60);
  cnv = createCanvas(windowWidth - 20, 2000);
  cnv.position((windowWidth - width) / 2, 30);

  sun = new Sun();
  loadPlanets(1);
  loadMoons(1);

  // frameRate(7.5);

}

function draw() {
  background(0);

  sun.run();

  for (let i = 0; i < planets.length; i++){
    planets[i].run();

  }

  for (let i = 0; i < moons.length; i++){
    moons[i].run();

  }


  //TEMP: Area In Which Planets Spawn
  push();
  noFill();
  stroke(255, 0, 0);
  ellipse(width / 2, height / 2, 90 + planets[0].dia);
  stroke(0, 255, 0);
  ellipse(width / 2, height / 2, 1200);
  pop();

}

//Start Function loadPlanets##########
function loadPlanets(qty){
  for (let i = 0; i < qty; i++){
    planets[i] = new Planet();

  }

}
//End Function loadPlanets##########

//Start Function loadMoons##########
function loadMoons(qty){
  for (let i = 0; i < qty; i++){
    moons[i] = new Moon(floor(random(planets.length)));//Selects A Random Planet To Orbit#####

  }

}
//End Function loadMoons##########
