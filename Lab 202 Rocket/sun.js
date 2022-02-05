//Ricardo Velasquez
//Lab 202 Rocket

//Start Class Sun##########
class Sun extends p5.Vector{
  constructor(){
    super(width / 2, height / 2);
    this.detailQty = ceil(random(15, 30));
  }

  run(){
    this.renderDetail();
    this.renderBall();

  }

  renderBall(){
    //White Overlay#####
    push();
    noStroke();
    fill(random(175, 255));
    ellipse(this.x, this.y, 80);
    pop();

    push();
    noStroke();
    fill(240, 176, 26, 175);
    ellipse(this.x, this.y, 80);
    pop();
  }

  renderDetail(){
    let xOffPos = random(21, 35);
    let yOffPos = random(14, 17);
    let angleDist = TWO_PI / this.detailQty;

    for (let i = 0; i < this.detailQty; i++){
      //White Overlay
      push();
      translate(this.x, this.y);
      rotate(angleDist * i);
      noStroke();
      fill(random(150, 255));
      quad(39, 0, 39, -yOffPos, 39 + xOffPos, 0, 39, yOffPos);
      pop();

      push();
      translate(this.x, this.y);
      rotate(angleDist * i);
      noStroke();
      fill(240, 176, 26, 175);
      quad(39, 0, 39, -yOffPos, 39 + xOffPos, 0, 39, yOffPos);
      pop();

    }
  }

}
//End Class Sun##########
