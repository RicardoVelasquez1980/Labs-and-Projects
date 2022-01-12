//Ricardo Velasquez
//Lab 104 FlowField

//Start Class Indicator##########
class Indicator extends p5.Vector{
  constructor(x, y){
    super(x, y);//Location#####
    this.loc2 = createVector(gridWidth / 2, 0);//Second Location#####
    this.xOff = random(1000);
    this.yOff = random(1000);
    this.zOff = random(1000);
    this.ranPI = random(TWO_PI);
    this.angle = noise(this.xOff, this.yOff, this.zOff) * this.ranPI;//Random Angle Is Given#####
  }

  run(){
    this.render();
    this.angleUpdate();
  }

  render(){
    push();
    translate(this.x, this.y);//Origin Of Canvas Set To The Location For Only THIS Object#####
    rotate(this.angle);//Rotates Canvas According To The Angle#####
    noFill();
    stroke(255, 255, 0);
    strokeWeight(1);
    line(0, 0, this.loc2.x, this.loc2.y);//Line Made From Both Locations#####
    pop();

    push();
    translate(this.x, this.y);
    noFill();
    stroke(0, 255, 0);
    strokeWeight(4);
    point(0, 0);//Simple Dot For Aesthetical Purposes#####
    pop();
  }

  angleUpdate(){
    this.xOff += 0.02;
    this.yOff += 0.01;
    this.zOff += 0.04;
    this.angle = noise(this.xOff, this.yOff) * this.ranPI;
  }
}
//End Class Indicator##########
