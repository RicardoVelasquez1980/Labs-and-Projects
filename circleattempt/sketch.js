//Ricardo Velasquez
//circleattempt

let pixelBalls = [];

function setup() {
  cnv = createCanvas(windowHeight - 60, windowHeight - 60);
  cnv.position((windowWidth - width) / 2, 30);
  background(0);

  loadRunPB("LOAD");

}

function draw() {
  background(0);

  loadRunPB("RUN");

}

//Start Function loadRunPB##########
function loadRunPB(typ){
  if (typ === 'LOAD'){
    pixelBalls[0] = new Circ();

  } else if (typ === 'RUN'){
    for (let i = 0; i < pixelBalls.length; i++){
      pixelBalls[i].run();

    }

  }

}
//End Function loadRunPB##########
