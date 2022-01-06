//Ricardo Velasquez
//Lab 104 FlowField

//Start Class Indicator##########
class Indicator extends p5.Vector{
  constructor(x, y){
    super(x, y);
    this.loc2 = createVector(x + 20, y + 20);
    this.angle = random(TWO_PI);
  }

  run(){
    this.render();
  }

  render(){
    push();
    translate(this.x, this.y);
    // rotate(this.angle);
    noFill();
    stroke(0, 0, 255);
    strokeWeight(1);
    line(this.x, this.y, this.loc2.x, this.loc2.y);
    pop();
  }
}
//End Class Indicator##########
