//Ricardo Velasquez
//Lab 1110 Image Manipulation

//MENTIION: https://www.pinterest.com/janercapone/

//Global Variables##########
let landscape, brush, brushSize;

function preload() {
  landscape = loadImage('Landscape.png');
}

function setup() {
  let cnv = createCanvas(landscape.width * 2, landscape.height);
  cnv.position((windowWidth - width) / 2, 30);
  background(0);//Set Background#####
  brush = [];
  brushSize = createSlider(1, 50, 25, 1);
  brushSize.position(310, 35);
  brushSize.show();
}

function draw() {
  image(landscape, 0, 0);//Display Image on Left Half of Screen#####

  for (let i = 0; i < brush.length; i++){
    brush[i].run();
  }

  brushRemoval();
}

function mouseMoved(){
  brush.push(new Redraw(mouseX, mouseY, brushSize.value(), landscape.get(mouseX, mouseY)));

}

//Start Function brushRemoval##########
function brushRemoval(){
  for (let i = brush.length - 1; i >= 0; i--){
    if (brush[i].isDead){
      brush.splice(i, 1);
    }
  }
}
//End Function brushRemoval##########
