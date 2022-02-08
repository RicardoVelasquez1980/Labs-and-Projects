//Ricardo Velasquez
//Lab 207 Curve Test 2

//Start Class Planet##########
class Planet extends p5.Vector{
  constructor(){
    super(random(width), random(height));//Temp Location#####
    this.angleRotation = random(TWO_PI);
    this.dia = random(50, 70);
    this.clr = color(random(255), random(255), random(255));

  }

  run(){
    let distance = p5.Vector.dist(this, sun);
    if (distance <= 90 || distance >= 400){
      this.x  = random(width);
      this.y = random(height);
    }

    this.render();
    this.renderDetail();
    this.rotatePlanet();

  }

  render(){
    push();
    translate()
    pop();

  }

}
//End Class Planet##########
