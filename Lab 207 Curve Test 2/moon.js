//Ricardo Velasquez
//Lab 207 Curve Test 2

//Start Class Moon##########
class Moon extends p5.Vector{
  constructor(planetIndex){
    super(0, 0);
    this.angleRotation = random(TWO_PI);
    this.angleRotSpeed = random(-0.1, 0.1);
    this.orbitRad = random(planets[planetIndex].dia, planets[planetIndex].dia * 2);
    this.dia = random(10, 30);
    this.clr = color(random(125, 255));
    this.planetIndex = planetIndex;

  }

  run(){
    this.render();
    // this.renderDetail();
    this.rotateMoon();

  }

  render(){
    push();
    noStroke();
    fill(this.clr);
    ellipse(this.x, this.y, this.dia);
    pop();

  }

  rotateMoon(){
    this.angleRotation += this.angleRotSpeed;

    this.x = planets[this.planetIndex].x + cos(this.angleRotation) * this.orbitRad;
    this.y = planets[this.planetIndex].y + sin(this.angleRotation) * this.orbitRad;

  }

}
//End Class Moon##########
