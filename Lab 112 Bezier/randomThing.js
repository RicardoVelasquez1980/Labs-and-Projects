//Start Class randomThing##########
class RandomThing extends p5.Vector{
  constructor(x, y){
    super(x, y);
    this.loc2 = createVector(x + random(10, 200), y + random(10, 200));
    this.vel1 = p5.Vector.random2D();
    this.vel2 = p5.Vector.random2D();
    this.ctrl1 = createVector(x - random(20), y - random(20));
    this.ctrl2 = createVector(this.loc2.x + random(20), this.loc2.y + random(20));
    this.clr = color(random(255), random(255), random(255), 10);
  }

  run(){
    this.render();
    this.update();
  }

  render(){
    push();
    noFill();
    stroke(this.clr);
    strokeWeight(5);
    bezier(this.ctrl1.x, this.ctrl1.y, this.x, this.y, this.loc2.x, this.loc2.y, this.ctrl2.x, this.ctrl2.y);
    pop();
  }

  update(){
    this.add(this.vel1);
    this.ctrl1.add(p5.Vector.random2D());
    this.loc2.add(this.vel2);
    this.ctrl2.add(p5.Vector.random2D());
  }
}
//End Class randomThing##########
