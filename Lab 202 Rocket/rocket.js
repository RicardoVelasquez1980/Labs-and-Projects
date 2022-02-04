//Ricardo Velasquez
//Lab 202 Rocket

//Start Class Rocket##########
class Rocket extends p5.Vector{
  constructor(){
    super(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

  }

  run(){
    this.render();
    this.chase();
    this.checkEdges();
  }

  render(){
    push();
    translate(this.x, this.y);
    rotate(this.vel.heading());
    noStroke();
    fill(24, 171, 240, 200);
    quad(-15, -10, 0, 0, -15, 10, 25, 0);
    pop();

  }

  chase(){
    this.acc = p5.Vector.sub(planet, this);
    this.acc.normalize();
    this.acc.mult(0.2);

    this.vel.limit(3);
    this.vel.add(this.acc);

    this.add(this.vel);
  }

  checkEdges(){}

}
//End Class Rocket##########
