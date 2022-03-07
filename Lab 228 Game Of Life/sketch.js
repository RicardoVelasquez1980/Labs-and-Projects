//Ricardo Velasquez
//Game Of Life

//+++++++++++++++++++++++++++++++++++++smiley face button!!!!!!!

let cols, rows;
let cellWidth, cellHeight;

let lifeCells = [];

let pause;
let reset = 82;

let speed;

function setup() {
  cnv = createCanvas(windowHeight, windowHeight, WEBGL);
  cnv.position((windowWidth - width) / 2, 15);
  background(152);//Get Rid Of The Change From White To Color In Draw Ever Refresh#####

  pause = true;

  let sizeTxt = createP("Size");
  sizeTxt.position((windowWidth - width) / 2 - 90, 0)
  cols = createSlider(5, 400, 25, 1);
  cols.position((windowWidth - width) / 2 - 150, 30);
  cols.mouseReleased(lifeCellRemake);

  rows = cols.value();;

  cellWidth = width / cols.value();
  cellHeight = cellWidth;

  lifeCells = [];

  runLoadLifeCells('LOAD');


  let speedTxt = createP("Speed");
  speedTxt.position((windowWidth - width) / 2 - 90, 60);
  speed = createSlider(1, 30, 5, 0.5);
  speed.position((windowWidth - width) / 2 - 150, 90);
  speed.mouseReleased(frameChange);

  frameRate(speed.value());

}

function draw() {
  background(152);

  runLoadLifeCells('RUN');

}

function mousePressed(){
  //Checks For Every Cell In Order To Make The Cell Alive If Used Clicks On Cell#####
  for (let y = 0; y < lifeCells.length; y++){
    for (let x = 0; x < lifeCells[y].length; x++){
      if (lifeCells[y][x].mouseOverCell && !lifeCells[y][x].alive){
        lifeCells[y][x].alive = true;

      } else if (lifeCells[y][x].mouseOverCell && lifeCells[y][x].alive){
        lifeCells[y][x].alive = false;

      }

    }

  }

}

function keyPressed(){
  // console.log(keyCode);
  if (keyCode === 80 && pause === true){
    pause = false;

  } else if (keyCode === 80 && pause === false){
    pause = true;

  }

  if (keyCode === reset){
    removeElements();
    setup();

  }

}

function lifeCellRemake(){
  rows = cols.value();;

  cellWidth = width / cols.value();
  cellHeight = cellWidth;

  lifeCells = [];
  runLoadLifeCells('LOAD');

}

function frameChange(){
  frameRate(speed.value());

}

//Start Function runoadLifeCells##########
function runLoadLifeCells(typ){
  if (typ === 'LOAD'){
    for (let y = 0; y < rows; y++){
      lifeCells[y] = [];//Declaring 2D Array#####

      for (let x = 0; x < cols.value(); x++){
        lifeCells[y][x] = new LifeCell(x * cellWidth - (width / 2), y * cellHeight - (height / 2), x, y);

      }

    }

  } else if (typ === 'RUN'){
    for (let y = 0; y < lifeCells.length; y++){
      for (let x = 0; x < lifeCells[y].length; x++){
        lifeCells[y][x].run();

      }

    }

  }

}
//End Function runLoadLifeCells##########
