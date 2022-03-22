//Ricardo Velasquez
//Lab 314 Platform 1

//Start Class GameName##########
class GameName {
  constructor() {
    this.player;
    this.platforms;

    this.init();

  }

  //P Means PREVIOUS#####
  loadPlatforms(typ, qty, platformArrP, lngthP, spacingP, xP, yP){
    let platformArr = [];
    let lngth;
    let spacing;
    let x;
    let y;
    let distance;
    let distanceX;
    let distanceY;

    for (let i = 0; i < qty; i++){
      if (typ === "LOAD"){
        lngth = random(80, 150);
        spacing = random(30, 60);

        x = (i * lngth) + spacing;
        y = random(height * 0.25, height * 0.75);
        platformArr[i] = new Platform(x, y, lngth);

        if (platformArr.length > 1){
          this.loadPlatforms("REGEN", platformArr.length, platformArr, lngth, spacing, x, y);

        }

      } else if (typ === "REGEN"){
        platformArr = platformArrP;
        lngth = lngthP;
        spacing = spacingP;
        x = xP;
        y = yP;
        let changed = 0;//Decides Whether A Regen Check Needs To Be Runned Again#####

        for (let j = platformArr.length - 1; j >= 0; j--){
          if (platformArr[j] !== platformArr[i]){
            distance = platformArr[j].dist(platformArr[i]);
            distanceX = abs(platformArr[i].x - platformArr[j].x);
            distanceY = abs(platformArr[i].y - platformArr[j].y);

            if (distance < lngth + spacing){
              if (distanceY < platformArr[i].width * 4){
                console.log("i: " + i + " TOO CLOSE TO " + j + " ON Y AXIS");

                if (distanceX < (lngth + platformArr[j].length) / 2){
                  console.log("i: " + i + " TOO CLOSE TO " + j + " ON X AXIS");
                  console.log("i: " + i + " OLD X POS: " + x);
                  console.log("i: " + i + " OLD Y POS: " + y);
                  console.log("j: " + j + " PLATFORM CHECKED X POS: " + platformArr[j].x);
                  console.log("j: " + j + " PLATFORM CHECKED Y POS: " + platformArr[j].y);

                  changed++;

                  while (distanceY < platformArr[i].width * 4 &&
                    distanceX < (lngth + platformArr[j].length) / 2) {
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

        if (changed > 0) this.loadPlatforms("REGEN", platformArr.length, platformArr, lngth, spacing, x, y);

      }

    }

    return platformArr;

  }

    init() {
      this.platforms = this.loadPlatforms("LOAD", 500);

      // this.player = new Player(this.platforms[0].x + (this.platforms[0].length / 2), 0);
      this.player = new Player(width * 0.25, 0);

    }

    run() {
      this.render();
      this.update();

    }

    render() {
      this.player.render();

      for (let i = 0; i < this.platforms.length; i++) {
        this.platforms[i].render(i);

      }

    }

    update() {
      this.player.update();

      for (let i = 0; i < this.platforms.length; i++) {
        this.platforms[i].update();

      }

    }

  }
  //End Class GameName##########
