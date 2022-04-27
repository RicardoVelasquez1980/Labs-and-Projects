//Ricardo Velasquez
//Lab 314 Platform 1

//Start Class GameName##########
class GameName {
  constructor() {
    this.player;
    this.platforms;
    this.background;

    this.init();

  }

  //P Means PREVIOUS#####
  loadPlatforms(typ, qty, platformArrP){
    let platformArr;
    let platformProp;
    let distance;
    let distanceX;
    let distanceY;

    if (typ === "LOAD"){
      platformArr = [];

      for (let i = 0; i < qty; i++){
        platformProp = this.platformProperties(i);

        platformArr.push(new Platform(platformProp.x, platformProp.y, platformProp.lngth));

        if (platformArr.length  > 1){
          this.loadPlatforms("CHECK", platformArr.length, platformArr);

        }

      }

    } else if (typ === "CHECK"){
      platformArr = platformArrP;
      let changed = 0;
      let indexNext;
      let indexPrev;

      for (let i = 0; i < qty; i++){
        indexNext = i + 1;
        indexPrev = i - 1;

        for (let j = platformArr.length - 1; j >= 0; j--){
          if (platformArr[i] !== platformArr[j]){
            distance = platformArr[i].dist(platformArr[j]);
            distanceX = abs(platformArr[i].x - platformArr[j].x);
            distanceY = abs(platformArr[i].y - platformArr[j].y);

            if ((j === indexNext || j === indexPrev) && distance >= width * 0.70){

              while (distance >= width * 0.70){
                changed++;

                platformProp = this.platformProperties(i);

                platformArr[i] = new Platform(platformProp.x, platformProp.y, platformProp.lngth);

                distance = platformArr[i].dist(platformArr[j]);

              }

            }

            while (distanceY < platformArr[i].width * 4 &&
              distanceX < (platformArr[i].length + platformArr[j].length) * 0.55){
                changed++;

                platformProp = this.platformProperties(i);

                platformArr[i] = new Platform(platformProp.x, platformProp.y, platformProp.lngth);

                distanceX = abs(platformArr[i].x - platformArr[j].x);
                distanceY = abs(platformArr[i].y - platformArr[j].y);

              }

            }

        }

      }

      if (changed !== 0) this.loadPlatforms("CHECK", platformArr.length, platformArr);

    } else if (typ === "ADD"){


    }

    return platformArr;

  }

  platformProperties(i){
    let lngth = random(80, 160);
    let spacing = random(30, 60);
    let x = (i * lngth) + spacing + (width / 4);
    let y = random(height * 0.2, height * 0.8);

    let prop = {
      lngth: lngth,
      spacing: spacing,
      x: x,
      y: y

    };

    return prop;

  }

  loadBackgrounds(qty){
    let backgrounds = [];

    for (let i = 0; i < qty; i++){
      backgrounds[i] = new Background(i);

    }

    return backgrounds;

  }

    init() {
      this.background = this.loadBackgrounds(6);

      this.platforms = this.loadPlatforms("LOAD", 10);

      this.player = new Player(this.platforms[0].x + (this.platforms[0].length / 2), 0);

    }

    run() {
      this.render();
      this.update();

    }

    render() {
      for (let i = 0; i < this.background.length; i++){
        this.background[i].render();

      }

      this.player.render();

      for (let i = 0; i < this.platforms.length; i++) {
        if (this.platforms[i].x < width &&
        this.platforms[i].x + this.platforms[i].length > 0){
          this.platforms[i].render();

        }

      }

    }

    update() {
      for (let i = this.background.length - 1; i >= 0; i--){
        this.background[i].update();

      }

      this.player.update();

      for (let i = 0; i < this.platforms.length; i++) {
        this.platforms[i].update();

      }

    }

  }
  //End Class GameName##########
