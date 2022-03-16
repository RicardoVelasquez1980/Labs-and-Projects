//Ricardo Velasquez
//Lab 314 Platform 1

//Start Class Platform##########
class Platform extends p5.Vector{
  constructor(x, y, lngth){
    super(x, y);
    this.length = lngth;

  }

  render(){
    push();
    fill(255, 200, 255);
    noStroke();
    rect(this.x, this.y, this.length, 30);
    pop();

  }

}
//End Class Platform##########
