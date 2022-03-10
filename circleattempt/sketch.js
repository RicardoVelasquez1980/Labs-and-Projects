//Ricardo Velasquez
//circleattempt

let pixelBalls = [], totalPB = 1000;

let timer = 0, totalStill = 0;

function setup() {
  cnv = createCanvas(windowHeight - 60, windowHeight - 60);
  cnv.position((windowWidth - width) / 2, 30);
  background(100);

  loadRunPB("LOAD");

}

function draw() {
  background(100);

  timer += 1;

  loadRunPB("RUN");

  if (totalStill === pixelBalls.length){
    console.log(timer);

  }

}

//Start Function loadRunPB##########
function loadRunPB(typ){
  if (typ === 'LOAD'){
    pixelBalls[0] = new Circ();

  } else if (typ === 'RUN'){
    for (let i = pixelBalls.length - 1; i >= 0; i--){
      pixelBalls[i].run();

      if (pixelBalls[i].isColliding){
        pixelBalls.splice(i, 1);
      }

    }



  }

}
//End Function loadRunPB##########
