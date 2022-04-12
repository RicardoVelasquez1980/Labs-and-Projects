//Ricardo Velasquez
//Lab 314 Platform 1

//Start Class Platform##########
class Platform extends p5.Vector{
  constructor(x, y, lngth){
    super(x, y);
    this.vel = createVector(0, 0);
    this.length = lngth;//Horizontal#####
    this.width = 20;//Vertical#####
    this.platformTyp;
    this.platformImg = this.decideImg(lngth);
    this.topBound;
    this.bottomBound;
    this.leftBound;
    this.rightBound;

  }

  decideImg(l){
    let img;

    if (l <= 100){
      img = loadImage("Platforms 1.png");
      this.platformTyp = "SMALL";

    } else if (l > 100 && l <= 130){
      img = loadImage("Platforms 2.png");
      this.platformTyp = "MED";

    } else if (l > 130){
      img = loadImage("Platforms 3.png");
      this.platformTyp = "LARGE";

    }

    return img;

  }

  render(){
    // push();
    // fill(255);
    // noStroke();
    // rect(this.x, this.y, this.length, this.width);
    // pop();

    push();
    // imageMode(CENTER);
    this.platformImg.resize(this.length, 0);
    image(this.platformImg, this.x, this.y);
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
      if (this.platformTyp === "SMALL"){
        this.topBound = this.y + 7;
        this.bottomBound = (this.y + this.width / 2) + 7; //Half The Width Of The Platform#####
        this.leftBound = this.x;
        this.rightBound = this.x + this.length;

      } else if (this.platformTyp === "MED"){
        this.topBound = this.y + 9;
        this.bottomBound = (this.y + this.width / 2) + 9; //Half The Width Of The Platform#####
        this.leftBound = this.x;
        this.rightBound = this.x + this.length;

      } else if (this.platformTyp === "LARGE"){
        this.topBound = this.y + 26;
        this.bottomBound = (this.y + this.width / 2) + 26; //Half The Width Of The Platform#####
        this.leftBound = this.x;
        this.rightBound = this.x + this.length;

      }

    }

    tp(){
      if (this.x < -(gameName.farthestPlatform / 4)){

        this.x = gameName.farthestPlatform * 0.75 - 0.1;

      }

    }

}
//End Class Platform##########
