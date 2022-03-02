//Ricardo Velasquez
//Game Of Life

//Start Class LifeCell##########
class LifeCell extends p5.Vector{
  constructor(x, y, xIndex, yIndex){
    super(x, y);
    this.sideLength = cellWidth;
    this.alive = false;
    this.mouseOverCell = false;
    this.clr = [78, 212, 103, 255];
    this.neighbors = this.findNeighbors(xIndex, yIndex);;//Array Containing 3 - 9 Cells#####

  }

  findNeighbors(x, y){
    let neighbors = [];
    let distFromCell = 1;

    for (let y = -1; y < 2; y++){
      neighbors[y + 1] = [];
      for (let x = -1; x < 2; x++){
        neighbors[y + 1]

      }

    }


    }

    return neighbors;

  }

  run(){
    /*
    Tenary Condition:
    Conidtion ? If True : If False;
    */
    this.clr[3] = this.alive ? 255 : 0;//Opacity Either 255 Or 0#####

    this.render();
    this.mouseOverCell = this.checkMouse();
    // this.rules();

    this.findNeighbors();

  }

  render(){
    push();
    fill(this.clr);
    stroke(76);//Half The Background Color#####
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
