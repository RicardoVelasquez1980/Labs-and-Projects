//Ricardo Velasquez
//Lab 1015 2D Array of Cell Objects

//Global Variables#####
let numRows, numCols, cells;

function setup() {
  var cnv = createCanvas(1850, 900);
  cnv.position((windowWidth - width) / 2, 30);
  cells = [];
  numRows = 10;
  numCols = 10;
  loadCell();
}

function draw() {
  background(20);
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      cells[i][j].run();
    }
  }
}

//Start Function loadCell##########
function loadCell() {

  let cellWidth = width / numCols;
  let cellHeight = height / numRows;
  for (let i = 0; i < numRows; i++) {
    cells[i] = [];
    for (let j = 0; j < numCols; j++) {
      cells[i][j] = new Cell(j * cellWidth, i * cellHeight, cellWidth, cellHeight, cellHeight * 0.75);
    }
  }
}

//End Function loadCell##########
