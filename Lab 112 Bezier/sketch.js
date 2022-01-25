//Ricardo Velasquez
//Lab 112 Bezier

let balls = [], randomThing = [];

let cnv

let sliderStroke;

let pause = false;

function setup() {
  cnv = createCanvas(windowWidth - 20, windowHeight - 60);
  cnv.position((windowWidth - width) / 2, 30);
  background(0);

  sliderStroke = createSlider(1, 10, 1, 0.1);
  sliderStroke.position(10, 40);

  loadThings(ceil(random(40)));
  // frameRate(120);
}

function draw() {
  if (!pause){
    // background(0);

    for (let i = 0; i < randomThing.length; i++){
      randomThing[i].run();
    }
  }
}

function keyPressed(){
  if (keyCode === 80 && pause === false){
    pause = true;
  } else if (keyCode === 80 && pause === true){
    pause = false;
  }
  if (keyCode === 83){
    save('test.jpg');
  }
}

//Start Function loadBalls##########
function loadThings(qty){
  for (let i = 0; i < qty; i++){
    let x = random(width);
    let y = random(height);
    randomThing.push(new RandomThing(x, y));
  }
}
//End Function loadBalls##########
