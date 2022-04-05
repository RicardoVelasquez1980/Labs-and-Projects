
//Start Class Background##########
class Background{
  constructor(i){
    //Ensure that the IMAGES NAMES are the same
    //Except for a number differentiating them
    //Ex: Image1.png   Image2.png   Image3.png
    //This is where the "i" in the for loop
    //Used to create each Image comes to play
    this.img = loadImage("Layer " + (i + 1) + ".png");
    //Three images because the image is being
    //Rendered 3 times
    //This creates the illusion of a seamless and infinite background
    this.loc1 = createVector(0, 0);
    this.loc2 = createVector(this.img.width, 0);
    this.loc3 = createVector(-this.img.width, 0);
    //This will be the speed
    //You can alter this however you like
    //In this case i decided to use the index of the Image
    this.vel = createVector((i + 1), 0);

  }

  run(){
    this.render();
    this.update();

  }

  render(){
    this.img.resize(width, 0);
    //Same Image rendered 3 times
    image(this.img, this.loc1.x, this.loc1.y);
    image(this.img, this.loc2.x, this.loc2.y);
    image(this.img, this.loc3.x, this.loc3.y);

  }

  update(){
    this.move();
    this.reposistion();

  }

  move(){
    if (keyIsDown(LEFT_ARROW)){
      //When going LEFT
      this.loc1.add(this.vel);
      this.loc2.add(this.vel);
      this.loc3.add(this.vel);

    } else if (keyIsDown(RIGHT_ARROW)){
      //When going RIGHT
      this.loc1.sub(this.vel);
      this.loc2.sub(this.vel);
      this.loc3.sub(this.vel);

    }

  }

  reposistion(){
    if (this.loc2.x <= 0 || this.loc3.x >= 0){
      //When either of the images 2 copies
      //Reach the center
      //Then reset their positions
      this.loc1.x = 0;
      this.loc2.x = this.img.width;
      this.loc3.x = -this.img.width;

    }

  }

}
//End Class Background##########
