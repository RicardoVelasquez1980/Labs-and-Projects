//Ricardo Velasquez
//Lab 1110 RootPhoto

//Start  Class Roots##########
class Redraw {
  constructor(x, y, dia, clr) {
    this.loc = createVector(x, y); //Roots Location#####
    this.vel = createVector(random(-4, 4), random(-4, 4)); //Roots Change of Location#####
    this.acc = createVector(random(-2, 2), random(-2, 2)); //Roots Change of Direction#####
    this.lifeSpan = 120; //How Long the Root Lives#####
    this.isDead = false; //Root is Not Dead By Default#####
    this.clr = clr; //Roots Colors#####
    this.dia = dia; //Roots Diameter#####
    this.splitDia = ceil(random(dia / 2, 25)); //Roots Diameter Needed InOrder to Split#####
  }

  run() {
    this.render();
    this.life();
  }

  render() {
    this.dia = brushSize.value();
    this.clr = landscape.get(this.loc.x - width / 2, this.loc.y);//Root Color Set to Corresponding Image Color####\
    noStroke();
    fill(this.clr); //Applies Roots Color#####
    ellipse(this.loc.x, this.loc.y, this.dia); //Creates the Roots Using Ellipses#####
    this.acc = createVector(random(-2, 2), random(-2, 2)); //Continuous Change of Roots Change in Direction#####
    this.vel.limit(6); //Roots Speed Limited#####
    this.vel.add(this.acc); //Roots Speed Changed#####
    this.loc.add(this.vel); //Roots Location Changed#####
    this.dia = this.dia - 0.2; //Roots Decrease in Diameter#####
  }

  life() {
    this.lifeSpan--; //Constant Decrease of Roots lifeSpan#####
    if (this.lifeSpan <= 0 || this.dia <= 0 || this.loc.x < width / 2) {
      this.isDead = true; //Root is Dead if lifeSpan Less Than or Equal to 0 or When Diameter of Root is 0#####
    }
  }
}
//End Class Roots##########
