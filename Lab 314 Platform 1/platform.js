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

  update(){
    this.move();
    this.boundsUpdate();
    this.tp();

  }

  //Start Of Plyer Input Functions##########
    move(){
      //Move Left/Right#####
      if (keyIsDown(LEFT_ARROW)){
        this.vel.x = gameName.player.speed;

      } else if (keyIsDown(RIGHT_ARROW)){
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

    tp(){
      if (this.x <= -(gameName.farthest / 4)){
        // let lngth = random(80, 150);
        // let spacing = random(30, 60);
        // let x = (i * lngth) + spacing;
        let y = random(height * 0.25, height * 0.75);
        gameName.loadPlatforms("NEW", gameName.platforms.length, lngth, spacing, x, y);

      }

    }

}
//End Class Platform##########
