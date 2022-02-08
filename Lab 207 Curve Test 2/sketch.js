//Ricardo Velasquez
//Lab 207 Curve Test 2

let sun, planets = [], moons = [];

function setup() {
  cnv = createCanvas(windowWidth - 20, windowHeight - 60);
  cnv.position((windowWidth - width) / 2, 30);

  sun = new Sun();
  loadPlanets(1);
  // loadMoons(1);

}

function draw() {
  background(0);

  sun.run();

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
