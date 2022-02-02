//Ricardo Velasquez
//Lab 202 Rocket

//Start Class Planet##########
class Planet extends p5.Vector{
  constructor(){
    super(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.clr = color(0, random(255), 0, random(175, 255));
    this.dia = random(16, 32);

  }

  run(){
    this.render();
    // this.flee();
    this.tp();

  }

  render(){
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.clr);
    ellipse(0, 0, this.dia);
    pop();
  }

  flee(){
    let distance = dist(this.x, this.y, rocket.x, rocket.y);
  }

  tp(){}

}
//End Class Planet##########
