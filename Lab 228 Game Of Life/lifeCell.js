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

    for (let i = 0; i < 8; i++){
      neighbors[i] = [];

    }

    neighbors[0][0] = y - 1;
    neighbors[0][1] = x - 1;

    neighbors[1][0] = y - 1;
    neighbors[1][1] = x;

    neighbors[2][0] = y - 1;
    neighbors[2][1] = x + 1;

    neighbors[3][0] = y ;
    neighbors[3][1] = x - 1;

    neighbors[4][0] = y ;
    neighbors[4][1] = x + 1;

    neighbors[5][0] = y + 1;
    neighbors[5][1] = x - 1;

    neighbors[6][0] = y + 1;
    neighbors[6][1] = x;

    neighbors[7][0] = y + 1;
    neighbors[7][1] = x + 1;

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
