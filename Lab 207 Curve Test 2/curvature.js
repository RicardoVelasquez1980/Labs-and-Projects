//Ricardo Velasquez
//Lab 207 Curve Test 2

//Start Class Curvature##########
class Curvature extends p5.Vector{
  constructor(planet1, planet2, moon1, moon2){//Takes In Indexs Of The Used Moons & Planets#####
    super(planets[planet1].x, planets[planet1].y);//Anchor 1 Position#####
    this.anch2 = createVector(planets[planet2].x, planets[planet2].y);//Anchor 2 Position#####
    this.cntrl1 = createVector(moons[moon1].x, moons[moon1].y);//Control 1 Position#####
    this.cntrl2 = createVector(moons[moon2].x, moons[moon2].y);//Control 2 Position#####

    // super(width / 4, height / 2);//Anchor 1 Position#####
    // this.anch2 = createVector(width - (width / 4), height / 2);//Anchor 2 Position#####
    // this.cntrl1 = createVector(width / 3, height / 4);//Control 1 Position#####
    // this.cntrl2 = createVector(width - (width / 3), height - (height / 4));//Control 2 Position#####

    this.clr = color(random(255), random(255), random(255));
    this.sz = random(5);

  }



  render(){
    push();
    noFill();
    stroke(255, 0, 0);
    strokeWeight(10);
    bezier(this.x, this.y, this.cntrl1.x, this.cntrl1.y, this.cntrl2.x, this.cntrl2.y, this.anch2.x, this.anch2.y);
    pop();

  }

}
//End Class Curvature
