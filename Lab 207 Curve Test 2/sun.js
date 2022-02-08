//Ricardo Velasquez
//Lab 207 Curve Test 2

//Start Class Sun##########
class Sun extends p5.Vector{
  constructor(){
    super(width / 2, height / 2);
    this.dia = random(60, 80);
    this.detailQty = ceil(random(15, 30));//Number Of Sun Rays#####

  }

  run(){
    this.render();
    this.renderDetail();

  }

  render(){
    //White Overlay#####
    push();
    fill(255, 255, 255);
    noStroke();
    ellipse(this.x, this.y, this.dia);
    pop();

    //Orange Overlay#####
    push();
    fill(242, 185, 12, random(175, 255));
    noStroke();
    ellipse(this.x, this.y, this.dia);
    pop();

  }

  renderDetail(){
    let xOffPos = random(20);//Shimmering#####
    let yOffPos = random(14, 17);
    let angleDist = TWO_PI / this.detailQty;//Evenly Rotates Each Ray#####

    for (let i = 0; i < this.detailQty; i++){
      //White Overlay#####
      push();
      translate(this.x, this.y);
      rotate(angleDist * i);
      noStroke();
      fill(255, 255, 255);
      quad(30, 0, 30, -yOffPos, 30 + xOffPos, 0, 30, yOffPos);
      pop();

      //Orange Overlay#####
      push();
      translate(this.x, this.y);
      rotate(angleDist * i);
      noStroke();
      fill(242, 185, 12, random(175, 255));
      quad(30, 0, 30, -yOffPos, 30 + xOffPos, 0, 30, yOffPos);
      pop();

    }
  }

}
//End Class Sun##########
