//Ricardo Velasquez
//Animation

let birdFrames = [];

function preload(){
  for (let i = 0; i < 8; i++){
    birdFrames[i] = loadImage("b" + (i + 1) + ".png");

  }
}

function setup() {
  cnv = createCanvas(1200, 600);
  cnv.position((windowWidth - width) / 2, 30);

}

function draw() {
  background(0);

  for (let i = 0; i < birdFrames.length; i++){
    image(birdFrames[i], (i * 100) + 100, height / 2);

  }

  // image(birdFrames[0], width / 2, height / 2);

}
