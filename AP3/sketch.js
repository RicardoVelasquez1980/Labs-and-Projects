//Ricardo Velasquez
//AP3

let dots, treeLimbs, noiseOpacity;

let treeShrinkTmr, treeDeletion, renderBackground;

let pause;

let pauseBtn, resetBtn;

let dotSizeTxt, dotOrbitTxt, sunVelTxt, noiseColorTxt;

let dotSize, dotOrbit, sunVel;

let noiseColor;

let brokenBottle;

let cnv;

function preload(){
  brokenBottle = loadImage("BrokenBottle.jpg");

}

function setup() {
  cnv = createCanvas(650 * 1.62, 650);
  cnv.position((windowWidth - width) / 2, 30);

  // background(0);

  pauseBtn = createButton('PAUSE');
  pauseBtn.position((windowWidth - width) / 2 - 75, 30);
  pauseBtn.mousePressed(pauseToggle);

  resetBtn = createButton('RESET');
  resetBtn.position((windowWidth - width) / 2 - 75, 60);
  resetBtn.mousePressed(resetProgram);

  dotSizeTxt = createP('Dot Size');
  dotSizeTxt.position((windowWidth - width) / 2 - 110, 80)

  dotSize = createSlider(1, 20, 10, 1);
  dotSize.position((windowWidth - width) / 2 - 145, 120);

  dotOrbitTxt = createP('Orbit Rad');
  dotOrbitTxt.position((windowWidth - width) / 2 - 110, 140)

  dotOrbit = createSlider(1, 20, 10, 1);
  dotOrbit.position((windowWidth - width) / 2 - 145, 180);

  sunVelTxt = createP("'Sun' Vel Limit");
  sunVelTxt.position((windowWidth - width) / 2 - 130, 200)

  sunVel = createSlider(1, 8, 4, 1);
  sunVel.position((windowWidth - width) / 2 - 145, 240);

  noiseColor = createColorPicker(255, 255, 255);
  noiseColor.position((windowWidth - width) / 2 - 110, 300);

  noiseColorTxt = createP('Background Color');
  noiseColorTxt.position((windowWidth - width) / 2 - 145, 260)

  pause = false;
  treeShrinkTmr = 60;
  treeDeletion = 80;
  renderBackground = false;

  dots = [];
  treeLimbs = [];

  noiseOpacity = new NoiseOpacity();
  treeLimbs[0] = new TreeLimb(width / 2, height, -HALF_PI, 18);

  pixelDensity(1);

  noiseOpacity.render();

  // frameRate(7.5);

}

function draw() {
  if (!pause){
    // background(0);

    if (renderBackground){
      noiseOpacity.render();

    }

    imageMode(CENTER);
    image(brokenBottle, -217, height / 2);

    for (let i = 0; i < treeLimbs.length; i++){
      treeLimbs[i].run();

    }

    if (treeLimbs.length === 127){
      treeShrinkTmr--;

      if (treeShrinkTmr <= 0){
        renderBackground = true;

        for (let i = 0; i < treeLimbs.length; i++){
          treeLimbs[i].opacity -= 10;
          treeLimbs[i].shrinkToggle = true;

        }

      }

    }

    if (dots.length === treeLimbs.length){
      treeDeletion--;

      if (treeDeletion <= 0){
        treeLimbs = [];
        renderBackground = false;

      }

    }

    if (treeLimbs.length === 0){
      for (let i = 0; i < dots.length; i++){
        dots[i].run();

      }

    }

    // push();
    // noFill();
    // stroke(255);
    // strokeWeight(1);
    // line((width / 2) - 217, 0, (width / 2) - 217, height);
    // line((width / 2) + 217, 0, (width / 2) + 217, height);
    // pop();

  } else if (pause){
    push();
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(250);
    text("PAUSED", width / 2, height / 2);
    pop();

  }

}

function pauseToggle(){
  if (pause === false){
    pause = true;

  } else if (pause === true){
    pause = false;

  }

  noiseOpacity.render();

}

function resetProgram(){
  removeElements();
  setup();

}
