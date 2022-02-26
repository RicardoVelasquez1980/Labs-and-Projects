//Ricardo Velasquez
//AP2

//Start Class Dot##########
class Dot extends p5.Vector{
  constructor(index){
    super(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0, 0);
    this.clr = color(255, 255, 0, 150);
    this.sz  = random(8, 12);
    this.distance = 0;
    this.index = index;
    this.attracterindex = floor(random(attracter.length));

  }

  run(){
    this.render();
    this.move();
    this.inNOut();//Attracted and Repelled#####
    this.checkEdges();

  }

  render(){
      push();
      noFill();
      stroke(this.clr);
      strokeWeight(this.sz);
      point(this.x, this.y);
      pop();
  }

  move(){
    this.acc = p5.Vector.sub(attracter[this.attracterindex], this);
    this.acc.normalize();
    this.acc.mult(0.5);

    this.vel.limit(15);
    this.vel.add(this.acc);

    this.add(this.vel);

  }

  inNOut(){
    for (let i = 0; i < dots.length; i++){
      if (dots[i] !== this){
        this.distance = this.dist(dots[i]);

      }

      if (this.distance < 150){
        segments.push(new Segment(this.index, i));

      }

    }

  }

  checkEdges(){
    if (this.x - this.sz / 2 < 0){
      this.x = width - this.sz;

    } else if (this.x + this.sz / 2 > width){
      this.x = this.sz;

    }

    if (this.y - this.sz / 2 < 0){
      this.y = height - this.sz;

    } else if (this.y + this.sz / 2 > height){
      this.y = this.sz;

    }

  }

}
//End Class Dot##########
