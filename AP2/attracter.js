//Ricardo Velasquez
//AP2

//Start Class Attracter##########
class Attracter extends p5.Vector{
  constructor(){
    super(random(width), random(height));
    this.vel = p5.Vector.random2D();

  }

  run(){
    if (attracterShown){
      this.render();

    }
    this.move();
    this.checkEdges();

  }

  render(){
      push();
      noFill();
      stroke(255);
      strokeWeight(1);
      point(this.x, this.y);
      pop();
  }

  move(){
    this.add(this.vel);

  }

  checkEdges(){
    if (this.x < 0){
      this.x = width - 0.01;

    } else if (this.x > width){
      this.x = 0.01;

    }

    if (this.y < 0){
      this.y = height - 0.01;

    } else if (this.y > height){
      this.y = 0.01;

    }

  }

}
//End Class Attracter##########
