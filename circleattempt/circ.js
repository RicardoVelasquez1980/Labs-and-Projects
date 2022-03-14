//Ricardo Velasquez
//circleattempt

//Start Class Circ##########
class Circ extends p5.Vector{
  constructor(){
    super(random(width), random(height));
    this.rad = 0;
    this.strokeSz = 0;
    this.incSpeed = random(0.001, 0.1)
    this.isColliding = this.checkStartCollision();

  }

  run(){
    this.render();
    this.inc();
    this.isColliding
    this.giveBirth();

  }

  render(){
    push();
    fill(255);
    // noStroke();
    stroke(0);
    strokeWeight(this.strokeSz);
    arc(this.x, this.y, this.rad, this.rad, 0, TWO_PI);
    pop();


  }

  inc(){
    this.rad += this.incSpeed;

    if (this.strokeSz < 5)
    this.strokeSz += this.incSpeed / 4;

  }

  checkStartCollision(){
    let distance = 100;//Temp Number, Will Be Changed#####
    for (let i = pixelBalls.length - 1; i >= 0; i--){
      if (this !== pixelBalls[i]){
        distance = this.dist(pixelBalls[i]);

        if (distance < 2){
          return true;

        }

      }

    }

    return false;

  }

  giveBirth(){
    if (pixelBalls.length < totalPB){
      pixelBalls.push(new Circ());

    }

  }

}
//End Class Circ##########
