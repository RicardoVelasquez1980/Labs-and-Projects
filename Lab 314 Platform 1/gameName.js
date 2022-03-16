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
      platformArr[i] = new Platform((i + 1) * 150, 300, 80);

    }

    return platformArr;

  }

  init(){
    this.player = new Player(175, 250);
    this.platforms = this.loadPlatforms(2);

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
