//Ricardo Velasquez
//Lab 202 RicardosAmazingCurveProject

//Start Class Swiggle##########
class Swiggle{
  constructor(){
    super(random(10, 20), height / 2);//First Loc Point#####
    this.endPoint = createVector(random(width - 10, width - 20), height / 2);//Last Loc Point#####
    this.leftCtrlPoint = createVector(random((width * 0.25) - 10, (width * 0.25) + 10), height / 2);//Left Control Point#####
    this.rightCtrlPoint = createVector(random((width * 0.75) - 10, (width * 0.75) + 10), height / 2);//Right Control Point#####
    this.clr = color(random(255), random(255), random(255), random(255));

  }

  render(){
    push();
    fill(this.clr);
    
    pop();
  }

}
//End Class Swiggle##########
