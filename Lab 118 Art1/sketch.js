//Ricardo Velasquez
//Lab 104 FlowField

//Little Bro Chose The Colors, DONT CHANGE##########

let lineIndicator = [], balls = [];
let gridWidth = 40, gridHeight = 40;
let cols, rows;
let xOff = 0, yOff = 0, zOff = 0;

let pause = true;

function setup() {
  var cnv = createCanvas(1400, 680);
  cnv.position((windowWidth - width) / 2, 30);

  background(0);

  cols = width / gridWidth;
  rows = height / gridHeight;

  loadIndicator(cols, rows);//Line Indicators Are Generated#####

  loadBalls(floor(random(4, 40)));//Balls Are Generated#####

  // frameRate(15);//USED FOR TESTING ONLY, COMMENT OUT WHEN NOT TESTING%%%%%%%%%%%%
}

function draw() {
    if (pause){
    // background(0);

    // loadGrid(cols, rows);//Cell Grid Is Generated And Shown#####

    for (let i = 0; i < cols; i++){//Line Indicators Are Shown#####
      for (let j = 0; j < rows; j++){
        lineIndicator[i][j].run();
      }
    }

    for ( let i = 0; i < balls.length; i++){//Balls Are Shown#####
      balls[i].run();
    }

    indicatorAngleUpdate();
  }
}

function keyPressed(){
  if (keyCode == 80){
    if (pause === true){
      pause = false;
    } else if (pause === false){
      pause = true;
    }
  }
}

//Start Function loadIndicator##########
function loadIndicator(c, r){//Takes In cols(c) And rows(r)#####
  for (let i = 0; i < c; i++){//Goes Through Each Column#####
    lineIndicator[i] = [];
    for (let j = 0; j < r; j++){//Go Through Each Row Of The Column#####
      let x = (i * gridWidth) + (gridWidth / 2);
      let y = (j * gridHeight) + (gridHeight / 2);
      lineIndicator[i][j] = new Indicator(x, y);
    }
  }
}
//End Function loadIndicator##########

//Start Function indicatorAngleUpdate##########
function indicatorAngleUpdate(){
  yOff = 0;
  for (let i = 0; i < cols; i++){
    xOff = 0;
    for (let j = 0; j < rows; j++){
      lineIndicator[i][j].angle = noise(xOff, yOff, zOff) * TWO_PI;//Updateing Noise#####
      xOff += 0.1;
    }
    yOff += 0.1;
    zOff += 0.0003;//Orig 0.0001#####
  }
}
//End Function indicatorAngleUpdate##########

//Start Function loadBalls##########
function loadBalls(qty){//Takes In A Quantity#####
  for (let i = 0; i < qty; i++) balls.push(new Ball());//Single Line For Loop#####
}
//End Function loadBalls##########

//Start Function loadGrid##########
function loadGrid(c, r){//Takes In cols(c) and rows(r)#####
  for (let i = 0; i < c; i++){
    for (let j = 0; j < r; j++){
      push();
      noFill();
      stroke(255, 255, 255, 75);
      strokeWeight(1);
      translate(i * gridWidth, j * gridHeight);
      rect(0, 0, gridWidth, gridHeight);
      pop();
    }
  }
}
//End Function loadGrid##########
