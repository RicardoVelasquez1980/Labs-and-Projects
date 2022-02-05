//Ricardo Velasquez
//Lab 202 Rocket

//Start Class Planet##########
class Planet extends p5.Vector{
  constructor(){
    super(random(width), random(height));//Location#####
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.clr = color(0, random(100, 255), 0, random(200, 255));
    this.dia = ceil(random(32, 64));
    this.origDia = this.dia;//Used For The Animation#####

  }

  run(){
    this.render();
    this.flee();
    this.checkEdges();

  }

  render(){
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.clr);
    ellipse(0, 0, this.dia);
    pop();
  }

  flee(){
    let distanceRocket = dist(this.x, this.y, rocket.x, rocket.y);//Calc Dist Of Planet And Rocket#####
    let distanceSun = this.dist(sun);//Calc Dist Of Planet And Sun#####

    this.vel.limit(4);
    this.vel.add(this.acc);

    this.add(this.vel);

    if (distanceSun >= 150){
      this.acc = p5.Vector.sub(sun, this);
      this.acc.normalize();
      this.acc.mult(0.09);

    }

    if (distanceSun < 150){
      this.acc = p5.Vector.sub(this, sun);
      this.acc.normalize();
      this.acc.mult(0.13);

    }

    if (distanceRocket <= 100 ){

      //EXPLANATION OF HOW SUB WORKS%%%%%%%%%%%%%%%%

      // this.acc = p5.Vector.sub(this, test);//THIS - TEST = New Vector For Acc
      //If THIS X-Value Is > TEST X-Value Then New Vectors X-Value Is Positive; Goes To Right
      //Same Applies For The Y-Value; Goes Down
      //Else If THIS X-Value Is < TEST X-Value Then New Vectors X-Value Is Negative; Goes To Left
      //Same Applies For The Y-Value; Goes Up

      // this.acc = p5.Vector.sub(test, this);//TEST - THIS = New Vector For Acc
      //If THIS X-Value Is < TEST X-Value Then New Vectors X-Value Is Positive; Goes To Right
      //Same Applies For The Y-Value; Goes Down
      //Else If THIS X-Value Is > TEST X-Value Then New Vectors X-Value Is Negative; Goes To Left
      //Same Applies For The Y-Value; Goes Up

      this.acc = p5.Vector.sub(this, rocket);
      this.acc.normalize();
      this.acc.mult(0.1);

      this.vel.limit(2);

    }

    if (distanceRocket <= 50){
      this.tp('DECREASE');

    } else {
      this.tp('INCREASE');

    }

  }

  tp(typ){
    if (typ === "DECREASE"){//Decrease Dia#####
      if (this.dia > 0){
        this.dia -= 4;

      }
    } else if (typ === "INCREASE"){//Increase Dia#####
      if (this.dia < this.origDia){
        this.dia += 4;

      }
    }

    if (this.dia <= 0){//If Dia Is Less Than Or Equal To 0 TP#####
      this.x = random(width);
      this.y = random(height);

    }
  }

  checkEdges(){
    if (this.x - this.dia / 2 <= 0){//Left Edge#####
      this.x = width - (this.dia / 2) - 1;

    } else if (this.x + this.dia / 2 >= width){//Right Edge#####
      this.x = (this.dia / 2) + 1;

    }

    if (this.y - this.dia / 2 <= 0){//Top Edge#####
      this.y = height - (this.dia / 2) - 1;

    } else if (this.y + this.dia / 2 >= height){//Bottom Edge#####
      this.y = (this.dia / 2) + 1;

    }
  }

}
//End Class Planet##########
