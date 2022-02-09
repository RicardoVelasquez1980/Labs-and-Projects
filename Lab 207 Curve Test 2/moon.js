//Ricardo Velasquez
//Lab 207 Curve Test 2

//Start Class Moon##########
class Moon extends p5.Vector{
  constructor(planetIndex){
    // super(random(-(planets[planetIndex].dia * 4), (planets[planetIndex].dia * 4)), random(-(planets[planetIndex].dia * 4), (planets[planetIndex].dia * 4)));//Location Based Off Planet Dia#####
    super(0, 0);
    this.angleRotation = random(TWO_PI);
    this.angleRotSpeed = 10;
    this.dia = random(10, 30);
    this.clr = color(random(125, 255));
    this.distance = dist(this.x, this.y, planets[planetIndex].x, planets[planetIndex].y);
    this.planetIndex = planetIndex;

  }

  run(){
    // this.distance = dist(this.x, this.y, planets[this.planetIndex].x, planets[this.planetIndex].y);
    // this.distance = dist(this.x, this.y, 0, 0);
    this.distance = dist(mouseX, mouseY, planets[this.planetIndex].x, planets[this.planetIndex].y, planets[this.planetIndex].x, planets[this.planetIndex].y);

    if (this.distance <= planets[this.planetIndex].dia + planets[this.planetIndex].rad || this.distance >= planets[this.planetIndex].dia * 4){
      this.x = random(-(planets[this.planetIndex].dia * 4), (planets[this.planetIndex].dia * 4));
      this.y = random(-(planets[this.planetIndex].dia * 4), (planets[this.planetIndex].dia * 4));

    } /*else {*/
      this.render();
      // this.renderDetail();
      // this.rotateMoon();

    // }

  }

  render(){
    push();
    // translate(planets[this.planetIndex].x, planets[this.planetIndex].y);
    translate(sun.x + planets[this.planetIndex].x, sun.y + planets[this.planetIndex].y);
    // rotate(this.angleRotation);
    noStroke();
    fill(this.clr);
    ellipse(this.x, this.y, this.dia);

    textAlign(CENTER, CENTER);
    textSize(20);
    fill(255, 255);
    text(this.distance, 0, 0);

    pop();

  }

}
//End Class Moon##########
