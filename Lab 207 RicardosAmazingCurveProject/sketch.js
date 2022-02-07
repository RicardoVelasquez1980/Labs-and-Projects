//Ricardo Velasquez
//Lab 202 RicardosAmazingCurveProject

let swiggles = [];

function setup() {
  cnv = createCanvas(windowWidth - 20, windowHeight - 60);
  cnv.position((windowWidth - width) / 2, 30);

  loadSwiggle(1);

}

function draw() {
  background(0);

}

function loadSwiggle(qty){
  for (let i = 0; i < qty; i++){
    swiggles[i] = new Swiggle();
  }
}
