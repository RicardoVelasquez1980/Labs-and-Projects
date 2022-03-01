//Ricardo Velasquez
//Game Of Life

let cols = 20, rows = cols;
let cellWidth, cellHeight;

let lifeCells = [];

function setup() {
  cnv = createCanvas(650, 650);
  cnv.position((windowWidth - width) / 2, 15);
  background(77);//Get Rid Of The Change From White To Color In Draw Ever Refresh#####

  cellWidth = width / cols;
  cellHeight = cellWidth;

  runLoadLifeCells('LOAD');

}

function draw() {
  background(152);

  runLoadLifeCells('RUN');

}

function mousePressed(){
  for (let x = 0; x < lifeCells.length; x++){
    for (let y = 0; y < lifeCells[x].length; y++){
      if (lifeCells[x][y].mouseOverCell && !lifeCells[x][y].alive){
        lifeCells[x][y].alive = true;

      } else if (lifeCells[x][y].mouseOverCell && lifeCells[x][y].alive){
        lifeCells[x][y].alive = false;

      }

    }

  }

}

//Start Function runoadLifeCells##########
function runLoadLifeCells(typ){
  if (typ === 'LOAD'){
    for (let x = 0; x < cols; x++){
      lifeCells[x] = [];

      for (let y = 0; y < rows; y++){
        lifeCells[x][y] = new LifeCell(x * cellWidth, y * cellHeight);
      }

    }

  } else if (typ === 'RUN'){
    for (let x = 0; x < lifeCells.length; x++){
      for (let y = 0; y < lifeCells[x].length; y++){
        lifeCells[x][y].run();

      }

    }

  }

}
//End Function runLoadLifeCells##########
