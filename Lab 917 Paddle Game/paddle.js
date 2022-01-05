//Ricardo Velasquez
//Lab 917 Paddle Game

//Start Class Paddle##########
class Paddle {
  constructor(x, y) {
    this.loc = createVector(x, y);
    this.vel = createVector(0, 0); //If Arrows is Choosen#####
    this.acc = createVector(0.25, 0); //If Arrows is Choosen#####
    this.l = 50; //Length of Paddle#####
    this.w = 5; //Width/Height of Paddle#####
    this.clr = color(0, 175, 255); //Paddle Color#####
    this.control = "mouse"; //Default Game Controls#####
  }
  run() {
    this.render();
    this.controlType();
    this.checkEdges();
  }
  render() {
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.l, this.w);
  }

  controlType() {
    if (this.control === "mouse") {
      //If Mouse Controls Selected#####
      this.updateMouse();
    } else if (this.control === "arrows") {
      //If Arrow Controls Selected#####
      this.updateArrows();
    }
  }

  updateMouse() {
    this.loc = createVector(mouseX - this.l / 2, height - 150); //Paddle Follows Mouse#####
  }

  updateArrows() {
    this.vel.limit(10); //Velocity Limited#####
    if (keyIsDown(RIGHT_ARROW)) {
      //If Right Arrow is Pressed#####
      this.vel.add(this.acc);
      this.loc.add(this.vel);
    } else if (keyIsDown(LEFT_ARROW)) {
      //IF Left Arrow is Pressed#####
      this.vel.add(this.acc);
      this.loc.sub(this.vel);
    } else {
      this.vel.x = 0;
    }
  }

  checkEdges() {
    //Ensures That the Paddle Stays Within The Game Screen#####
    if (this.loc.x + this.l > width) {
      this.loc.x = width - this.l;
    }
    if (this.loc.x < 0) {
      this.loc.x = 0;
    }
  }
}
//End Class Paddle##########
