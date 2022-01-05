//Ricardo Velasquez
//Lab 917 Paddle Game

//Start Class Shape##########
class Shape {
  constructor(x, y) {
    this.loc = createVector(x, y); //For All Shapes Except Triangles#####
    this.vel = createVector(0, 2);
    this.acc = createVector(0, 0.1);
    this.d1 = random(8, 24); //Shape Diameter 1, For Oval or Circle#####
    this.d2 = random(8, 24); //Shape Diameter 2, For Oval#####
    this.l = random(16, 24); //Shape Length, For Rect or Sqr#####
    this.w = random(16, 24); //Shape Width, For Rect#####
    //The Locations Below Are ONLY FOR TRIANGLES#####
    this.rx2 = random(8, 16);
    this.rx3 = random(8, 16);
    this.ry1 = random(8, 16);
    this.ry2 = random(8, 16);
    this.ry3 = random(8, 16);
    if (
      //If All Three Scale Values Are 256 then Shape Color is Random Else the Shape Color is the Value Given#####
      shapeColorR.value() === 256 &&
      shapeColorG.value() === 256 &&
      shapeColorB.value() === 256
    ) {
      this.clr = color(random(255), random(255), random(255)); //Random Shape Color#####
    } else {
      this.clr = color(
        shapeColorR.value(),
        shapeColorG.value(),
        shapeColorB.value()
      ); //Custom Shape Color#####
    }
  }

  run() {
    this.render();
    this.update();
    this.checkEdges();
    this.checkStuck();
  }

  render() {
    fill(this.clr);
    //Shape Rendered is Based Off ShapeID#####
    if (shapeID === 0) {
      ellipse(this.loc.x, this.loc.y, this.d1);
    } else if (shapeID === 1) {
      ellipse(this.loc.x, this.loc.y, this.d1, this.d2);
    } else if (shapeID === 2) {
      square(this.loc.x, this.loc.y, this.l);
    } else if (shapeID === 3) {
      rect(this.loc.x, this.loc.y, this.l, this.w);
    } else if (shapeID === 4) {
      triangle(
        this.loc.x,
        this.loc.y - this.ry1,
        this.loc.x - this.rx2,
        this.loc.y + this.ry2,
        this.loc.x + this.rx3,
        this.loc.y + this.ry3
      );
    }
  }

  update() {
    this.vel.add(this.acc); //Change of Velocity#####
    this.loc.add(this.vel); //Change of Location#####
  }

  checkEdges() {
    //Allows Shape to Bounce Off Edges#####
    //Shape Collision is Based Off ShapeID#####
    if (shapeID === 0) {
      if (this.loc.y < this.d1 / 2 || this.loc.y > height - this.d1 / 2) {
        this.vel.y = -this.vel.y;
      }
    } else if (shapeID === 1) {
      if (this.loc.y < this.d2 / 2 || this.loc.y > height - this.d2 / 2) {
        this.vel.y = -this.vel.y;
      }
    } else if (shapeID === 2) {
      if (this.loc.y < this.l / 2 || this.loc.y > height - this.l) {
        this.vel.y = -this.vel.y;
      }
    } else if (shapeID === 3) {
      if (this.loc.y < this.w / 2 || this.loc.y > height - this.w) {
        this.vel.y = -this.vel.y;
      }
    } else if (shapeID === 4) {
      if (
        this.loc.y - this.ry1 < this.loc.y - this.ry1 ||
        this.loc.y + this.ry3 > height
      ) {
        this.vel.y = -this.vel.y;
      }
    }
  }

  checkStuck() {
    //When Shape Get Stuck On Edges#####
    //Based Off ShapeID#####
    if (shapeID === 0) {
      if (this.loc.y > height + this.d1 / 2 || this.loc.y < this.d1 / 2 - 5) {
        this.loc.y = random(height - 200);
      }
      if (this.loc.x < this.d1 / 2 || this.loc.x > width - this.d1 / 2) {
        this.loc.x = random(width);
      }
    } else if (shapeID === 1) {
      if (this.loc.y > height + this.d2 / 2 || this.loc.y < this.d2 / 2 - 5) {
        this.loc.y = random(height - 200);
      }
      if (this.loc.x < this.d1 / 2 || this.loc.x > width - this.d1 / 2) {
        this.loc.x = random(width);
      }
    } else if (shapeID === 2) {
      if (this.loc.y > height + this.l / 2 || this.loc.y < this.l / 2 - 5) {
        this.loc.y = random(height - 200);
      }
      if (this.loc.x < this.l / 2 || this.loc.x > width - this.l / 2) {
        this.loc.x = random(width);
      }
    } else if (shapeID === 3) {
      if (this.loc.y > height + this.w / 2 || this.loc.y < this.w / 2 - 5) {
        this.loc.y = random(height - 200);
      }
      if (this.loc.x < this.l / 2 || this.loc.x > width - this.l / 2) {
        this.loc.x = random(width);
      }
    } else if (shapeID === 4) {
      if (this.loc.y > height || this.loc.y < -5) {
        this.loc.y = random(height - 200);
      }
      if (this.loc.x < 0 || this.loc.x > width) {
        this.loc.x = random(width);
      }
    }
  }
}
//End Class Shape##########
