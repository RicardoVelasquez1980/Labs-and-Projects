//Ricardo Velasquez
//Lab 207 Curve Test 2

//Start Class Moon##########
class Moon extends p5.Vector{
  constructor(planetIndex){
    super(random(-(planets[planetIndex].dia * 1.5), planets[planetIndex].dia * 1.5), random(-(planets[planetIndex].dia * 1.5), planets[planetIndex].dia * 1.5));
    // super(planets[planetIndex].dia * 0.75, planets[planetIndex].dia * 0.75);//Location Based Off Planet Dia#####
    // super(0, 0);
    this.angleRotation = random(TWO_PI);
    this.angleRotSpeed = 10;
    this.dia = random(10, 30);
    this.clr = color(random(125, 255));
    this.distance = dist(this.x, this.y, planets[planetIndex].x, planets[planetIndex].y);
    this.planetIndex = planetIndex;

  }

  run(){
    // this.distance = dist(this.x, this.y, planets[this.planetIndex].x, planets[this.planetIndex].y);
    this.distance = dist(this.x, this.y, 0, 0);
    // this.distance = dist(mouseX, mouseY, planets[this.planetIndex].x, planets[this.planetIndex].y, planets[this.planetIndex].x, planets[this.planetIndex].y);
    // this.distance = dist(mouseX, mouseY, 0, 0);

    if (this.distance <= planets[this.planetIndex].dia || this.distance >= planets[this.planetIndex].dia * 1.5){
      this.x = random(-(planets[this.planetIndex].dia * 1.5), planets[this.planetIndex].dia * 1.5);
      this.y = random(-(planets[this.planetIndex].dia * 1.5), planets[this.planetIndex].dia * 1.5)

    } else {
      this.render();
      // this.renderDetail();
      this.rotateMoon();

    }

  }

  render(){
    push();
    translate(sun.x + planets[this.planetIndex].x, sun.y + planets[this.planetIndex].y);
    rotate(this.angleRotation);
    noStroke();
    fill(this.clr);
    ellipse(this.x, this.y, this.dia);

    textAlign(CENTER, CENTER);
    textSize(20);
    fill(255, 255);
    text(this.distance, 0, 0);

    pop();

  }

  rotateMoon(){
    this.angleRotation += this.angleRotSpeed / (this.distance * 4);

  }

}
//End Class Moon##########
