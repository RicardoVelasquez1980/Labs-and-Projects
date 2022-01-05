//Ricardo Velasquez
//Lab 1108 Get and Set

//MENTIION: https://www.pinterest.com/janercapone/

//Global Variables##########
let landscape1, landscape2, brush, brushSize, redrawOnOff, clrChangeSelection;
let  threshold;
let caeruleus, easterEgg;

function preload() {
  landscape1 = loadImage('Landscape.png');
  landscape2 = loadImage('Landscape.png');
  easterEgg = loadImage('IDK.png');
  //MR.UM READ THIS: DONT LOOK AT THE CODE TO FIND OUT HOW TO ACTIVATE THE EASTER EGG; 
  //I WILL TRY TO MAKE A IT CONFUSING SO ITS HARD TO FIND%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  //AND ALSO DONT CHANGE THE CODE TO FIGURE IT OUT%%%%%%%%%%%%%%%%
  //CLUES: Blue, Latin, 81004%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
}


function setup() {
  if (caeruleus != 81004){
  let cnv = createCanvas(landscape1.width * 2 + 10, landscape1.height);
  cnv.position((windowWidth - width + 100) / 2, 30);
  } else if (caeruleus === 81004){
  let cnv = createCanvas(landscape1.width * 2 + 10, landscape1.height);
  cnv.position((windowWidth - width + 100) / 2, 30);
  }
  background(0);//Set Background#####
  clrChangeSelection = 1;
  redrawOnOff = 9
  brushSize = createSlider(1, 50, 25);
  brushSize.position(width + 210, 30);
  threshold = createSlider(1, 255, 175, 0.1);
  threshold.position(width + 210, 30)
  threshold.hide();//Makes Threshold Slider Disappear#####
  brush = new Redraw();//Make a Brush#####
}

function draw() {
  if (caeruleus != 81004){
    image(landscape1, 0, 0);//Display Image on Left Half of Screen#####
  } else if (caeruleus === 81004){
    easterEgg.resize(landscape1.width, 0);
    image(easterEgg, 0, 0);//Display Image on Left Half of Screen#####
  }
  stroke(255);//Stroke for A Line Seperating the Canvas by Half#####
  strokeWeight(8)
  line(width / 2, 0, width / 2, height);
  noStroke();
  manipulationOption();
}

function keyPressed() {
  // console.log(keyCode);//Find Out KeyCode of Each Key#####
  if (keyCode === 49) {
    clrChangeSelection = 1;//Norm Redraw#####
    brushSize.hide();//Makes Brush Size Slider Disappear#####
    threshold.hide();//Makes Threshold Slider Disappear#####
  } else if (keyCode === 50) {
    clrChangeSelection = 2;//Red and Green Switch Redraw#####
    brushSize.hide();//Makes Brush Size Slider Disappear#####
    threshold.hide();//Makes Threshold Slider Disappear#####
  } else if (keyCode === 51) {
    clrChangeSelection = 3;//Red and Blue Switch Redraw#####
    brushSize.hide();//Makes Brush Size Slider Disappear#####
    threshold.hide();//Makes Threshold Slider Disappear#####
  } else if (keyCode === 52) {
    clrChangeSelection = 4;//Green and Blue Switch Redraw#####
    brushSize.hide();//Makes Brush Size Slider Disappear#####
    threshold.hide();//Makes Threshold Slider Disappear#####
  } else if (keyCode === 53) {
    clrChangeSelection = 5;//Black and White Redraw#####
    brushSize.hide();//Makes Brush Size Slider Disappear#####
    threshold.hide();//Makes Threshold Slider Disappear#####
  } else if (keyCode === 54) {
    clrChangeSelection = 6;//Pure Red#####
    brushSize.hide();//Makes Brush Size Slider Disappear#####
    threshold.hide();//Makes Threshold Slider Disappear#####
  } else if (keyCode === 55) {
    clrChangeSelection = 7;//Pure Green#####
    brushSize.hide();//Makes Brush Size Slider Disappear#####
    threshold.hide();//Makes Threshold Slider Disappear#####
  } else if (keyCode === 56) {
    clrChangeSelection = 8;//Pure Blue#####
    brushSize.hide();//Makes Brush Size Slider Disappear#####
    threshold.hide();//Makes Threshold Slider Disappear#####
  } else if (keyCode === 57) {
    redrawOnOff = 9;//Allows for Redraw#####
    background(0);
    brushSize.show();//Makes Brush Size Slider Reappear#####
    threshold.hide();//Makes Threshold Slider Disappear#####
  } else if (keyCode === 48) {
    redrawOnOff = 0;//Copy and Change of FULL Image#####
    brushSize.hide();//Makes Brush Size Slider Disappear#####
    threshold.hide();//Makes Threshold Slider Disappear#####
  } else if (keyCode === 84) {
    clrChangeSelection = "t";//Threshold#####
    threshold.show();//Makes Threshold Slider Reappear#####
  } else if (keyCode === 73) {
    clrChangeSelection = "i";//Invert Colors#####
    threshold.hide();//Makes Threshold Slider Reappear#####
  }

  if (keyCode === 67){
    caeruleus = 80000;
  }
  if (keyCode === 65){
    caeruleus = caeruleus + 1000;
  }
  if (keyCode === 69){
    caeruleus = caeruleus * caeruleus + 69;
  }
  if (keyCode === 82){
    caeruleus = sqrt(caeruleus);
  }
  if (keyCode === 85){
    caeruleus = caeruleus * 85 * 85;
  }
  if (keyCode === 76){
    caeruleus = sqrt((caeruleus * caeruleus) / 52200625 - 70);
  }
  if (keyCode === 83){
    caeruleus = round(caeruleus - (11850806352574 * 4));
    setup();
  }
  if (keyCode === 68){
    if (caeruleus != 81004){
      caeruleus = 0;
    }
  }
}
