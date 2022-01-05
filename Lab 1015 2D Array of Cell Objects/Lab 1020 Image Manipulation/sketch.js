//Ricardo Velasquez
//Lab 1019 Image Manipulation

//MENTIION: https://www.pinterest.com/janercapone/

//Global Variables##########
let landscape1, landscape2, brush, brushSize, redrawOnOff, clrChangeSelection;

function preload(){
  landscape1 = loadImage('Landscape.png');
  landscape2 = loadImage('Landscape.png');
}


function setup() {
  var cnv = createCanvas(landscape1.width * 2 + 10, landscape1.height);
  cnv.position((windowWidth - width) / 2, 30);
  background(0);//Set Background#####
  clrChangeSelection = 1;
  redrawOnOff = 9
  brushSize = createSlider(1, 50, 25);
  brushSize.position(1, 30);
  brush = new Redraw();//Make a Brush#####
  console.log("Press 1 for Redrawing Using Origianl Colors");
  console.log("Press 2 for Redrawing And Green and Red Colors Swap");
  console.log("Press 3 for Redrawing And Blue and Red Colors Swap");
  console.log("Press 4 for Redrawing And Green and Blue Colors Swap");
  console.log("Press 5 for Redrawing In Black and White");
  console.log("Press 9 for Redrawing Image");
  console.log("Press 0 for Copying the Image on the Other SIde");
}

function draw() {
  image(landscape1, 0, 0);//Display Image on Left Half of Screen#####
  stroke(255);//Stroke for A Line Seperating the Canvas by Half#####
  strokeWeight(8)
  line(width / 2, 0, width / 2, height);
  noStroke();
  manipulationOption();
}

function keyPressed(){
  // console.log(keyCode);//Find Out KeyCode of Each Key#####
  if (keyCode === 49){
    clrChangeSelection = 1;//Norm Redraw#####
  } else if (keyCode === 50){
    clrChangeSelection = 2;//Red and Green Switch Redraw#####
  } else if (keyCode === 51){
    clrChangeSelection = 3;//Red and Blue Switch Redraw#####
  } else if (keyCode === 52){
    clrChangeSelection = 4;//Green and Blue Switch Redraw#####
  } else if (keyCode === 53){
    clrChangeSelection = 5;//Black and White Redraw#####
  } else if (keyCode === 57){
    redrawOnOff = 9;//Allows for Redraw#####
    image(landscape2, width / 2 + 5, 0);background(0);
  } else if (keyCode === 48){
    redrawOnOff = 0;//Copy and Change of FULL Image#####
    image(landscape2, width / 2 + 5, 0);
  }
}
