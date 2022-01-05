//Ricardo Velasquez
//Snake Game

//Start Class Food##########
class Food extends p5.Vector {
  constructor(x, y) {
    super(x, y); //Food Location#####
    this.detection = false; //Detection By Snake Is False#####
  }

  run() {
    this.render();
    this.checkDetection();
    this.underSnake();
  }

  render() {
    imageMode(CORNER);
    image(apple, this.x, this.y, gridWidth, gridHeight);
  }

  checkDetection() {
    let d = floor(this.dist(snake)); //Distance Of Snake To Food#####
    if (d === 0) {
      this.detection = true;
      if (soundToggle) {
        eatSound.play();
      }
    }
  }

  underSnake() {
    if (snake.size.length > 0) {
      for (let i = 0; i < snake.size.length; i++) {
        let distance = floor(
          dist(snake.size[i].x, snake.size[i].y, this.x, this.y)
        );
        if (!distance) {
          //Food Given A New Random Location#####
          let fx = ceil(random(columns - 1)) * gridWidth;
          let fy = ceil(random(rows - 1)) * gridHeight;
          this.x = fx;
          this.y = fy;
        }
      }
    }
  }
}
//End Class Food##########
