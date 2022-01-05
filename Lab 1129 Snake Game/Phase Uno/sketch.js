//Ricardo Velasquez
//Snake Game
//reese is cool********************************************************

//Global Variables##########
let snake, food, columns, rows, gridWidth, gridHeight;

function setup() {
  var cnv = createCanvas(windowWidth - 20, windowHeight - 60);
  cnv.position((windowWidth - width) / 2, 30);
  columns = 40; //Number Of Columns#####
  rows = 40; //Number Of Rows#####
  gridWidth = width / columns; //Grid Width Based On The Amount Of Columns#####
  gridHeight = height / rows; //Grid Height Based On The Rows#####
  //Location For Snake#####
  let sx = ceil(columns / 4) * gridWidth;
  let sy = ceil(rows / 2) * gridHeight;
  snake = new Snake(sx, sy);
  //Location For Food#####
  let fx = ceil(random(columns - 1)) * gridWidth;
  let fy = ceil(random(rows - 1)) * gridHeight;
  food = new Food(fx, fy);

  frameRate(10);
}

function draw() {
  background(36, 240, 90);
  loadGrid(columns, rows); //Loads A Grid Using Colummns And Rows#####
  food.run();
  snake.run();
}

function keyPressed() {
  if (
    (keyCode === 65 && snake.vel.x !== gridWidth) ||
    (keyCode === LEFT_ARROW && snake.vel.x !== gridWidth)
  ) {
    //If A or Left Arrow is Pressed Move to the Left#####
    snake.vel = createVector(-gridWidth, 0);
  } else if (
    (keyCode === 68 && snake.vel.x !== -gridWidth) ||
    (keyCode === RIGHT_ARROW && snake.vel.x !== -gridWidth)
  ) {
    //If D or Right Arrow is Pressed Move to the Right#####
    snake.vel = createVector(gridWidth, 0);
  } else if (
    (keyCode === 87 && snake.vel.y !== gridHeight) ||
    (keyCode === UP_ARROW && snake.vel.y !== gridHeight)
  ) {
    //If W or Up Arrow is Pressed Move to the Up#####
    snake.vel = createVector(0, -gridHeight);
  } else if (
    (keyCode === 83 && snake.vel.y !== -gridHeight) ||
    (keyCode === DOWN_ARROW && snake.vel.y !== -gridHeight)
  ) {
    //If S or Down Arrow is Pressed Move to the Down#####
    snake.vel = createVector(0, gridHeight);
  }
}

//Start Function loadGrid##########
function loadGrid(c, r) {
  for (let i = 0; i < c; i++) {
    for (let j = 0; j < r; j++) {
      noFill();
      stroke(16, 180, 50);
      strokeWeight(1.5);
      rect(gridWidth * i, gridHeight * j, gridWidth, gridHeight);
    }
  }
}
//End Function loadGrid##########
