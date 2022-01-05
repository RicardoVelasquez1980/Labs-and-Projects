//Ricardo Velasquez
//Lab 909 Attraction

let mover, mainMover;

function setup() {
  var cnv = createCanvas(1900, 900);
  cnv.position((windowWidth - width) / 2, 30);
  //Make Arrays and Functions##########
  mover = [];
  loadMovers(100);
}

function draw() {
  background(220);
  mainMover.run();
  for (let i = 0; i < mover.length; i++){
    mover[i].run();
  }
}

//Start Function loadMovers##########
function loadMovers(n){
  mainMover = new Mover(random(width), random(height), random(20, 30));
  for (let i = 0; i < n; i++){
    mover[i] = new Mover(random(width), random(height), random(10, 15));
  }
}
//End Function loadMovers##########

//Start Class Mover##########
class Mover{
  constructor(x, y, r){
    this.loc = createVector(x, y);
    this.vel = createVector(random(-4, 4), random(-4, 4));
    this.acc = createVector(0, 0);
    this.r = r;
    this.clr = color(0, 0, 0);
  }

  run(){
    this.render();
    this.checkEdges();
    this.update();
  }

  render(){
    if (this == mainMover){
      this.clr = color(0, 255, 0);
    } else{
      this.clr = color(0, 0, 255);
    }
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.r, this.r);
  }

  update(){
let distToMainMover = this.loc.dist(mainMover.loc);

//Calc Attractions value/Vector##########
this.acc = p5.Vector.sub(mainMover.loc, this.loc);
this.acc.normalize();
this.acc.mult(0.06);//Nudge the Mover in the Proper Direction##########

//Calc Repulsion Value/Vector##########
if (distToMainMover < 150){
  this.acc = p5.Vector.sub(this.loc, mainMover.loc);
  this.acc.normalize();
  this.acc.mult(0.1);//Nudge the Mover in the Proper Direction##########
}

this.vel.add(this.acc);

if (this == mainMover){
  this.vel.limit(1);
} else{
  this.vel.limit(4);
}

this.loc.add(this.vel);
  }

  checkEdges(){
if (this.loc.x > width){
  this.loc.x = 0;
}
if (this.loc.x < 0){
  this.loc.x = width;
}
if (this.loc.y > height){
  this.loc.y = 0;
}
if (this.loc.y < 0){
  this.loc.y = height;
}
  }
}
//End Class Mover##########
