//Ricardo Velasquez
//Lab 908 Bubbles

//Set Start Variables##########
let balls;

function setup() {
  let cnv = createCanvas(1200, 800);
  cnv.position((windowWidth - width)/2, 50);
  //Function & Array SetUp##########
  balls = [];
  loadBalls(100);

  //Optional FrameRate##########
  // frameRate(30);
}

function draw() {
  background(220);
  //Functions##########
  runBalls();

}

//Start Function loadBalls##########
//n is the number that is within the loadBalls decleration in SETUP FUNCTION##########
function loadBalls(n) {
  for (let i = 0; i < n; i++){
    let d = random(15, 30);
    let x = random((d / 2), (width - (d / 2)));
    let y = random((d / 2), (height - (d/ 2)));
    balls[i] = new Ball(x, y, d);
  }
}
//End Function loadBalls##########

//Start Function runBalls##########
function runBalls(){
  for (let i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
//End Function runBalls##########

//Start Class Ball##########
class Ball{
  constructor(x, y, d){
    this.loc = createVector(x, y);
    let dx = random(-5, 5);
    let dy = random(-5, 5);
    this.vel = createVector(dx, dy);
    this.d = d;
    this.r = (d / 2);
    this.counter = 0;
    this.clr = color(0, 0, 255);
  }

  run(){
    this.render();
    this.update();
    this.checkEdges();//DEACTIVATE IF USING UPDATEVEL FUNCTION##########
    this.checkDetection();
    this.checkStuck();//DEACTIVATE IF NOT USING UPDATEVEL FUNCTION##########
    this.drawLine();
  }

  render(){
    fill(this.clr);
    strokeWeight(1);
    ellipse(this.loc.x, this.loc.y, this.d);
  }

  //START TEST CHANGE OF VEL##########
  update(){

    if (this.counter++ > 10){
      let dx = random(-5, 5);
      let dy = random(-5, 5);
      this.vel = createVector(dx, dy);
      this.counter = 0;
  }
    this.loc.add(this.vel);
  }
  //END TEST CHANGE OF VEL##########

  checkEdges(){
    if (this.loc.x < this.r){
      this.vel.x = -this.vel.x;
    }
    if (this.loc.x > (width - this.r)){
      this.vel.x = -this.vel.x;
    }
    if (this.loc.y < this.r){
      this.vel.y = -this.vel.y;
    }
    if (this.loc.y > (height - this.r)){
      this.vel.y = -this.vel.y;
    }
  }

  checkStuck(){
    if (this.loc.x <  this.r){
      this.loc.x = this.loc.x + this.r;
    }
    if (this.loc.x > (width - this.r)){
      this.loc.x = this.loc.x - this.r;
    }
    if (this.loc.y < this.r){
      this.loc.y = this.loc.y + this.r;
    }
    if (this.loc.y > (height - this.r)){
      this.loc.y = this.loc.y - this.r;
    }
  }

  checkDetection(){
    for (let i = 0; i < balls.length; i++){//+
      if (this !== balls[i]){//++
        let d = this.loc.dist(balls[i].loc);
        if (d < (this.r + balls[i].r)){//+++
          // this.vel.x = -this.vel.x;//TEST FOR BOUNCE AFTER COLLISION
          // this.vel.y = -this.vel.y;//TEST FOR BOUNCE AFTER COLLISION
          this.clr = color(255, 0, 0);
          return;
        }//+++
      }//++
    }//+
    this.clr = color(0, 0, 255);
  }

  drawLine(){
    for (let i = 0; i < balls.length; i++){//+
      if (this !== balls[i]){//++
        let d = this.loc.dist(balls[i].loc);
        if (d <= (this.d + balls[i].d)){//+++
          strokeWeight(2);
          stroke(this.clr)
          line(this.loc.x , this.loc.y, balls[i].loc.x, balls[i].loc.y);
        }//+++
      }//++
    }//+
  }
}
//End Class Ball##########
