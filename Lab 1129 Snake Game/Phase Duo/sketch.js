//Ricardo Velasquez
//Snake Game
//reese is cool********************************************************

//Global Variables##########
let snake, food, columns, rows, gridWidth, gridHeight;
let playButton,
  instructionButton,
  settingButton,
  exitButton,
  musicToggleButton,
  soundToggleButton;
let score,
  gameState = 0;
let gameMusic,
  loseSound,
  eatSound,
  clickSound,
  musicToggle = true,
  soundToggle = true;
let apple, snakeSplash, snakeHead, snakeBody, snakeTail, instructionImage;




let pauseToggle = false;

function preload() {
  loseSound = loadSound("lose.wav");
  eatSound = loadSound("eat.wav");
  clickSound = loadSound("click.wav");
  apple = loadImage("apple.gif");
  snakeSplash = loadImage("snake.png");
  snakeHead = loadImage("snakeHead.png");
  snakeBody = loadImage("snakeBody.png");
  snakeTail = loadImage("snakeTail.png");
  instructionImage = loadImage("instructionImage.png");
}

function setup() {
  var cnv = createCanvas(1800, 1000);
  cnv.position((windowWidth - width) / 2, 30);
  gridWidth = 20; //Grid Width Based On The Amount Of Columns#####
  gridHeight = 20; //Grid Height Based On The Rows#####
  columns = width / gridWidth; //Number Of Columns#####
  rows = height / gridHeight; //Number Of Rows#####
  //Location For Snake#####
  let sx = ceil(columns / 4) * gridWidth;
  let sy = ceil(rows / 2) * gridHeight;
  snake = new Snake(sx, sy);
  //Location For Food#####
  let fx = ceil(random(columns - 1)) * gridWidth;
  let fy = ceil(random(rows - 1)) * gridHeight;
  food = new Food(fx, fy);

  playButton = new Button( //Make a Play Button#####
    width * 0.25, //x Location#####
    height - (height * 1.9) / 5, //y Location#####
    width * 0.5, //Width#####
    2 * (height / 5 - 10), //length#####
    "Play", //Button Name#####
    100 //Button Name Size#####
  );
  instructionButton = new Button( //Make an Intructions Button#####
    width * 0.75 + 10,
    height - height / 5,
    width * 0.25 - 20,
    height / 5 - 10,
    "Instructions",
    20
  );
  settingButton = new Button( //Make a Settings Button#####
    10,
    height - height / 5,
    width * 0.25 - 20,
    height / 5 - 10,
    "Settings",
    20
  );
  exitButton = new Button( //Make an Exit Button#####
    width * 0.75 + 10,
    height - height / 5,
    width * 0.25 - 20,
    height / 5 - 10,
    "Exit",
    40
  );
  musicToggleButton = new Button(
    width * 0.25,
    height * 0.25,
    width * 0.5,
    height / 5 - 10,
    "Music On",
    40
  );
  soundToggleButton = new Button(
    width * 0.25,
    height * 0.75,
    width * 0.5,
    height / 5 - 10,
    "Sound On",
    40
  );

  gameMusic = loadSound("music.mp3", musicPlay);
  //Image Resizing##########
  snakeSplash.resize(height * 0.65, 0);
  instructionImage.resize(height * 0.75, 0);

  frameRate(10);//Original is 10#####
}

function draw() {
  game(gameState);
}

