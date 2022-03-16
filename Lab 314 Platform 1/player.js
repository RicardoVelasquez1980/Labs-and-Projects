//Ricardo Velasquez
//Lab 314 Platform 1

//Start Class Player##########
class Player extends p5.Vector{
  constructor(x, y){
    super(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.1);
    this.speed = 3;
    this.onPlatform = false;
    this.canJump = false;

  }

  render(){
    push();
    fill(255);
    stroke(255, 0, 0);
    strokeWeight(1);
    ellipse(this.x, this.y, 40);
    pop();

    push();
    stroke(255, 0, 0);
    strokeWeight(4);
    point(this.x, this.y);
    pop();

  }

  update(){
    this.move();
    this.onPlatform = this.platformCollision();

  }

  move(){
    //Move Left/Right#####
    if (keyIsDown(LEFT_ARROW)){
      this.vel.x = -this.speed;

    } else if (keyIsDown(RIGHT_ARROW)){
      this.vel.x = this.speed;

    } else {
      this.vel.x = 0;

    }

    //Fall & Fall Prevention#####
    if (!this.onPlatform){
      this.vel.add(this.acc);

    }

    //Change Pos#####
    this.add(this.vel);

  }

  jump(){
    if (this.onPlatform){
      this.vel.y = -3;

    }

  }

  platformCollision(){
    for (let i = 0; i < gameName.platforms.length; i++){
      if (this.y + 20 >= gameName.platforms[i].topBound &&
          this.y - 20 <= gameName.platforms[i].bottomBound &&
          this.x + 20 >= gameName.platforms[i].leftBound &&
          this.x - 20 <= gameName.platforms[i].rightBound){
            return true;
            this.vel.y = 0;

          }

    }
    return false;

  }

}
//End Class Player##########
