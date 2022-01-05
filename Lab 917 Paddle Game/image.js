//Ricardo Velasquez
//Lab 1005 Paddle Game

//ATTRIBUTIONS:
//<a href='https://www.freepik.com/vectors/food'>Food vector created by catalyststuff - www.freepik.com</a>
//<a href='https://www.freepik.com/vectors/baby'>Baby vector created by catalyststuff - www.freepik.com</a>
//<a href='https://www.freepik.com/vectors/school'>School vector created by catalyststuff - www.freepik.com</a>
//<a href='https://www.freepik.com/vectors/logo'>Logo vector created by catalyststuff - www.freepik.com</a>
//<a href='https://www.freepik.com/vectors/background'>Background vector created by catalyststuff - www.freepik.com</a>
//<a href='https://www.freepik.com/vectors/character'>Character vector created by catalyststuff - www.freepik.com</a>
//<a href='https://www.freepik.com/vectors/party'>Party vector created by catalyststuff - www.freepik.com</a>
//<a href='https://www.freepik.com/vectors/cartoon'>Cartoon vector created by catalyststuff - www.freepik.com</a>
//<a href='https://www.freepik.com/vectors/water'>Water vector created by catalyststuff - www.freepik.com</a>
//<a href='https://www.freepik.com/vectors/star'>Star vector created by upklyak - www.freepik.com</a>
//<a href='https://www.freepik.com/vectors/background'>Background vector created by starline - www.freepik.com</a>
//<a href='https://www.freepik.com/vectors/tree'>Tree vector created by upklyak - www.freepik.com</a>
//<a href='https://www.freepik.com/vectors/background'>Background vector created by upklyak - www.freepik.com</a>
//<a href='https://www.freepik.com/vectors/computer'>Computer vector created by upklyak - www.freepik.com</a>
//<a href='https://www.freepik.com/vectors/city'>City vector created by upklyak - www.freepik.com</a>

//Start Class Image##########
class RVImage {
  constructor(x, y, img) {
    this.loc = createVector(x, y);
    this.vel = createVector(0, 2);
    this.acc = createVector(0, 0.1);
    this.s = random(16, 24); //Image Size#####
    this.img = loadImage(img); //Load Selected Image#####
  }

  run() {
    this.render();
    this.update();
    this.checkEdges();
    this.checkStuck();
  }

  render() {
    image(this.img, this.loc.x, this.loc.y, this.s, this.s);
  }

  update() {
    this.vel.add(this.acc); //Change of Velocity#####
    this.loc.add(this.vel); //Change of Location#####
  }

  checkEdges() {
    //Allows Image to Bounce Off Edges#####
    if (this.loc.y < this.s / 2 || this.loc.y + this.s > height) {
      this.vel.y = -this.vel.y;
    }
  }

  checkStuck() {
    //When Image Get Stuck On Edges#####
    if (this.loc.y > height + this.s / 2 || this.loc.y < this.s / 2 - 5) {
      this.loc.y = random(height - 200);
    }
    if (this.loc.x < this.s / 2 || this.loc.x > width - this.s / 2) {
      this.loc.x = random(width);
    }
  }
}
// //End Class Image##########
