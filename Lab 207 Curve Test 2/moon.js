//Ricardo Velasquez
//Lab 207 Curve Test 2

//Start Class Moon##########
class Moon extends p5.Vector{
  constructor(planetIndex){//Takes In The Planet Being Orbited Index#####
    super(0, 0);//Temp Location#####
    this.angleRotation = random(TWO_PI);//Angle#####
    this.angleRotSpeed = random(-0.1, 0.1);//Change Of Angle#####
    this.orbitRad = random(planets[planetIndex].dia, planets[planetIndex].dia * 2);//Distance From Planet#####
    this.dia = random(10, 30);
    this.clr = random(125, 255);
    this.planetIndex = planetIndex;//Planet Index#####
    this.detailSz = random(3, 9);
    this.detailClr = color(random(255));
    this.detailPos = createVector(random(-(this.dia / 2 - this.detailSz), this.dia / 2 - this.detailSz), random(-(this.dia / 2 - this.detailSz), this.dia / 2 - this.detailSz));//Location Of Crator

  }

  run(){
    this.render();
    this.renderDetail();
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

  renderDetail(){
    push();
    translate(this.x, this.y);
    fill(this.detailClr);
    noStroke();
    ellipse(this.detailPos.x, this.detailPos.y, this.detailSz);
    pop();

  }

}
//End Class Moon##########
