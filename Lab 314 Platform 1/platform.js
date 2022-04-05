//Ricardo Velasquez
//Lab 314 Platform 1

//Start Class Platform##########
class Platform extends p5.Vector{
  constructor(x, y, lngth){
    super(x, y);
    this.vel = createVector(0, 0);
    this.length = lngth;//Horizontal#####
    this.width = 20;//Vertical#####
    this.topBound = this.y;
    this.bottomBound = this.y + this.width / 2; //Half The Width Of The Platform#####
    this.leftBound = this.x;
    this.rightBound = this.x + this.length;

  }

  render(i){
    push();
    fill(255);
    noStroke();
    rect(this.x, this.y, this.length, this.width);
    pop();

    push();
    noStroke();
    fill(0);
    textSize(10);
    text(i, this.x + this.length / 2, this.y + this.width / 2);
    pop();

  }

  update(i){
    this.move();
    this.boundsUpdate();
    this.tp(i);

  }

  //Start Of Plyer Input Functions##########
    move(){
      //Move Left/Right#####
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)){
        this.vel.x = gameName.player.speed;

      } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
        this.vel.x = -gameName.player.speed;

      } else {
        this.vel.x = 0;

      }

      //Change Pos#####
      this.add(this.vel);

    }

    boundsUpdate(){
      this.topBound = this.y;
      this.bottomBound = this.y + this.width / 2; //Half The Width Of The Platform#####
      this.leftBound = this.x;
      this.rightBound = this.x + this.length;

    }

    tp(i){
      if (this.x < -(gameName.farthestPlatform / 4)){

        this.x = gameName.farthestPlatform * 0.75 - 0.1;

      }

    }

}
//End Class Platform##########
