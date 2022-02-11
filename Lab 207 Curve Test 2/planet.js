//Ricardo Velasquez
//Lab 207 Curve Test 2

//Start Class Planet##########
class Planet extends p5.Vector{
  constructor(){
    super(0, 0);
    this.angleRotation = random(TWO_PI);
    this.angleSpeed = random(-0.05, 0.05);
    this.orbitRad = random(180, 600);
    this.dia = random(40, 90);
    this.clr = color(random(255), random(255), random(255));

  }

  run(){
    this.render();
    // this.renderDetail();
    this.rotatePlanet();


  }

  render(){
    push();
    noStroke();
    fill(this.clr);
    ellipse(this.x, this.y, this.dia);
    pop();

  }

  rotatePlanet(){
    this.angleRotation += this.angleSpeed;

    this.x = sun.x + cos(this.angleRotation) * this.orbitRad;
    this.y = sun.y + sin(this.angleRotation) * this.orbitRad;

  }

}
//End Class Planet##########
