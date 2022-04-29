 //Ricardo Velasquez
//Lab 314 Platform 1

//Start Class BackgroundLayer##########
class Background extends p5.Vector{
  constructor(i){
    super(0, 0);
    this.img = loadImage("images/kvBackgrounds/b" + i + ".png");
    this.loc2 = createVector(this.img.width, height - this.img.height);
    this.loc3 = createVector(-this.img.width, height - this.img.height);
    this.vel = createVector(0, 0);
    this.speed = (i + 2) / 4;

    this.index = i

  }

  render(){
    this.y = height - this.img.height;
    this.loc2.y = height - this.img.height;
    this.loc3.y = height - this.img.height;
    // this.img.resize(width, 0);
    image(this.img, this.x, this.y);
    image(this.img, this.loc2.x, this.loc2.y);
    image(this.img, this.loc3.x, this.loc3.y);

  }

  update(){
    this.move();
    this.reposistion();

  }

  move(){
    let movementDirection = gameName.platforms[0].vel.x;
    if (movementDirection > 0){//Left#####
      this.vel.x = this.speed;

    } else if (movementDirection < 0){//Right#####
      this.vel.x = -this.speed;

    } else if (movementDirection === 0){//Still
      this.vel.x = 0;

    }

    this.add(this.vel);
    this.loc2.add(this.vel);
    this.loc3.add(this.vel);

  }

  reposistion(){
    if (this.loc2.x <= 0 || this.loc3.x >= 0){
      this.x = 0;
      this.loc2.x = this.img.width;
      this.loc3.x = -this.img.width;

    }

  }

}
//End Class BackgroundLayer##########
