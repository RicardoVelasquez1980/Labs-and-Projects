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
  }

  render() {
    fill(179, 37, 27);
    stroke(0);
    rect(this.x, this.y, gridWidth, gridHeight);
  }

  checkDetection() {
    let d = floor(this.dist(snake)); //Distance Of Snake To Food#####
    if (d === 0) {
      this.detection = true;
    }
  }
}
//End Class Food##########
