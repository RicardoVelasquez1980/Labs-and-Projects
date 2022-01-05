//Ricardo Velasquez
//Snake Game

//Start Snake Class##########
class Snake extends p5.Vector {
  constructor(x, y) {
    super(x, y); //Snake Location#####
    this.vel = createVector(0, 0); //SELF REMINDER: Come Back To Make It Go In One Direction From The Start%%%%%%%%%%%%%%%%%%%
    this.size = []; //Snake Size#####
    this.dead = false; //Snake Is Not Dead#####
    //Edges Used For checkCollision Function And For Constraints#####
    /*The -1 And +1 On The Egdes Is Because Of An Annoying Where
    The Posistion Of The Snake Was Greater Or Less Than The Edges
    By .0000000000000000001 Which Was Dumb*/
    this.topEdge = -1;
    this.bottomEdge = height - gridHeight + 1;
    this.leftEdge = -1;
    this.rightEdge = width - gridWidth + 1;
  }

  run() {
    this.render();
    if (!this.dead) {
      //If Snake Isn't Dead Then You Can Move#####
      this.move();
    }
    this.sizeIncrease();
    this.checkCollision();
  }

  render() {
    if (this.size.length > 0) {
      //Runs Segments(this.size) If The Size Is Greater Than 0#####
      for (let i = this.size.length - 1; i >= 0; i--) {
        //Going Backwards Allows The First Segments(this.size) To Be Over The Last Segments(this.size)#####
        fill(56 - (i + 1) * 2, 98 - (i + 1) * 2, 170 - (i + 1) * 2);
        stroke(0);
        rect(this.size[i].x, this.size[i].y, gridWidth, gridHeight);
      }
    }

    //Constrains#####
    let xCon = constrain(this.x, this.leftEdge, this.rightEdge);
    let yCon = constrain(this.y, this.topEdge, this.bottomEdge);
    fill(56, 98, 170);
    stroke(0);
    rect(xCon, yCon, gridWidth, gridHeight);
  }

  move() {
    //If Size Is Greater Than 0 Then The Additional Snake Segments(this.size) Are Given The Position Of Its Previous Segment#####
    if (this.size.length > 0) {
      for (let i = this.size.length - 1; i > 0; i--) {
        //Location Of Previous Given To Current#####
        this.size[i].x = this.size[i - 1].x;
        this.size[i].y = this.size[i - 1].y;
      }
      //Location Of The First Segment(this.size) Given Snake Head Location#####
      this.size[0].x = this.x;
      this.size[0].y = this.y;
    }
    this.add(this.vel); //Location Of Snake Head Changed#####
  }

  sizeIncrease() {
    if (food.detection) {
      //If Snake Touches Food#####
      this.size.push(createVector(food.x, food.y)); //New Segment(this.size)#####
      food.detection = false; //Food Detection Goes Back To False#####
      //Food Given A New Random Location#####
      let fx = ceil(random(columns - 1)) * gridWidth;
      let fy = ceil(random(rows - 1)) * gridHeight;
      food.x = fx;
      food.y = fy;
    }
  }

  checkCollision() {
    //Snake Dead If Any Of The Following Is True#####
    if (this.x < this.leftEdge) {
      this.dead = true;
    } else if (this.x > this.rightEdge) {
      this.dead = true;
    } else if (this.y < this.topEdge) {
      this.dead = true;
    } else if (this.y > this.bottomEdge) {
      this.dead = true;
    }
  }
}
//End Snake Class##########
