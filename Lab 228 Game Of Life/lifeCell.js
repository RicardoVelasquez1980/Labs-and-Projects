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

    this.xIndex = xIndex;
    this.yIndex = yIndex;

  }

  findNeighbors(x, y){
    let neighbors = [];
    let min = 0;
    let max = cols - 1;

    // neighbors[0] = "y1: " + (y - 1);
    // neighbors[1] = "x1: " + (x - 1);
    //
    // neighbors[2] = "y2: " + (y - 1);
    // neighbors[3] = "x2: " + (x);
    //
    // neighbors[4] = "y3: " + (y - 1);
    // neighbors[5] = "x3: " + (x + 1);
    //
    // neighbors[6] = "y4: " + (y);
    // neighbors[7] = "x4: " + (x - 1);
    //
    // neighbors[8] = "y5: " + (y);
    // neighbors[9] = "x5: " + (x + 1);
    //
    // neighbors[10] = "y6: " + (y + 1);
    // neighbors[11] = "x6: " + (x - 1);
    //
    // neighbors[12] = "y7: " + (y + 1);
    // neighbors[13] = "x7: " + (x);
    //
    // neighbors[14] = "y8: " + (y + 1);
    // neighbors[15] = "x8: " + (x + 1);
    //
    // for (let i = neighbors.length - 2; i >= 0; i -= 2){
    //   if (neighbors[i][4] === "-" || neighbors[i + 1][4] === "-"){
    //     neighbors.splice(i, 2);
    //
    //   }
    //
    // }

    neighbors[0] = y - 1;
    neighbors[1] = x - 1;

    neighbors[2] = y - 1;
    neighbors[3] = x;

    neighbors[4] = y - 1;
    neighbors[5] = x + 1;

    neighbors[6] = y;
    neighbors[7] = x - 1;

    neighbors[8] = y;
    neighbors[9] = x + 1;

    neighbors[10] = y + 1;
    neighbors[11] = x - 1;

    neighbors[12] = y + 1;
    neighbors[13] = x;

    neighbors[14] = y + 1;
    neighbors[15] = x + 1;

    for (let i = neighbors.length - 2; i >= 0; i -= 2){
      if (neighbors[i] < min || neighbors[i + 1] < min || neighbors[i] > max || neighbors[i + 1] > max){
        neighbors.splice(i, 2);

      }

    }

    console.log(this);

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

    if (!pause){
      this.rules();

    }

    // this.findNeighbors();

  }

  render(){
    push();
    fill(this.clr);
    stroke(76);//Half The Background Color#####
    strokeWeight(0.5);
    rect(this.x, this.y, this.sideLength);
    pop();

  }

  rules(){
    let y = 0;
    let x = 0;
    let liveCells = 0;
    // console.log("x: " + x + " y: " + y);

    for (let i = 0; i < this.neighbors.length; i += 2){
      y = this.neighbors[i];
      x = this.neighbors[i + 1];

      if (lifeCells[y][x].alive){
        liveCells++;
        // console.log(liveCells);

      }

    }

    if (liveCells === 3){
      this.alive = true;

    } else if (liveCells < 2 || liveCells > 3){
      this.alive = false;

    }

    // this.alive = liveCells === 3 ? true : false;

    // this.overPop();
    // this.underPop();

  }

  checkMouse(){
    if (mouseX >= this.x && mouseX <= this.x + this.sideLength &&
    mouseY >= this.y && mouseY <= this.y + this.sideLength){
      return true;

    } else {
      return false;

    }

  }

  creation(){


  }

}
//End Class LifeCell##########
