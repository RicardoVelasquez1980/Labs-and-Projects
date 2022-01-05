
//Ricardo Velasquez
//Lab 826 Ball Array Part A & B

let balls;

//Start Function Setup##########
function setup() {
  var cnv = createCanvas(1900, 900);
  cnv.position((windowWidth - width) / 2, 30);
  //Set Up Functions & Arrays##########
  balls = [];
  loadBalls(1000);
  // frameRate(1);
}
//End Function Setup##########

//Start Function Draw##########
function draw() {
  background(220);
  //Set Function runBalls##########
  runBalls();
}
//End Function Draw##########

//Start Function loadBalls##########
function loadBalls(numBalls) {
  for (let i = 0; i < numBalls; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 40);
    if (x < (r / 2)) {
      x = x + (r / 2);
    }
    if (x > (width - (r /2))) {
      x = width - (r / 2);
    }
    if (y < (r / 2)) {
      y = y + (r / 2);
    }
    if (y > (height - (r / 2))) {
      y = height - (r / 2);
    }
    balls[i] = new Ball(x, y, r);
  }
}
//End Function loadBalls##########

//Start Function runBalls##########
function runBalls() {
  for (let i = 0; i < balls.length; i++) {
    balls[i].run();
  }
}
//End Function runBalls##########

//Start Class Ball##########
class Ball {
  //Start Constructor##########
  constructor(x, y, r) {
    this.loc = createVector(x, y);
    let dx = random(-5, 5);
    let dy = random(-5, 5);
    this.vel = createVector(dx, dy);
    this.r = r;
    this.clr = color(random(255), random(255), random(255));
  }
  //End Constructor##########

  run() {
    //Start Run##########
    this.render();
    this.update();
    // this.checkEdges();
  } //End Run##########

  //Start Render##########
  render() {
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.r);
  }
  //End Render##########

  //Start Update##########
  update() {
    this.loc.add(this.vel);
    // this.x = this.x + this.dx;
    // this.y = this.y + this.dy;
  }
  //End Update##########

  //Start checkEdges##########
  checkEdges() {
    if (this.loc.x < (this.r / 2)) {
      this.vel.dx = -this.vel.dx;
    }
    if (this.loc.x > width - (this.r / 2)) {
      this.vel.dx = -this.vel.dx;
    }
    if (this.loc.y < (this.r / 2)) {
      this.vel.dy = -this.vel.dy;
    }
    if (this.loc.y > height - (this.r / 2)) {
      this.vel.dy = -this.vel.dy;
    }
  }
  //End checkEdges##########
}
//End Class Ball
