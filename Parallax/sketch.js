
let backgroundImgs = [];

function setup() {
  cnv = createCanvas(819, 542);
  cnv.position((windowWidth - width) / 2, 30);
  background(0);

  for (let i = 0; i < 4; i++){
    //h is for height
    //it just reposistion the image
    //on the y axis
    let h;
    if (i === 0){
      h = 460;

    } else if (i === 1){
      h = 360;

    } else if (i === 2){
      h = 200;

    } else if (i === 3){
       h = 0;

    }

    //I will be used with identifying the image to load
    backgroundImgs[i] = new BackgroundImg(i, h);

  }

}

function draw() {
  for (let i = backgroundImgs.length - 1; i >= 0; i--){
    backgroundImgs[i].run();

  }

}
