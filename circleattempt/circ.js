//Ricardo Velasquez
//circleattempt

//Start Class Circ##########
class Circ extends p5.Vector{
  constructor(){
    super(random(width), random(height));
    this.rad = random(50);

  }

  run(){
    this.render();
    this.checkCollision();
    this.giveBirth();

  }

  render(){
    push();
    fill(255);
    noStroke();
    arc(this.x, this.y, this.rad, this.rad, 0, TWO_PI);
    pop();

  }

  checkCollision(){

  }

  giveBirth(){

  }

}
//End Class Circ##########