function keyPressed() {
  console.log(keyCode);
  if (
    (keyCode === 65 && snake.vel.x !== gridWidth) ||
    (keyCode === LEFT_ARROW && snake.vel.x !== gridWidth)
  ) {
    //If A or Left Arrow is Pressed Move to the Left#####
    snake.vel = createVector(-gridWidth, 0);
    snake.snakeAngle = -HALF_PI;
  } else if (
    (keyCode === 68 && snake.vel.x !== -gridWidth) ||
    (keyCode === RIGHT_ARROW && snake.vel.x !== -gridWidth)
  ) {
    //If D or Right Arrow is Pressed Move to the Right#####
    snake.vel = createVector(gridWidth, 0);
    snake.snakeAngle = HALF_PI;
  } else if (
    (keyCode === 87 && snake.vel.y !== gridHeight) ||
    (keyCode === UP_ARROW && snake.vel.y !== gridHeight)
  ) {
    //If W or Up Arrow is Pressed Move to the Up#####
    snake.vel = createVector(0, -gridHeight);
    snake.snakeAngle = TWO_PI;
  } else if (
    (keyCode === 83 && snake.vel.y !== -gridHeight) ||
    (keyCode === DOWN_ARROW && snake.vel.y !== -gridHeight)
  ) {
    //If S or Down Arrow is Pressed Move to the Down#####
    snake.vel = createVector(0, gridHeight);
    snake.snakeAngle = PI;
  }

  //Press Enter To Play#####
  if (keyCode === 13 && gameState === 0) {
    gameState = 1;
  } else if (keyCode === 13 && gameState === 2) {
    //Resets Game#####
    snake.size = [];
    //Location For Snake#####
    let sx = ceil(columns / 4) * gridWidth;
    let sy = ceil(rows / 2) * gridHeight;
    snake = new Snake(sx, sy);
    //Location For Food#####
    let fx = ceil(random(columns - 1)) * gridWidth;
    let fy = ceil(random(rows - 1)) * gridHeight;
    food = new Food(fx, fy);
    gameState = 1; //Back To Game#####
  }
}

function mousePressed() {
  if (playButton.mouseIsOverButton && gameState === 0) {
    gameState = 1; //To Game#####
    if (soundToggle) {
      clickSound.play();
    }
    playButton.mouseIsOverButton = false; //Helps With An Issue#####
  }
  if (playButton.mouseIsOverButton && gameState === 2) {
    //Resets Game#####
    snake.size = [];
    //Location For Snake#####
    let sx = ceil(columns / 4) * gridWidth;
    let sy = ceil(rows / 2) * gridHeight;
    snake = new Snake(sx, sy);
    //Location For Food#####
    let fx = ceil(random(columns - 1)) * gridWidth;
    let fy = ceil(random(rows - 1)) * gridHeight;
    food = new Food(fx, fy);
    gameState = 1; //Back To Game#####
    if (soundToggle) {
      clickSound.play();
    }
    playButton.mouseIsOverButton = false; //Helps With An Issue#####
  }
  if (settingButton.mouseIsOverButton) {
    gameState = 3; //To Settings#####
    if (soundToggle) {
      clickSound.play();
    }
    settingButton.mouseIsOverButton = false; //Helps With An Issue#####
  }
  if (instructionButton.mouseIsOverButton) {
    gameState = 4; //To Instructions#####
    if (soundToggle) {
      clickSound.play();
    }
    instructionButton.mouseIsOverButton = false; //Helps With An Issue#####
  }
  if (exitButton.mouseIsOverButton) {
    gameState = 0; //To Instructions#####
    if (soundToggle) {
      clickSound.play();
    }
    exitButton.mouseIsOverButton = false; //Helps With An Issue#####
  }
  if (musicToggleButton.mouseIsOverButton) {
    if (musicToggle) {
      musicToggleButton.msg = "Music Off"; //Button Name Changed#####
      musicToggle = false; //No More Music#####
    } else if (!musicToggle) {
      musicToggleButton.msg = "Music On"; //Button Name Changed#####
      musicToggle = true; //Turn The Music Back On#####
    }
    musicPlay();
    if (soundToggle) {
      clickSound.play();
    }
    musicToggleButton.mouseIsOverButton = false; //Helps With An Issue#####
  }
  if (soundToggleButton.mouseIsOverButton) {
    if (soundToggle) {
      soundToggleButton.msg = "Sound Off"; //Button Name Changed#####
      soundToggle = false; //No More Sound#####
    } else if (!soundToggle) {
      soundToggleButton.msg = "Sound On"; //Button Name Changed#####
      soundToggle = true; //Turn The Sound Back On#####
    }
    if (soundToggle) {
      clickSound.play();
    }
    soundToggleButton.mouseIsOverButton = false; //Helps With An Issue#####
  }
}

