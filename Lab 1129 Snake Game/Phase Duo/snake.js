//Ricardo Velasquez
//Snake Game

//Start Snake Class##########
class Snake extends p5.Vector {
  constructor(x, y) {
    super(x, y); //Snake Location#####
    this.vel = createVector(gridWidth , 0); //SELF REMINDER: Come Back To Make It Go In One Direction From The Start%%%%%%%%%%%%%%%%%%%
    this.size = []; //Snake Size#####
    this.dead = false; //Snake Is Not Dead#####
    //Edges Used For checkCollision Function And For Constraints#####
    /*The -1 And +1 On The Egdes Is Because Of An Annoying Where
    The Posistion Of The Snake Was Greater Or Less Than The Edges
    By .0000000000000000001 Which Was Dumb*/
    this.topEdge = -1;
    this.bottomEdge = height - gridHeight + 1;
    this.leftEdge = -1;
    this.rightEdge = width - gridWidth + 1
    this.snakeAngle = HALF_PI;
    this.gridCenter = {
      widthCenter: 0,
      heightCenter: 0
    };
    // this.w = 0;
    // this.h = 0;
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
    /*
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
    */

    if (this.size.length > 0) {
      //Runs Segments(this.size) If The Size Is Greater Than 0#####
      for (let i = this.size.length - 1; i > 0; i--) {
        // Going Backwards Allows The First Segments(this.size) To Not Be Over The Last Segments(this.size)#####
        this.size[i].snakeAngle = this.size[i - 1].snakeAngle;
        push();
        this.gridCenter.widthCenter = this.size[i].x + (gridWidth / 2);
        this.gridCenter.heightCenter = this.size[i].y + (gridHeight / 2);
        translate(this.gridCenter.widthCenter, this.gridCenter.heightCenter);
        rotate(this.size[i].snakeAngle);
        if (i === this.size.length - 1){
          image(snakeTail, -gridWidth / 2, - gridHeight / 2, gridWidth, gridHeight);
        } else{
          image(snakeBody, -gridWidth / 2, - gridHeight / 2, gridWidth, gridHeight);
        }
        pop();
      }

      push();
      this.size[0].snakeAngle = this.snakeAngle;
      this.gridCenter.widthCenter = this.size[0].x + (gridWidth / 2);
      this.gridCenter.heightCenter = this.size[0].y + (gridHeight / 2);
      translate(this.gridCenter.widthCenter, this.gridCenter.heightCenter);
      rotate(this.size[0].snakeAngle);
      if (this.size.length === 1){
        image(snakeTail, -gridWidth / 2, - gridHeight / 2, gridWidth, gridHeight);
      } else if (this.size.length > 1){
        image(snakeBody, -gridWidth / 2, - gridHeight / 2, gridWidth, gridHeight);
      }
      pop();
    }

    push();
    this.gridCenter.widthCenter = this.x + (gridWidth / 2);
    this.gridCenter.heightCenter = this.y + (gridHeight / 2);
    translate(this.gridCenter.widthCenter, this.gridCenter.heightCenter);
    rotate(this.snakeAngle);
    image(snakeHead, -gridWidth / 2, - gridHeight / 2, gridWidth, gridHeight);
    pop();
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
      if (soundToggle) {
        loseSound.play();
      }
    } else if (this.x > this.rightEdge) {
      this.dead = true;
      if (soundToggle) {
        loseSound.play();
      }
    } else if (this.y < this.topEdge) {
      this.dead = true;
      if (soundToggle) {
        loseSound.play();
      }
    } else if (this.y > this.bottomEdge) {
      this.dead = true;
      if (soundToggle) {
        loseSound.play();
      }
    }
    if (this.size.length > 0) {
      for (let i = 0; i < this.size.length; i++) {
        let distance = floor(
          dist(this.x, this.y, this.size[i].x, this.size[i].y)
        );
        if (!distance) {
          this.dead = true;
          if (soundToggle) {
            loseSound.play();
          }
        }
      }
    }
  }
}
//End Snake Class##########
