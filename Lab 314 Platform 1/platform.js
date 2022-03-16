//Ricardo Velasquez
//Lab 314 Platform 1

//Start Class Platform##########
class Platform extends p5.Vector{
  constructor(x, y, lngth){
    super(x, y);
    this.length = lngth;
    this.width = 30
    this.topBound = this.y;
    this.bottomBound = this.y + this.width;
    this.leftBound = this.x;
    this.rightBound = this.x + this.length;

  }

  render(){
    push();
    fill(255);
    noStroke();
    rect(this.x, this.y, this.length, this.width);
    pop();

  }

}
//End Class Platform##########
