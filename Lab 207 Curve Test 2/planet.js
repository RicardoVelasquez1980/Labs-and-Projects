//Ricardo Velasquez
//Lab 207 Curve Test 2

//Start Class Planet##########
class Planet extends p5.Vector{
  constructor(){
    super(random(-600, 600), random(-600, 600));
    this.angleRotation = random(TWO_PI);
    this.angleRotSpeed = 40;
    this.dia = random(40, 90);
    this.rad = this.dia / 2;
    this.clr = color(random(255), random(255), random(255));
    this.distance = dist(this.x, this.y, 0, 0);

  }

  run(){
    this.distance = dist(this.x, this.y, 0, 0);

    textAlign(CENTER, CENTER);
    textSize(20);
    fill(255);
    text(this.distance, sun.x, sun.y);

    if (this.distance <= 90 + this.dia || this.distance >= 600){
      this.x = random(-600, 600);
      this.y = random(-600, 600);

    } else {
      this.render();
      // this.renderDetail();
      this.rotatePlanet();

    }

  }

  render(){
    push();
    translate(sun.x, sun.y);
    // rotate(this.angleRotation);
    noStroke();
    fill(this.clr);
    ellipse(this.x, this.y, this.dia);

    //TEMP: Area In Which Moons Spawn
    noFill();
    stroke(255, 0, 0);
    ellipse(this.x, this.y, this.dia * 2, this.dia * 2);
    // stroke(255);
    // ellipse(this.x, this.y, this.rad * 4, this.rad * 4);
    stroke(0, 255, 0);
    ellipse(this.x, this.y, this.dia * 4);
    // stroke(255);
    // ellipse(this.x, this.y, this.rad * 8, this.rad * 8);

    pop();

  }

  rotatePlanet(){
    this.angleRotation += this.angleRotSpeed / (this.distance * 4);

  }

}
//End Class Planet##########
