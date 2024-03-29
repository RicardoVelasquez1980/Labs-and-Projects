//Ricardo Velasquez
//Lab 128 Transformations

let angle, angleAdd, scal, scaleChange, x, y, scaleChReset;
let shade;

function setup() {
  cnv = createCanvas(windowWidth - 20, windowHeight - 60);
  cnv.position((windowWidth - width) / 2, 30);
  // x = random(width);
  // y = random(height);
  x = mouseX;
  y = mouseY;
  angle = random(TWO_PI);
  angleAdd = random(TWO_PI);
  scal = random(4);
  scalChange = createSlider(-1, 1, 0, 0.01);
  scalChange.position(20, 40);
  scaleChReset = createButton("RESET");
  scaleChReset.position(width - 40, 40);
  shade = random(255);
  background(255 - shade);

}

function draw() {
  // background(255 - shade);

  let dia = 10;

  scaleChReset.mousePressed(resetScal);

  x = mouseX;
  y = mouseY;

  scal += scalChange.value();
  angle += angleAdd;

  push();
  translate(x, y);
  rotate(angle);
  scale(scal);
  fill(shade, shade, shade, random(255));
  stroke(255 - shade / 2, 255 - shade / 2, 255 - shade / 2, random(255));
  strokeWeight(4);
  rect(0, 0, dia);
  pop();

  push();
  translate(x, y);
  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(dia, 0, 0);
  pop();

}

function resetScal(){
  scalChange.value(0);
}
