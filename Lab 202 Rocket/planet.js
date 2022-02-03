//Ricardo Velasquez
//Lab 202 Rocket

//Start Class Planet##########
class Planet extends p5.Vector{
  constructor(){
    super(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.clr = color(0, random(255), 0, random(175, 255));
    this.dia = random(16, 32);

  }

  run(){
    this.render();
    this.flee();

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
    let distance = dist(this.x, this.y, rocket.x, rocket.y);

    if (distance <= 100){


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


      this.acc = p5.Vector.sub(this, rocket);
      this.acc.normalize();
      this.acc.mult(0.1);
      this.vel.limit(4);
      this.vel.add(this.acc);
      this.add(this.vel);
    } else if (distance <= 50){
      this.tp();
    } else{
      this.acc = createVector(0, 0);
      this.vel = createVector(0, 0);
    }

  }

  tp(){}

}
//End Class Planet##########
