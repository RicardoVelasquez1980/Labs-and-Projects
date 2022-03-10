//Ricardo Velasquez
//circleattempt

//Start Class Circ##########
class Circ extends p5.Vector{
  constructor(x, y, d){
    super(x, y);
    this.diam = d;
    this.isColliding = this.checkCollision();

  }

  run(){
    this.render();
    // this.checkCollision();
    this.giveBirth();

  }

  render(){
    push();
    fill(255);
    // noStroke();
    stroke(0);
    strokeWeight(4);
    arc(this.x, this.y, this.diam, this.diam, 0, TWO_PI);
    pop();


//Point For Testing%%%%%%%%%%%%%%%%
    if (this === pixelBalls[0]){
      push();
      noFill();
      stroke(255, 0, 0);
      strokeWeight(5);
      point(this.x, this.y);
      pop();

    }

  }

  checkCollision(){
    let distance = 100;//Temp Number, Will Be Changed#####
    for (let i = pixelBalls.length - 1; i >= 0; i--){
      if (this !== pixelBalls[i]){
        distance = this.dist(pixelBalls[i]);

        if (distance < (this.diam / 2) + (pixelBalls[i].diam / 2)){
          return true;

        }

      }

    }

    totalStill++;
    return false;

  }

  giveBirth(){
    let d = random(20, 100);
    let x = this.x + cos(random(TWO_PI)) * ((this.diam / 2) + (d / 2)) * 0.75;
    let y = this.y + sin(random(TWO_PI)) * ((this.diam / 2) + (d / 2)) * 0.75;

    if (pixelBalls.length < totalPB){
      pixelBalls.push(new Circ(x, y, d));

    }

  }

}
//End Class Circ##########
