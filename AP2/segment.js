//Ricardo Velasquez
//AP2

//Start Class Segment##########
class Segment extends p5.Vector{
  constructor(firstIndex, secondIndex){
    super(dots[firstIndex].x, dots[firstIndex].y);
    this.loc2 = createVector(dots[secondIndex].x, dots[secondIndex].y);
    this.clr = color(175, 0, 255, 30);
    this.sz = 1;
    this.lifeSpan = 255;

  }

  run(){
    this.render();
    this.selfDestruct();

  }

  render(){
    push();
    noFill();
    stroke(this.clr);
    strokeWeight(this.sz);
    line(this.x, this.y, this.loc2.x, this.loc2.y);
    pop();

  }

  selfDestruct(){
    this.lifeSpan -= dots.length * 2;

    let index = 0;
    for (let i = 0; i < segments.length; i++){
      if (this === segments[i]){
        index = i;

      }

    }

    if (this.lifeSpan <= 0){
      segments.splice(1, index);

    }

  }

}
//End Class Segment##########
