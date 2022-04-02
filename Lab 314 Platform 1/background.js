//Ricardo Velasquez
//Lab 314 Platform 1

//Start Class BackgroundLayer##########
class Background extends p5.Vector{
  constructor(i){
    super(0, 0);
    this.vel = createVector(0, 0);
    this.img = loadImage("Layer " + (i + 1) + ".png");
    this.loc2 = createVector(this.img.width, 0);
    this.loc3 = createVector(-this.img.width, 0);
    this.speed = pow(2, i);

  }

  render(){
    this.img.resize(width, 0);
    image(this.img, this.x, this.y);
    image(this.img, this.loc2.x, this.loc2.y);
    image(this.img, this.loc3.x, this.loc3.y);

  }

  update(){
    this.move();
    this.reposistion();

  }

  move(){
    this.vel.x = gameName.platforms[0].vel.x / this.speed;

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
