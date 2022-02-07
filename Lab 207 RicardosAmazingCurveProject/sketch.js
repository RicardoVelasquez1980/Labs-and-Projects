//Ricardo Velasquez
//Lab 202 RicardosAmazingCurveProject

let swiggle;

let lftCtrlChng, rghtCtrlChng;

let resetChng, resetBezier;

function setup() {
  cnv = createCanvas(1600, 1000);
  cnv.position((windowWidth - width) / 2 + 100, 30);

  swiggle = new Swiggle();

  lftCtrlChng = createSlider(-5, 5, 0, 0.1);
  rghtCtrlChng = createSlider(-5, 5, 0, 0.1);
  lftCtrlChng.position(125, 90);
  rghtCtrlChng.position(125, 120);

  resetChng = createButton('RESET CHANGE');
  resetChng.position(125, 30);
  resetChng.mousePressed(resetChange);

  resetBezier = createButton('RESET CURVE');
  resetBezier.position(125, 180);
  resetBezier.mousePressed(resetCurve);

}

function draw() {
  background(0);

  swiggle.run();

}

//Start Function resetChange##########
function resetChange(){
  lftCtrlChng.value(0);
  rghtCtrlChng.value(0);

}
//End Function resetChange##########

//Start Function resetCurve##########
function resetCurve(){
  swiggle.leftCtrlPoint = createVector(random((width * 0.25, width * 0.5)), height / 2);
  swiggle.rightCtrlPoint = createVector(random((width * 0.5, width * 0.75)), height / 2);

}
//End Function resetCurve##########
