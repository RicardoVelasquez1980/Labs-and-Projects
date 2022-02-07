//Ricardo Velasquez
//Lab 202 RicardosAmazingCurveProject

//Start Class Swiggle##########
class Swiggle extends p5.Vector{
  constructor(){
    super(random(width * 0.25), height / 2);//First Loc Point#####
    this.endPoint = createVector(random(width * 0.75, width), height / 2);//Last Loc Point#####
    this.leftCtrlPoint = createVector(random((width * 0.25, width * 0.5)), height / 2);//Left Control Point#####
    this.rightCtrlPoint = createVector(random((width * 0.5, width * 0.75)), height / 2);//Right Control Point#####
    this.clr = color(random(100, 255), random(100, 255), random(100, 255), random(100, 255));
    this.sz = floor(random(1, 11));

  }

  run(){
    this.render();
    this.update();
  }

  render(){
    push();
    noFill();
    strokeWeight(this.sz);
    stroke(this.clr);
    bezier(this.x, this.y, this.leftCtrlPoint.x, this.leftCtrlPoint.y, this.rightCtrlPoint.x, this.rightCtrlPoint.y, this.endPoint.x, this.endPoint.y)
    pop();

  }

  update(){
    this.leftCtrlPoint.y += lftCtrlChng.value();
    this.rightCtrlPoint.y += rghtCtrlChng.value();

  }

}
//End Class Swiggle##########
