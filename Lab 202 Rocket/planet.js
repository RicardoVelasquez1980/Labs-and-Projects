//Ricardo Velasquez
//Lab 202 Rocket

//Start Class Planet##########
class Planet extends p5.Vector{
  constructor(){
    super(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.clr = color(0, random(255), 0, random(175, 255));
    this.dia = ceil(random(16, 32));
    this.origDia = this.dia;

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
    // let distance = dist(this.x, this.y, rocket.x, rocket.y);
    let distance = dist(this.x, this.y, test.x, test.y);

    push();
    translate(mouseX, mouseY);
    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(distance, 0, 0);
    pop();

    if (distance <= 100 && distance > 50){


      //EXPLANATION TO HOW SUB WORKS%%%%%%%%%%%%%%%%

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


      this.acc = p5.Vector.sub(this, test);
      this.acc.normalize();
      this.acc.mult(0.1);
      this.vel.limit(2);
      this.vel.add(this.acc);
      this.add(this.vel);

    } else if (distance <= 50){
      this.tp('DECREASE');

    } else {
      this.tp('INCREASE');
      this.acc = createVector(0, 0);
      this.vel = createVector(0, 0);

    }

  }

  tp(typ){
    if (typ === "DECREASE"){
      if (this.dia > 0){
        this.dia--;
        console.log("dec");

      }
    } else if (typ === "INCREASE"){
      if (this.dia < this.origDia){
        this.dia++;

      }
    }

    if (this.dia <= 0){
      this.x = random(width);
      this.y = random(height);

    }
  }

  checkEdges(){
    if (this.x - this.dia / 2 <= 0){
      this.x = width - (this.dia / 2) - 1;

    } else if (this.x + this.dia / 2 >= width){
      this.x = (this.dia / 2) + 1;

    }

    if (this.y - this.dia / 2 <= 0){
      this.y = height - (this.dia / 2) - 1;

    } else if (this.y + this.dia / 2 >= height){
      this.y = (this.dia / 2) + 1;

    }
  }

}
//End Class Planet##########
