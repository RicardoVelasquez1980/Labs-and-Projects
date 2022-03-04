//Ricardo Velasquez
//Game Of Life

//Start Class PauseButton##########
class PauseButton extends p5.Vector{
  constructor(){
    super((windowWidth - width) / 2 + width, height);
    this.btnSz = 30;
    this.mouseOverBtn = false;
    this.clr = [20, 184, 126, 255];

  }

  run(){
    rectMode(CENTER);

    this.clr = !this.mouseOverBtn ? [20, 184, 126, 255] : [15, 150, 103, 255];

    if (pause) this.renderPaused();
    if (!pause) this.renderNotPaused();
    this.mouseOverBtn = this.checkMouse();


  }

  renderPaused(){}

  renderNotPaused(){}

  checkMouse(){
    if (mouseX <= this.x + this.btnSz / 2 &&
    mouseX >= this.x - this.btnSz / 2 &&
    mouseY <= this.y + this.btnSz / 2 &&
    mouseY >= this.y - this.btnSz / 2){
      return true;

    } else {
      return false;
      
    }

  }

}
//End Class PauseButton##########
