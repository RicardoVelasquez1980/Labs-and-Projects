//Ricardo Velasquez
//Lab 202 Rocket

//Start Class Planet##########
class Planet extends p5.Vector{
  constructor(){
    super(random(width), random(height));//Location#####
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.clr = color(0, random(255), 0, random(175, 255));
    this.dia = ceil(random(32, 64));
<<<<<<< Updated upstream
    this.origDia = this.dia;//Used For The Animation#####
=======
    this.origDia = this.dia;
    // this.distance = dist(this.x, this.y, rocket.x, rocket.y);
    this.distance = dist(this.x, this.y, test.x, test.y);
>>>>>>> Stashed changes

  }

  run(){
    // this.distance = dist(this.x, this.y, rocket.x, rocket.y);
    this.distance = dist(this.x, this.y, test.x, test.y);

    this.render();
    this.checkEdges();

    if (this.distance <= 100 && this.distance > 50){
      this.flee();

    } else if (this.distance <= 50){
      this.tp('DECREASE');

    } else {
      this.vel = createVector(0, 0);

      this.tp('INCREASE');

    }

    push();
    translate(mouseX, mouseY);
    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(this.distance, 0, 0);
    pop();

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
<<<<<<< Updated upstream
    let distance = dist(this.x, this.y, rocket.x, rocket.y);//Calc Dist Of Planet And Rocket#####

    if (distance <= 100 ){

      //EXPLANATION OF HOW SUB WORKS%%%%%%%%%%%%%%%%
=======
    // let distance = dist(this.x, this.y, rocket.x, rocket.y);
    // let distance = dist(this.x, this.y, test.x, test.y);

    // this.acc = p5.Vector.sub(this, rocket);
    this.acc = p5.Vector.sub(this, test);
    this.acc.normalize();
    this.acc.mult(0.1);

    this.vel.limit(8);
    this.vel.add(this.acc);

    this.add(this.vel);

      //EXPLANATION TO HOW SUB WORKS%%%%%%%%%%%%%%%%
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
      this.acc = p5.Vector.sub(this, rocket);
      this.acc.normalize();
      this.acc.mult(0.1);

      this.vel.limit(2);
      this.vel.add(this.acc);

      this.add(this.vel);

    } else { //Reset Vel And Acc#####
      this.acc = createVector(0, 0);
      this.vel = createVector(0, 0);

    }

    if (distance <= 50){
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

=======
  }

  tp(typ){
    if (typ === 'DECREASE'){
      if (this.dia > 0){
        this.dia--

      }
    } else if (typ === 'INCREASE'){
      if (this.dia < this.origDia){
        this.dia++;
>>>>>>> Stashed changes
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
