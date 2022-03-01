//Ricardo Velasquez
//Game Of Life

//Start Class LifeCell##########
class LifeCell extends p5.Vector{
  constructor(x, y){
    super(x, y);
    this.sideLength = cellWidth;
    this.alive = false;
    this.mouseOverCell = false;
    this.clr = [78, 212, 103, 255];

  }

  run(){
    if (this.alive){
      this.clr[3] = 255;

    } else if (!this.alive){
      this.clr[3] = 0;

    }

    this.render();
    this.mouseOverCell = this.checkMouse();
    // this.rules();

  }

  render(){
    push();
    fill(this.clr);
    stroke(76);
    strokeWeight(0.5);
    rect(this.x, this.y, this.sideLength);
    pop();

  }

  checkMouse(){
    if (mouseX >= this.x && mouseX <= this.x + this.sideLength &&
    mouseY >= this.y && mouseY <= this.y + this.sideLength){
      return true;

    } else {
      return false;

    }

  }

}
//End Class LifeCell##########
