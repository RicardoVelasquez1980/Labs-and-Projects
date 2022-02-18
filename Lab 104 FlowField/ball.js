//Ricardo Velasquez
//AP1

//Start Class Ball##########
class Ball extends p5.Vector{
  constructor(){
    super(random(width), random(height));//Random Location#####
    this.vel = createVector(0, 0);//No Velocity From The Start#####
    this.acc = createVector(0, 0);//No Acceleration From The Start#####
    this.distanceFromCell = 0;//Var Used To Stor The Distance Of A Ball From ALL The Cells#####
  }

  run(){
    this.render();
    this.move();
    this.checkEdges();
  }

  render(){
    push();
    fill(255, 0, 0);
    noStroke();
    ellipse(this.x, this.y, 8);//Ellipse With A Radius Of 8#####
    pop();
  }

  move(){
    this.vel.limit(4);//Speed Limit Of 4#####
    this.vel.add(this.acc);//Velocity Updated#####
    this.add(this.vel);//Makes Ball Moves#####

    for (let i = 0; i < cols; i++){
      for (let j = 0; j < rows; j++){
        this.distanceFromCell = dist(this.x, this.y, lineIndicator[i][j].x, lineIndicator[i][j].y)
        if (this.distanceFromCell < 20 * sqrt(2)){//Multiplied By The SQRT Of 2 BC Of 45,45,90 Triangle Rule#####
          this.acc = p5.Vector.fromAngle(lineIndicator[i][j].angle);//Acceleration Updated To A Vector Made From The Closes Line Indicator Angle#####
        }
      }
    }

  }

  checkEdges(){//Checks When Half The Ball Has Reached Any Edge And Then Teleports It To The OtherSide#####
    if (this.x + 4 > width){
      this.x = 4.1;
    } else if (this.x - 4 < 0){
    this.x = width - 4.1;
    }

    if (this.y + 4 > height){
      this.y = 4.1;
    } else if (this.y - 4 < 0){
      this.y = height - 4.1;
    }
  }
}
//End Class Ball##########
