//Ricardo Velasquez
//Lab 112 Bezier

let balls = [], randomThing = [];

function setup() {
  var cnv = createCanvas(windowWidth - 20, windowHeight - 60);
  cnv.position((windowWidth - width) / 2, 30);

  loadBalls(6);
}

function draw() {
  background(220);

}

//Start Function loadBalls##########
function loadBalls(qty){
  for (let i = 0; i < qty; i++){
    ellipse(random(width), random(height), 8);
  }
}
//End Function loadBalls##########

//Start Class randomThing##########
class RandomThing extends p5.Vector{
  constructor(){
    super();
    this.loc2 = createVector();
    this.vel1 = p5.Vector.random2D();
    this.vel2 = p5.Vector.random2D();
    this.ctrl1 = createVector();
    this.ctrl2 = createVector();
  }
}
//End Class randomThing##########
