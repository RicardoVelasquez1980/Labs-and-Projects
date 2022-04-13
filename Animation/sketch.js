//Ricardo Velasquez
//Animation

let birdFrames = [];
let frameIndex = 0;

function preload(){
  for (let i = 0; i < 8; i++){
    birdFrames[i] = loadImage("b" + (i + 1) + ".png");
    birdFrames[i].resize(width / 2, 0);

  }
}

function setup() {
  cnv = createCanvas(1200, 600);
  cnv.position((windowWidth - width) / 2, 30);

}

function draw() {
  background(0);

  imageMode(CENTER);
  image(birdFrames[frameIndex], width / 2, height / 2);

  frameIndex++;
  if (frameIndex > birdFrames.length - 1) frameIndex = 0;

}
