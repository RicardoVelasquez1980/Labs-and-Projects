//Ricardo Velasquez
//Lab 202 Rocket

//Start Class Rocket##########
class Rocket extends p5.Vector{
  constructor(){
    super(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.death = false;

  }

  run(){
    this.render();
    this.chase();

  }

  render(){
    push();
    translate(this.x, this.y);
    rotate(this.vel.heading());
    noStroke();
    fill(24, 171, 240, 200);
    quad(-15, -10, 0, 0, -15, 10, 25, 0);
    pop();

   let xOffPos = random(40, 45);

    //Red Overlay#####
    push();
    translate(this.x, this.y);
    rotate(this.vel.heading());
    noStroke();
    fill(199, 40, 40, random(150, 255));
    quad(-10, 0, -20, -5, -abs(random(10, 25) * this.vel.x), 0, -20, 5);
    //5th Parameter Allows The Speed Of The Rocket To Change The Size Of The Flame#####
    pop();

    //Orange Overlay#####
    push();
    translate(this.x, this.y);
    rotate(this.vel.heading());
    noStroke();
    fill(230, 142, 28, random(75, 150));
    quad(-10, 0, -20, -5, -abs(random(10, 25) * this.vel.y), 0, -20, 5);
    pop();

  }

  chase(){
    let distance = this.dist(sun);

    this.vel.limit(3);
    this.vel.add(this.acc);

    this.add(this.vel);

    if (distance <= 200){
      this.acc = p5.Vector.sub(this, sun);
      this.acc.normalize();
      this.acc.mult(0.06);

      // this.vel.add(this.acc);

    } else {
      this.acc = p5.Vector.sub(planet, this);
      this.acc.normalize();
      this.acc.mult(0.2);

      // this.vel.add(this.acc);

    }

    if (distance <= 130){
      this.death = true;

    }

  }

}
//End Class Rocket##########
