//Ricardo Velasquez
//AP1

//Little Bro Chose The Colors, DONT CHANGE##########

let lineIndicator = [], balls = [], boxes = [];
let gridWidth = 40, gridHeight = 40;
let cols, rows;
let xOff = 0, yOff = 0, zOff = 0;

let pause = false;

let flowSpeed, flowChange, pauseButton, resetButton;

function setup() {
  var cnv = createCanvas(650 * 1.618, 650);
  cnv.position((windowWidth - width) / 2, 30);

  background(0);

  balls = [];
  lineIndicator = [];
  boxes = [];

  cols = width / gridWidth;
  rows = height / gridHeight;

  loadIndicator(cols, rows);//Line Indicators Are Generated#####

  loadBalls(floor(random(80, 200)));//Balls Are Generated#####
  loadBoxes(floor(random(80, 200)));//Balls Are Generated#####

  pauseButton = createButton('PAUSE');
  pauseButton.position((windowWidth - width) / 2 - 125, 230);
  pauseButton.mousePressed(pauseChange);
  resetButton = createButton('RESET');
  resetButton.position((windowWidth - width) / 2 - 125, 260);
  resetButton.mousePressed(setup);
  flowSpeed = createSlider(0, 0.01, 0.0003, 0.00001);//FlowField Speed Slider#####
  flowChange = createSlider(0, 1, 0, 0.01);//FlowField Change Slider#####
  flowSpeed.position((windowWidth - width) / 2 - 150, 130);
  flowChange.position((windowWidth - width) / 2 - 150, 180);

  //Text#####
  let flowSpeedText = createP('FlowField Speed');
  flowSpeedText.position((windowWidth - width) / 2 - 150, 100);

  let flowChangeText = createP('FlowField Change');
  flowChangeText.position((windowWidth - width) / 2 - 150, 150);

  // frameRate(1);//USED FOR TESTING ONLY, COMMENT OUT WHEN NOT TESTING%%%%%%%%%%%%
}

function draw() {
    if (!pause){
    background(0, 0, 0, 15);

    // loadGrid(cols, rows);//Cell Grid Is Generated And Shown#####

    // for (let i = 0; i < cols; i++){//Line Indicators Are Shown#####
    //   for (let j = 0; j < rows; j++){
    //     lineIndicator[i][j].run();
    //   }
    // }

    for ( let i = 0; i < balls.length; i++){//Balls Are Shown#####
      balls[i].run();
    }

    for ( let i = 0; i < boxes.length; i++){//Balls Are Shown#####
      boxes[i].run();
    }

    indicatorAngleUpdate();
  }
}

function pauseChange(){
  // console.log(keyCode);
  if (pause === true){
    pause = false;
  } else if (pause === false){
    pause = true;
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
  yOff = flowChange.value();
  for (let i = 0; i < cols; i++){
    xOff = flowChange.value();
    for (let j = 0; j < rows; j++){
      lineIndicator[i][j].angle = noise(xOff, yOff, zOff) * TWO_PI;//Updateing Noise#####
      xOff += 0.1;
    }
    yOff += 0.1;
    zOff += flowSpeed.value();//Orig 0.0001#####
  }
}
//End Function indicatorAngleUpdate##########

//Start Function loadBalls##########
function loadBalls(qty){//Takes In A Quantity#####
  for (let i = 0; i < qty; i++) balls.push(new Ball());//Single Line For Loop#####
}
//End Function loadBalls##########

//Start Function loadBoxes##########
function loadBoxes(qty){//Takes In A Quantity#####
  for (let i = 0; i < qty; i++) boxes.push(new Box());//Single Line For Loop#####
}
//End Function loadBoxes##########

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
