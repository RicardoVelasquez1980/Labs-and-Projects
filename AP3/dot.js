//Ricardo Velasquez
//AP3

//Start Class Dot##########
class Dot extends p5.Vector{
  constructor(x, y){
    super(x, y);
    this.orbitLoc = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = p5.Vector.random2D();
    this.angle = QUARTER_PI;
    this.clr = 0
    this.freeOrbitToggle = false;
    this.distance = 100;

  }

  run(){
    this.checkDistance();
    this.render();
    this.dotClr();
    if (!this.freeOrbitToggle){
      this.orbit();
      this.orbitMove();

    } else{
      this.freeOrbit();

    }
    this.checkEdges();

  }

  render(){
    push();
    noFill();
    stroke(this.clr);
    strokeWeight(dotSize.value());
    point(this.x, this.y);
    pop();

  }

  dotClr(){
    if (this.x >= (width / 2) - 217 && this.x <= (width / 2) + 217){
      this.clr = brokenBottle.get(this.x - (width / 2) + 217, this.y);

    }

  }

  orbit(){
    this.angle += 0.2;

    this.x = this.orbitLoc.x + cos(this.angle) * dotOrbit.value();
    this.y = this.orbitLoc.y + sin(this.angle) * dotOrbit.value();

  }

  orbitMove(){
    this.vel.limit(sunVel.value());
    this.vel.add(this.acc);
    this.orbitLoc.add(this.vel);

  }

  freeOrbit(){
    this.add(this.acc);

  }

  checkEdges(){
    if (!this.freeOrbitToggle){
      if (this.orbitLoc.x < 0){
        this.orbitLoc.x = width;

      } else if (this.orbitLoc.x > width){
        this.orbitLoc.x = 0;

      }

      if (this.orbitLoc.y < 0){
        this.orbitLoc.y = height;

      } else if (this.orbitLoc.y > height){
        this.orbitLoc.y = 0;

      }

    } else if (this.freeOrbitToggle){
      if (this.x - dotSize.value() / 2 < 0){
        this.orbitLoc.x = width;

      } else if (this.x + dotSize.value() / 2 > width){
        this.x = 0;

      }

      if (this.y - dotSize.value() / 2 < 0){
        this.orbitLoc.y = height;

      } else if (this.y + dotSize.value() / 2 > height){
        this.y = 0;

      }

    }

  }

  checkDistance(){
    for (let i = 0; i < dots.length; i++){
      if (dots[i] !== this){
        this.distance = this.orbitLoc.dist(dots[i].orbitLoc);

      }

    }

    if (this.distance <= 10){
      this.freeOrbitToggle = true;

    }

  }

}
//End Class Dot##########