//Start Function game##########
function game(state) {
  if (!state) {
    //If gameState === 0, Home Screen#####
    background(26, 190, 60);
    imageMode(CENTER);
    image(snakeSplash, width / 2, (height * 0.55) / 2);
    fill(56, 98, 170);
    stroke(67, 230, 100);
    strokeWeight(10);
    textSize(100);
    textAlign(CENTER);
    text("SERPENS", width / 2, height * 0.25);
    playButton.run();
    settingButton.run();
    instructionButton.run();
  }
  if (state === 1) {
    //Game Screen#####
    background(36, 240, 90);
    loadGrid(columns, rows); //Loads A Grid Using Colummns And Rows#####
    food.run();
    snake.run();
    scoreRender(snake.size.length);
    if (snake.dead) {
      gameState = 2;
    }
  }
  if (state === 2) {
    //Game Over Screen
    background(26, 190, 60);
    imageMode(CENTER);
    image(snakeSplash, width / 2, (height * 0.55) / 2);
    fill(56, 98, 170);
    stroke(67, 230, 100);
    strokeWeight(10);
    textSize(100);
    textAlign(CENTER);
    text("SERPENS", width / 2, height * 0.25);
    playButton.run();
    settingButton.run();
    scoreRender(snake.size.length); //Show Score#####
    endScore(); //Display End Message#####
  }
  if (state === 3) {
    //Settings Screen#####
    background(26, 190, 60);
    exitButton.run();
    musicToggleButton.run();
    soundToggleButton.run();
    textAlign(CENTER);
    fill(200, 0, 0);
    stroke(255, 0, 0);
    textSize(100);
  }
  if (state === 4) {
    //Instructions Screen#####
    background(26, 190, 60);
    exitButton.run();
    imageMode(CENTER);
    image(instructionImage, width / 2, instructionImage.width / 2 - 55);
    fill(39, 99, 230);
    noStroke();
    textSize(40);
    textAlign(CENTER);
    text("Use Arrow Keys Or WASD To Move", width / 2 - 50, height * 0.75 - 10);
    text("EAT THE APPLE!!", width / 2 - 50, height * 0.75 + 50);
    text("Don't Run Into Yourself!", width / 2 - 50, height * 0.75 + 110);
    text("Don't Run Into The Border!", width / 2 - 50, height * 0.75 + 170);
    text("Have Fun And Get Good", width / 2 - 50, height * 0.75 + 230);
  }
}
//End Function game##########

//Start Function scoreRender##########
function scoreRender(scr) {
  score = scr; //Score Is Updated#####
  if (gameState === 1) {
    fill(140, 20, 36);
    stroke(140, 20, 36);
    strokeWeight(2);
    textSize(30);
    textAlign(LEFT);
    text("Score: " + score, 5, 25);
  } else if (gameState === 2) {
    fill(140, 20, 36);
    stroke(140, 20, 36);
    strokeWeight(2);
    textSize(50);
    textAlign(CENTER);
    text("Score: " + score, width / 2, height * 0.4);
  }
}
//End Function scoreRender##########

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

//Start Function endScore##########
function endScore() {
  let x = width / 2;
  let y = height * 0.55;
  textAlign(CENTER);
  if (score < 10) {
    text("My Grandma Can Do Better", x, y);
  } else if (score < 20) {
    text("OK", x, y);
  } else if (score < 30) {
    text("The Creator Can Do Better", x, y);
  } else if (score < 50) {
    text("How?", x, y);
  } else if (score < 80) {
    text("You Hacking?", x, y);
  } else if (score < 140) {
    text("DO YOUR WORK!!", x, y);
  } else if (score < 500) {
    text("Impossible!", x, y);
  } else if (score < 1000) {
    text("No life.", x, y);
  }
}
//End Function endScore##########

//Start Functioin playMusic##########
function musicPlay() {
  // gameMusic.play();//When Looping A SoundFile You Dont Need To Play First, When You Loop It It Automatically Started Playing%%%%%%%%%%%%%%
  if (musicToggle) {
    gameMusic.loop();
  } else if (!musicToggle) {
    gameMusic.pause();
  }
}
//End Function playMusic##########
