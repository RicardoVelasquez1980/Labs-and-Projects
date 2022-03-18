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

      //Randomized Platform Placement#####
      // let x = (randomGaussian(i, i) * lngth) + spacing;
      // let y = random(height * 0.75, height * 0.25) + spacing;
      // platformArr[i] = new Platform(floor(x), floor(y), lngth);

      let x = randomGaussian(width / 2, lngth + spacing);
      let y = randomGaussian(height / 2, lngth + spacing);
      platformArr[i] = new Platform(x, y, lngth);

    }

    return platformArr;

  }

  init(){
    this.platforms = this.loadPlatforms(24);

    this.player = new Player(this.platforms[0].x + 20, this.platforms[0].y - 21);

  }

  run(){
    this.render();
    this.update();

  }

  render(){
    this.player.render();

    for (let i = 0; i < this.platforms.length; i++){
      this.platforms[i].render();

    }

  }

  update(){
    this.player.update();

  }

}
//End Class GameName##########
