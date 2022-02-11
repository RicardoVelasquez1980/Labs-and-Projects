//Ricardo Velasquez
//Lab 207 Curve Test 2

let sun, planets = [], moons = [], curvatures = [];

function setup() {
  cnv = createCanvas(windowWidth - 20, windowHeight - 60);
  cnv.position((windowWidth - width) / 2, 30);

  sun = new Sun();
  loadPlanets(4);

  loadMoons(8);

  // loadCurves(1);

  // frameRate(7.5);

}

function draw() {
  background(0);

  sun.run();

  for (let i = 0; i < planets.length; i++){//Run Planets#####
    planets[i].run();

  }

  for (let i = 0; i < moons.length; i++){//Run Moons#####
    moons[i].run();

  }

}

//Start Function loadPlanets##########
function loadPlanets(qty){//Make Planets#####
  for (let i = 0; i < qty; i++){
    planets[i] = new Planet();

  }

}
//End Function loadPlanets##########

//Start Function loadMoons##########
function loadMoons(qty){//Make Moons#####
  for (let i = 0; i < qty; i++){
    moons[i] = new Moon(floor(random(planets.length)));//Selects A Random Planet To Orbit#####

  }

}
//End Function loadMoons##########
