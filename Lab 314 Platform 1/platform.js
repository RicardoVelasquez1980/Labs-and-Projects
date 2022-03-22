//Ricardo Velasquez
//Lab 314 Platform 1

//Start Class Platform##########
class Platform extends p5.Vector{
  constructor(x, y, lngth){
    super(x, y);
    this.vel = createVector(0, 0);
    this.length = lngth;//Horizontal#####
    this.width = 20;//Vertical#####
    this.topBound = this.y;
    this.bottomBound = this.y + this.width / 2; //Half The Width Of The Platform#####
    this.leftBound = this.x;
    this.rightBound = this.x + this.length;

  }

  render(i){
    push();
    fill(255);
    noStroke();
    rect(this.x, this.y, this.length, this.width);
    pop();

    push();
    noStroke();
    fill(0);
    textSize(10);
    text(i, this.x + this.length / 2, this.y + this.width / 2);
    pop();

  }

  update(){
    this.move();
    this.boundsUpdate();

  }

  //Start Of Plyer Input Functions##########
    move(){
      //Move Left/Right#####
      if (keyIsDown(LEFT_ARROW)){
        this.vel.x = gameName.player.speed;

      } else if (keyIsDown(RIGHT_ARROW)){
        this.vel.x = -gameName.player.speed;

      } else {
        this.vel.x = 0;

      }

      //Change Pos#####
      this.add(this.vel);

    }

    boundsUpdate(){
      this.topBound = this.y;
      this.bottomBound = this.y + this.width / 2; //Half The Width Of The Platform#####
      this.leftBound = this.x;
      this.rightBound = this.x + this.length;

    }

}
//End Class Platform##########

//P Means PREVIOUS#####
// loadPlatforms(typ, qty, platformArrP, lngthP, spacingP, xP, yP){
//   let platformArr = [];
//   let lngth;
//   let spacing;
//   let x;
//   let y;
//   let distance;
//   let distanceX;
//   let distanceY;
//
//   if (typ === "LOAD"){
//     for (let i = 0; i < qty; i++){
//       lngth = random(80, 150);
//       spacing = random(30, 60);
//       x = (i * lngth) + spacing;
//       y = random(height * 0.25, height * 0.75);
//       platformArr[i] = new Platform(x, y, lngth);
//
//     }
//
//   } else if (typ === "REGEN"){}
//
//   return platformArr;
//
// }
//









// loadPlatforms(qty) {
//   let platformArr = [];
//
//   for (let i = 0; i < qty; i++) {
//     let lngth = random(80, 150);
//     let spacing = random(30, 60);
//     let distance;
//     let distanceX;
//     let distanceY;
//
//     //Randomized Platform Generation#####
//     // let x = (i * lngth) + spacing;
//     // let y = random(height * 0.25, height * 0.75);
//     // platformArr[i] = new Platform(x, y, lngth);
//
//     //Artificial Unintelligent Platform Generation#####
//     let x = (i * lngth) + spacing;
//     let y = random(height * 0.25, height * 0.75);
//     platformArr[i] = new Platform(x, y, lngth);
//     // platformArr.push(new Platform(x, y, lngth));
//
//     if (platformArr.length !== 1) {
//       //Originally Going Backwards Bc Of The Use Of SPLICE
//       //Now It Works Well Due To New Platforms Checking With Old Platforms
//       for (let j = platformArr.length - 1; j >= 0; j--) {
//         if (platformArr[j] !== platformArr[i]) {
//           distance = platformArr[j].dist(platformArr[i]);
//           distanceX = abs(platformArr[i].x - platformArr[j].x);
//           distanceY = abs(platformArr[i].y - platformArr[j].y);
//
//           if (distance < lngth + spacing) {
//             if (distanceY < platformArr[i].width * 4) {
//               console.log("i: " + i + " TOO CLOSE TO " + j + " ON Y AXIS");
//
//               if (distanceX < (lngth + platformArr[j].length) / 2) {
//                 console.log("i: " + i + " TOO CLOSE TO " + j + " ON X AXIS");
//                 console.log("i: " + i + " OLD X POS: " + x);
//                 console.log("i: " + i + " OLD Y POS: " + y);
//                 console.log("j: " + j + " PLATFORM CHECKED X POS: " + platformArr[j].x);
//                 console.log("j: " + j + " PLATFORM CHECKED Y POS: " + platformArr[j].y);
//
//                 while (distanceY < platformArr[i].width * 4 &&
//                   distanceX < (lngth + platformArr[j].length) / 2) {
//                     lngth = random(80, 150);
//                     spacing = random(30, 60);
//                     x = (i * lngth) + spacing;
//                     y = random(height * 0.25, height * 0.75);
//                     platformArr[i] = new Platform(x, y, lngth);
//
//                     distanceX = abs(platformArr[i].x - platformArr[j].x);
//                     distanceY = abs(platformArr[i].y - platformArr[j].y);
//
//                     console.log("i: " + i + " TOO CLOSE TO " + j + " ON Y AXIS");
//                     console.log("i: " + i + " TOO CLOSE TO " + j + " ON X AXIS");
//                     console.log("i: " + i + " OLD X POS: " + x);
//                     console.log("i: " + i + " OLD Y POS: " + y);
//                     console.log("j: " + j + " PLATFORM CHECKED X POS: " + platformArr[j].x);
//                     console.log("j: " + j + " PLATFORM CHECKED Y POS: " + platformArr[j].y);
//
//                   }
//
//                 }
//
//                 console.log("");
//
//               }
//
//             }
//
//           }
//
//         }
//
//       }
//
//     }
//
//     return platformArr;
//
//   }
