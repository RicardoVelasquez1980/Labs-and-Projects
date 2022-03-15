//Ricardo Velasquez
//Lab 314 Platform 1

//Start Class GameName##########
class GameName{
  constructor(){
    this.player = new Player(random(width), random(height));
    this.platforms = this.loadPlatforms(2);

  }

  loadPlatforms(qty){
    let platformArr = [];
    for (let i = 0; i < qty; i++){
      platformArr[i] = new Platform((i + 1) * 150, random(height * 0.25, height * 0.5), 80);

    }

    return platformArr;

  }

  run(){
    this.render();

  }

  render(){
    this.player.render();

    for (let i = 0; i < this.platforms.length; i++){
      this.platforms[i].render();

    }

  }

}
//End Class GameName##########
