//Ricardo Velasquez
//Lab 314 Platform 1

let gameName;



function setup() {
  cnv = createCanvas(819, 542);
  cnv.position((windowWidth - width) / 2, 30);
  background(0);

  gameName = new GameName();

}

function draw() {
  background(0);

  gameName.run()

}

function keyPressed(){
  //If SpaceBar Or UPARROW Pressed Jump#####
  if (keyCode === 32 || keyCode === UP_ARROW || keyCode === 87) gameName.player.jump();

  if (keyCode === 82) gameName.player.y = 0;

}
