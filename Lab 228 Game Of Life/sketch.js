 //Ricardo Velasquez
//Game Of Life

//+++++++++++++++++++++++++++++++++++++smiley face button!!!!!!!

let cols = 50, rows = cols;
let cellWidth, cellHeight;

let lifeCells = [];

let pause = true;

function setup() {
  cnv = createCanvas(650, 650);
  cnv.position((windowWidth - width) / 2, 15);
  background(152);//Get Rid Of The Change From White To Color In Draw Ever Refresh#####

  cellWidth = width / cols;
  cellHeight = cellWidth;

  runLoadLifeCells('LOAD');

  frameRate(7.5);

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

}

//Start Function runoadLifeCells##########
function runLoadLifeCells(typ){
  if (typ === 'LOAD'){
    for (let y = 0; y < rows; y++){
      lifeCells[y] = [];//Declaring 2D Array#####

      for (let x = 0; x < cols; x++){
        lifeCells[y][x] = new LifeCell(x * cellWidth, y * cellHeight, x, y);

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
