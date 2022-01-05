//Ricardo Velasquez
//Lab 1015 2D Array of Cell Objects

//Start Class Cell##########
class Cell {
  constructor(x, y, w, h, dia) {
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    this.dia = dia;
    this.clr1 = color(random(255), random(75), random(255));
    this.clr2 = color(random(75), random(255), random(75));
  }

  run(){
    this.renderRect();
    this.renderCircle();
  }

  renderRect() {
    fill(this.clr1);
    noStroke();
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }

  renderCircle(){
    fill(this.clr2);
    noStroke();
    ellipse(this.loc.x + this.w / 2, this.loc.y + this.h / 2, this.dia);
  }
}
//End Class Cell##########
