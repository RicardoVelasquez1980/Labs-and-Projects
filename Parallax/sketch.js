
let backgroundImg = [];

function setup() {
  cnv = createCanvas(819, 542);
  cnv.position((windowWidth - width) / 2, 30);
  background(0);

  for (let i = 0; i < 4; i++){
    backgroundImg[i] = new Background(i);

  }

}

function draw() {
  for (let i = backgroundImg.length - 1; i >= 0; i--){
    backgroundImg[i].run();

  }

}
