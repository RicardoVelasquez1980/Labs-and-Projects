//Ricardo Velasquez
//Lab 104 FlowField

//Little Bro Chose The Colors, DONT CHANGE##########

let lineIndicator = [], balls = [];
let gridWidth = 40, gridHeight = 40;
let cols, rows;
let xOff = 0, yOff = 0, zOff = 0;
let orangeSmoke;

let pause = true;

let brushSize, brushSpeed, flowSpeed, flowChange;

function preload(){
  orangeSmoke = loadImage('OrangeSmoke.png');

}

function setup() {
  var cnv = createCanvas(orangeSmoke.width * 2, orangeSmoke.height);
  cnv.position((windowWidth - width) / 2, 30);

  background(0);
  // image(orangeSmoke, 0, 0);

  cols = (width / 2) / gridWidth;
  rows = height / gridHeight;

  loadIndicator(cols, rows);//Line Indicators Are Generated#####

  loadBalls(floor(random(4, 200)));//Balls Are Generated#####

  brushSize = createSlider(1, 8, 4, 0.1);//Brush Size Slider#####
  brushSpeed = createSlider(1, 16, 8, 0.1);//Brush Speed Slider#####
  flowSpeed = createSlider(0, 0.01, 0.0003, 0.00001);//FlowField Speed Slider#####
  flowChange = createSlider(0, 1, 0, 0.01);//FlowField Change Slider#####
  brushSize.position(width * 1.15, 30);
  brushSpeed.position(width * 1.15, 80);
  flowSpeed.position(width * 1.15, 130);
  flowChange.position(width * 1.15, 180);

  //Text#####
  let brushSizeText = createP('Brush Size');
  brushSizeText.position(width * 1.15, 0);

  let brushSpeedText = createP('Brush Speed');
  brushSpeedText.position(width * 1.15, 50);

  let flowSpeedText = createP('FlowField Speed');
  flowSpeedText.position(width * 1.15, 100);

  let flowChangeText = createP('FlowField Change');
  flowChangeText.position(width * 1.15, 150);

  // frameRate(1);//USED FOR TESTING ONLY, COMMENT OUT WHEN NOT TESTING%%%%%%%%%%%%
}

function draw() {
    if (pause){
    // background(0);
    image(orangeSmoke, 0, 0);

    // loadGrid(cols, rows);//Cell Grid Is Generated And Shown#####

    // for (let i = 0; i < cols; i++){//Line Indicators Are Shown#####
    //   for (let j = 0; j < rows; j++){
    //     lineIndicator[i][j].run();
    //   }
    // }

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
      let x = (i * gridWidth) + (gridWidth / 2) + (width / 2);
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

//Start Function loadGrid##########
function loadGrid(c, r){//Takes In cols(c) and rows(r)#####
  for (let i = 0; i < c; i++){
    for (let j = 0; j < r; j++){
      push();
      noFill();
      stroke(255, 255, 255, 75);
      strokeWeight(1);
      translate(i * gridWidth + (width / 2), j * gridHeight);
      rect(0, 0, gridWidth, gridHeight);
      pop();
    }
  }
}
//End Function loadGrid##########
