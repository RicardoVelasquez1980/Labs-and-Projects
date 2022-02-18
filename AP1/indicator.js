//Ricardo Velasquez
//AP1

//Start Class Indicator##########
class Indicator extends p5.Vector{
  constructor(x, y){
    super(x, y);//Location#####
    this.loc2 = createVector(gridWidth / 2, 0);//Second Location#####
    this.angle = noise(0, 0) * TWO_PI;//Random Angle Is Given#####
  }

  run(){
    this.render();
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
}
//End Class Indicator##########
