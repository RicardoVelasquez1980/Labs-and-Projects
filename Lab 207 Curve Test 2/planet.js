//Ricardo Velasquez
//Lab 207 Curve Test 2

//Start Class Planet##########
class Planet extends p5.Vector{
  constructor(){
    super(0, 0);//Temp Location#####
    this.angleRotation = random(TWO_PI);//Angle#####
    this.angleSpeed = random(-0.05, 0.05);//Speed In Which Planet Rotates#####
    this.orbitRad = random(180, 600);//Distance From Sun#####
    this.dia = random(40, 90);
    this.clr = color(random(255), random(255), random(255));
    this.detailSz = random(3, 10);//Thickness Of The Bezier Detail#####

  }

  run(){
    this.render();
    this.renderDetail();
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
    this.angleRotation += this.angleSpeed;//Angle Changes With Change Of Angle#####

    this.x = sun.x + cos(this.angleRotation) * this.orbitRad;//Change Of X Position#####
    this.y = sun.y + sin(this.angleRotation) * this.orbitRad;//Change Of Y Position#####

  }

  renderDetail(){
    push();
    translate(this.x, this.y);//Origin Set To Middle Of Planet#####
    noFill();
    stroke(255 - this.clr.levels[0], 255 - this.clr.levels[1], 255 - this.clr.levels[2]);//Streok Color The Inverse Of Planet Color#####
    strokeWeight(this.detailSz);
    bezier(-this.dia / 2 - 1, -1, -this.dia / 2, this.dia / 4, this.dia / 2, this.dia / 4 + 1, this.dia / 2 + 1, 0);//Detail Made#####
    pop();

  }

}
//End Class Planet##########
