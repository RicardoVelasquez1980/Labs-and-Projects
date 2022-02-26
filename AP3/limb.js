//Ricardo Velasquez
//AP3

//Start Class TreeLimb##########
class TreeLimb extends p5.Vector{
  constructor(startX, startY, angle, lifeSpan){
    super(startX, startY);
    this.loc2 = createVector(startX, startY);
    this.vel = createVector(0, 0);
    this.acc = p5.Vector.fromAngle(angle);
    this.angle = angle;
    this.startingLifeSpan = lifeSpan;
    this.lifeSpan = lifeSpan;
    this.growToggle = true;
    this.shrinkToggle = false;
    this.branchToggle = false;
    this.opacity = 255;

  }

  run(){
    this.lifeSpan--;
    this.render();
    if (this.growToggle) this.grow();
    if (this.shrinkToggle) this.shrink();
    if (this.branchToggle) this.branch();

  }

  render(){
    push();
    noFill();
    stroke(255, 255, 255, this.opacity);
    strokeWeight(2);
    line(this.x, this.y, this.loc2.x, this.loc2.y);
    pop();

    // push();
    // noFill();
    // stroke(255, 0, 0);
    // strokeWeight(12);
    // point(this.loc2.x, this.loc2.y)
    // pop();

  }

  grow(){
    if (this.lifeSpan > 0){
      this.vel.add(this.acc);
      this.loc2.add(this.vel);

    } else {
      this.branchToggle = true;
      this.growToggle = false;

    }

  }

  shrink(){
    this.startingLifeSpan--;

    if (this.startingLifeSpan > 0){
      this.vel.add(this.acc);
      this.add(this.vel);

    }

  }

  branch(){
    if (treeLimbs.length < pow(2, 7) - 2){
      treeLimbs.push(new TreeLimb(this.loc2.x, this.loc2.y, this.angle - (PI / 6), this.startingLifeSpan * 0.9))
      treeLimbs.push(new TreeLimb(this.loc2.x, this.loc2.y, this.angle + (PI / 6), this.startingLifeSpan * 0.9))

    }

    dots.push(new Dot(this.loc2.x, this.loc2.y));

    this.vel = createVector(0, 0);

    this.branchToggle = false;

  }

}
//End Class TreeLimb##########
