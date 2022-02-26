//Ricardo Velasquez
//AP2

let dots = [], segments = [], attracter = [];
let pauseBtn, showAttracter;
let pause = false, attracterShown = false;

function setup() {
  cnv = createCanvas(400, 400 * 1.618);
  cnv.position((windowWidth - width) / 2, 30);

  background(0);

  loadRunAttracter('LOAD', 60);
  loadRunDots('LOAD', 30);

  pauseBtn = createButton('PAUSE');
  pauseBtn.position((windowWidth - width) / 2, 5);
  pauseBtn.mousePressed(pauseChange);

  showAttracter = createButton('ATTRACTER');
  showAttracter.position((windowWidth - width) / 2 + 65, 5);
  showAttracter.mousePressed(attracterToggle);

}

function draw() {
  if (!pause){
    background(0, 0, 0, 75);

    loadRunAttracter('RUN', attracter.length);
    loadRunDots('RUN', dots.length);
    runSegments(segments.length);

  }

}

//Start Function pauseChange##########
function pauseChange(){
  if (pause == false){
    pause = true;

  } else if (pause == true){
    pause = false;

  }

}
//End Function pauseChange##########

//Start Function attracterToggle##########
function attracterToggle(){
  if (attracterShown == false){
    attracterShown = true;

  } else if (attracterShown == true){
    attracterShown = false;

  }

}
//End Function attracterToggle##########

//Start Function loadRunAttracter##########
function loadRunAttracter(typ, qty){
  if (typ === "LOAD"){
    for (let i = 0; i < qty; i++){
      attracter[i] = new Attracter();

    }

  } else if (typ === "RUN"){
    for (let i = 0; i < qty; i++){
      attracter[i].run();

    }

  }

}
//End Function loadRunAttracter##########

//Start Function loadRunDots##########
function loadRunDots(typ, qty){
  if (typ === "LOAD"){
    for (let i = 0; i < qty; i++){
      dots[i] = new Dot(i);

    }

  } else if (typ === "RUN"){
    for (let i = 0; i < qty; i++){
      dots[i].run();

    }

  }

}
//End Function loadRunDots##########

//Start Function loadRunSegments##########
function runSegments(qty){
  if (qty > 0){
    for (let i = qty - 1; i >= 0; i--){
      segments[i].run();

    }

  }

}
//End Function loadRunSegments##########
