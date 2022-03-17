//Ricardo Velasquez
//Lab 314 Platform 1

//Start Class Player##########
class Player extends p5.Vector{
  constructor(x, y){
    super(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.1);
    this.speed = 3;
    this.sz = 40;
    this.onPlatform = false;

  }

  render(){
    push();
    fill(255);
    stroke(255, 0, 0);
    strokeWeight(1);
    ellipse(this.x, this.y, this.sz);
    pop();

    push();
    stroke(255, 0, 0);
    strokeWeight(4);
    point(this.x, this.y);
    pop();

  }

  update(){
    //Player Input#####
    this.move();

    //Background Forces#####
    if (!this.onPlatform) this.gravity();

    //Checks#####
    this.onPlatform = this.platformCollision();

  }

//Start Of Plyer Input Functions##########
  move(){
    //Move Left/Right#####
    if (keyIsDown(LEFT_ARROW)){
      this.vel.x = -this.speed;

    } else if (keyIsDown(RIGHT_ARROW)){
      this.vel.x = this.speed;

    } else {
      this.vel.x = 0;

    }

    //Change Pos#####
    this.add(this.vel);

  }

  jump(){
    console.log(this);
    if (this.onPlatform){
      this.vel.y = 0;
      this.vel.y = -3;

    }

  }
//End Of Plyer Input Functions##########


//Start Of Background Forces Functions##########
  gravity(){
    this.vel.add(this.acc);

  }
//End Of Background Forces Functions##########


//Start Of Check Functions##########
  platformCollision(){
    for (let i = 0; i < gameName.platforms.length; i++){
      if (this.y + this.sz / 2 >= gameName.platforms[i].topBound &&
          this.y + this.sz / 2 <= gameName.platforms[i].bottomBound &&
          this.x + this.sz / 2 >= gameName.platforms[i].leftBound &&
          this.x - this.sz / 2 <= gameName.platforms[i].rightBound /*&&
          this.vel.y > 0*/){
            // this.vel.y = 0;
            this.y = gameName.platforms[i].y - this.sz / 2;

            return true;

          }

    }
    return false;

  }
//Start Of Check Functions##########


}
//End Class Player##########
