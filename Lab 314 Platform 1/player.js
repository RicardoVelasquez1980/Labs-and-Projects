//Ricardo Velasquez
//Lab 314 Platform 1

//Start Class Player##########
class Player extends p5.Vector{
  constructor(x, y){
    super(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

  }

  render(){
    push();
    fill(0, 255, 0);
    noStroke();
    ellipse(this.x, this.y, 40);
    pop();

  }

  move(){}

  jump(){}

  checkCollision(){}

}
//End Class Player##########
