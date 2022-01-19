//Ricardo Velasquez
//Lab 112 Bezier

let balls = [], randomThing = [];

function setup() {
  var cnv = createCanvas(windowWidth - 20, windowHeight - 60);
  cnv.position((windowWidth - width) / 2, 30);
  background(0);

  loadBalls(ceil(random(40)));
  // frameRate(1);
}

function draw() {
  // background(0);

  for (let i = 0; i < randomThing.length; i++){
    randomThing[i].run();
  }

}

//Start Function loadBalls##########
function loadBalls(qty){
  for (let i = 0; i < qty; i++){
    let x = random(width);
    let y = random(height);

    // balls.push(ellipse(x, y, 10));

    randomThing.push(new RandomThing(x, y));
  }
}
//End Function loadBalls##########

//Start Class randomThing##########
class RandomThing extends p5.Vector{
  constructor(x, y){
    super(x, y);
    this.loc2 = createVector(x + random(10, 200), y + random(10, 200));
    this.vel1 = p5.Vector.random2D();
    this.vel2 = p5.Vector.random2D();
    this.ctrl1 = createVector(x - random(20), y - random(20));
    this.ctrl2 = createVector(this.loc2.x + random(20), this.loc2.y + random(20));
    this.clr = color(random(255), random(255), random(255));
  }

  run(){
    this.render();
    this.update();
  }

  render(){
    push();
    noFill();
    stroke(this.clr, 10);
    strokeWeight(5);
    bezier(this.ctrl1.x, this.ctrl1.y, this.x, this.y, this.loc2.x, this.loc2.y, this.ctrl2.x, this.ctrl2.y);
    pop();
  }

  update(){
    this.add(this.vel1);
    this.ctrl1.sub(p5.Vector.random2D());
    this.loc2.add(this.vel2);
    this.ctrl2.sub(p5.Vector.random2D());
  }
}
//End Class randomThing##########
