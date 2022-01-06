//Ricardo Velasquez
//Lab 104 FlowField

let lineIndicator = [];
let gridWidth = 40, gridHeight = 40;
let cols, rows;

function setup() {
  var cnv = createCanvas(1800, 1040);
  cnv.position((windowWidth - width) / 2, 30);

  cols = windowWidth / gridWidth;
  rows = windowHeight / gridHeight;

  loadIndicator(cols, rows);

}

function draw() {
  background(0);

  loadGrid(cols, rows);

  for (let i = 0; i < lineIndicator.length; i++){
    lineIndicator[i].run();
  }
}

//Start Function loadIndicator##########
function loadIndicator(c, r){
  for (let i = 0; i < c; i++){
    for (let j = 0; j < r; j++){
      let x = (i * gridWidth);
      let y = (j * gridHeight);
      lineIndicator.push(new Indicator(x, y));
    }
  }
}
//End Function loadIndicator##########

//Start Function loadGrid##########
function loadGrid(c, r){
  for (let i = 0; i < c; i++){
    for (let j = 0; j < r; j++){
      push();
      noFill();
      stroke(255);
      strokeWeight(1);
      translate(i * gridWidth, j * gridHeight);
      rect(0, 0, gridWidth, gridHeight);
      pop();
    }
  }
}
//End Function loadGrid##########
