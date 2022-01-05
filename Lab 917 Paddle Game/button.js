//Ricardo Velasquez
//Lab 922 Paddle Game

//Start Class Button##########
class Button {
  constructor(x, y, w, l, msg, s) {
    this.loc = createVector(x, y);
    this.w = w; //Button Width#####
    this.l = l; //Button Length/Height#####
    this.msg = msg; //Text on Button#####
    this.s = s; //Size of Message#####
    this.clr1 = color(138, 46, 184); //Color for Buttons#####
    this.clr2 = color(37, 168, 204); //Color for Text#####
    this.mouseIsOverButton = false;
  }

  run() {
    this.render();
    this.update();
    this.mouseOverButton();
  }

  render() {
    let x; //Helps With Centering Text#####
    let y; //Helps with Centering Text#####
    if (this.loc.x < width / 2 && this.loc.x + this.w < width / 2) {
      //If Buttons X Coordinate is Less Than Half the Screen#####
      x = this.w / 2 + 10;
    } else if (this.loc.x > width / 2 && this.loc.x + this.w > width / 2) {
      //If Buttons X Coordinate is Greater Than Half the Screen#####
      x = width - this.w / 2 - 10;
    } else {
      //If Buttons X Coordinate Applies to Neither Above
      x = width / 2;
    }
    if (this.loc.y < height / 2 && this.loc.y + this.l < height / 2) {
      //If Buttons Y Coordinate is Less Than Half the Screen#####
      y = this.loc.y + this.l / 2 + 25;
    } else if (this.loc.y > height / 2 && this.loc.y + this.l > height / 2) {
      //If Buttons Y Coordinate is Greater Than Half the Screen#####
      y = this.loc.y + this.l / 2 + 15;
    } else {
      //If Buttons Y Coordinate Applies to Neither Above#####
      y = height / 2;
    }
    stroke(4);
    fill(this.clr1);
    rect(this.loc.x, this.loc.y, this.w, this.l);
    textSize(this.s);
    textFont(staatliches);
    textStyle(BOLD);
    textAlign(CENTER);
    fill(this.clr2);
    text(this.msg, x, y);
  }

  update() {
    if (this.mouseIsOverButton === false) {
      //If Mouse is Not Over a Button#####
      this.clr1 = color(138, 46, 184); //Original Button Color#####
      this.clr2 = color(37, 168, 204); //Original Text Color#####
    } else if (this.mouseIsOverButton) {
      //If Mouse is Over a Button#####
      this.clr1 = color(163, 103, 201); //New Button Color#####
      this.clr2 = color(125, 179, 219); //New Text Color#####
    }
  }

  mouseOverButton() {
    if (
      //Detection if Mouse is Over Button#####
      mouseX < this.loc.x + this.w &&
      mouseX > this.loc.x &&
      mouseY < this.loc.y + this.l &&
      mouseY > this.loc.y
    ) {
      this.mouseIsOverButton = true;
    } else {
      this.mouseIsOverButton = false;
    }
  }
}
//End Class Button##########
