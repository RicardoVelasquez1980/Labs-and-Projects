//Ricardo Velasquez
//Lab 207 Curve Test 2

let sun, planets = [], moons = [], curvatures = [];

function setup() {
  cnv = createCanvas(windowWidth - 20, windowHeight - 60);
  cnv.position((windowWidth - width) / 2, 30);

  background(0);

  sun = new Sun();
  loadPlanets(ceil(random(40)));

  loadMoons(ceil(random(80)));

  loadCurves(ceil(random(10)));

  // frameRate(7.5);

}

function draw() {
  // background(0);

  sun.run();

  for (let i = 0; i < planets.length; i++){//Run Planets#####
    planets[i].run();

  }

  for (let i = 0; i < moons.length; i++){//Run Moons#####
    moons[i].run();

  }

  for (let i = 0; i < curvatures.length; i++){//Run Curvatures#####
    curvatures[i].run();

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

//Start Function loadCurves##########
function loadCurves(qty){
  for (let i = 0; i < qty; i++){
    let usedPlanet1 = floor(random(planets.length));
    let usedPlanet2 = floor(random(planets.length));
    let usedMoon1 = floor(random(moons.length));
    let usedMoon2 = floor(random(moons.length));

    curvatures[i] = new Curvature(usedPlanet1, usedPlanet2, usedMoon1, usedMoon2);

  }

}
//End Function loadCurves##########
