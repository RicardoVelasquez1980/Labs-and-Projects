//Ricardo Velasquez
//Lab 314 Platform 1

//Start Class GameName##########
class GameName{
  constructor(){
    this.player;
    this.platforms;

    this.init();

  }

  loadPlatforms(qty){
    let platformArr = [];

    for (let i = 0; i < qty; i++){
      let lngth = random(80, 150);
      let spacing = random(30, 60);
      let distance;
      let distanceX;
      let distanceY;

      //Randomized Platform Generation#####
      // let x = (i * lngth) + spacing;
      // let y = random(height * 0.25, height * 0.75);
      // platformArr[i] = new Platform(x, y, lngth);

      //Artificial Unintelligent Platform Generation#####
      let x = (i * lngth) + spacing;
      let y = random(height * 0.25, height * 0.75);
      platformArr[i] = new Platform(x, y, lngth);
      // platformArr.push(new Platform(x, y, lngth));

      if (platformArr.length !== 1){
        //Originally Going Backwards Bc Of The Use Of SPLICE
        //Now It Works Well Due To New Platforms Checking With Old Platforms
        for (let j = platformArr.length - 1; j >= 0; j--){
          if (platformArr[j] !== platformArr[i]){
            distance = platformArr[j].dist(platformArr[i]);
            distanceX = abs(platformArr[i].x - platformArr[j].x);
            distanceY = abs(platformArr[i].y - platformArr[j].y);

            if (distance < lngth + spacing){
              // if (distanceX < lngth){
              //   console.log(i + " TOO CLOSE X TO " + j);
              //
              // }
              //
              // if (distanceY < platformArr[i].width * 4){
              //   console.log(i + " TOO CLOSE Y TO " + j);
              //
              // }

              if (distanceY < platformArr[i].width * 4){
                console.log("i: " + i + " TOO CLOSE TO " + j + " ON Y AXIS");

                if (distanceX < (lngth + platformArr[j].length) / 2){
                  console.log("i: " + i + " TOO CLOSE TO " + j + " ON X AXIS");
                  console.log("i: " + i + " OLD X POS: " + x);
                  console.log("i: " + i + " OLD Y POS: " + y);
                  console.log("j: " + j + " PLATFORM CHECKED X POS: " + platformArr[j].x);
                  console.log("j: " + j + " PLATFORM CHECKED Y POS: " + platformArr[j].y);

                  // lngth = random(80, 150);
                  // spacing = random(30, 60);
                  // x = (i * lngth) + spacing;
                  // y = random(height * 0.25, height * 0.75);
                  // platformArr[i] = new Platform(x, y, lngth);

                  while (distanceY < platformArr[i].width * 4 &&
                        distanceX < (lngth + platformArr[j].length) / 2){
                          lngth = random(80, 150);
                          spacing = random(30, 60);
                          x = (i * lngth) + spacing;
                          y = random(height * 0.25, height * 0.75);
                          platformArr[i] = new Platform(x, y, lngth);

                          distanceX = abs(platformArr[i].x - platformArr[j].x);
                          distanceY = abs(platformArr[i].y - platformArr[j].y);

                          console.log("i: " + i + " TOO CLOSE TO " + j + " ON Y AXIS");
                          console.log("i: " + i + " TOO CLOSE TO " + j + " ON X AXIS");
                          console.log("i: " + i + " OLD X POS: " + x);
                          console.log("i: " + i + " OLD Y POS: " + y);
                          console.log("j: " + j + " PLATFORM CHECKED X POS: " + platformArr[j].x);
                          console.log("j: " + j + " PLATFORM CHECKED Y POS: " + platformArr[j].y);

                        }

                }

                console.log("");

              }



            }

          }

        }

      }

    }

    return platformArr;

  }

  init(){
    this.platforms = this.loadPlatforms(48);

    this.player = new Player(this.platforms[0].x + (this.platforms[0].length / 2), 0);

  }

  run(){
    this.render();
    this.update();

  }

  render(){
    this.player.render();

    for (let i = 0; i < this.platforms.length; i++){
      this.platforms[i].render(i);

    }

  }

  update(){
    this.player.update();

    for (let i = 0; i < this.platforms.length; i++){
      this.platforms[i].update();

    }

  }

}
//End Class GameName##########
