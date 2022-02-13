//Ricardo Velasquez
//Lab 207 Curve Test 2

//Start Class Curvature##########
class Curvature extends p5.Vector{
  constructor(planet1, planet2, moon1, moon2){//Takes In Indexs Of The Used Moons & Planets#####
    super(planets[planet1].x, planets[planet1].y);//Anchor 1 Position#####
    this.anch2 = createVector(planets[planet2].x, planets[planet2].y);//Anchor 2 Position#####
    this.cntrl1 = createVector(moons[moon1].x, moons[moon1].y);//Control 1 Position#####
    this.cntrl2 = createVector(moons[moon2].x, moons[moon2].y);//Control 2 Position#####
    this.planet1 = planet1;
    this.planet2 = planet2;
    this.moon1 = moon1;
    this.moon2 = moon2;
    this.clr = color(random(75, 255), random(75, 255), random(75, 255), random(75, 255));
    this.sz = random(2, 7);

  }

  run(){
    this.updatePoints();
    this.render();
    
  }

  render(){
    push();
    noFill();
    stroke(this.clr);
    strokeWeight(this.sz);
    bezier(this.x, this.y, this.cntrl1.x, this.cntrl1.y, this.cntrl2.x, this.cntrl2.y, this.anch2.x, this.anch2.y);
    pop();

  }

  updatePoints(){
    this.x = planets[this.planet1].x;
    this.y = planets[this.planet1].y;
    this.anch2.x = planets[this.planet2].x;
    this.anch2.y = planets[this.planet2].y;
    this.cntrl1.x = moons[this.moon1].x;
    this.cntrl1.y = moons[this.moon1].y;
    this.cntrl2.x = moons[this.moon2].x;
    this.cntrl2.y = moons[this.moon2].y;

  }

}
//End Class Curvature
