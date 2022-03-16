//Ricardo Velasquez
//Lab 314 Platform 1

//Start Class Player##########
class Player extends p5.Vector{
  constructor(x, y){
    super(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.speed = 7;
    this.onPlatform = false;

  }

  render(){
    push();
    fill(0, 255, 0);
    noStroke();
    ellipse(this.x, this.y, 40);
    pop();

  }

  update(){
    this.playerInput();
    this.movement();
    this.platformCollision();

  }

  playerInput(){
    //Move Left/Right#####
    if (keyIsDown(LEFT_ARROW)){
      this.vel.x = -this.speed;

    } else if (keyIsDown(RIGHT_ARROW)){
      this.vel.x = this.speed;

    } else {
      this.vel.x = 0;

    }

  }

  movement(){
    this.vel.add(this.acc);
    this.add(this.vel);

  }

  platformCollision(){}

}
//End Class Player##########
