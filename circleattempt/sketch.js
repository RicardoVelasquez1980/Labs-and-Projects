//Ricardo Velasquez
//circleattempt

let pixelBalls = [];

function setup() {
  cnv = createCanvas(windowHeight - 60, windowHeight - 60);
  cnv.position((windowWidth - width) / 2, 30);
  background(0);

  loadRunPB("LOAD", 10);

}

function draw() {
  background(0);

  loadRunPB("RUN", pixelBalls.length);

}

//Start Function loadRunPB##########
function loadRunPB(typ, qty){
  if (typ === 'LOAD'){
    for (let i = 0; i < qty; i++){
      pixelBalls[i] = new Circ();

    }

  } else if (typ === 'RUN'){
    for (let i = 0; i < qty; i++){
      pixelBalls[i].run();
      
    }

  }

}
//End Function loadRunPB##########
