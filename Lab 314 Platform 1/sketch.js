//Ricardo Velasquez
//Lab 314 Platform 1

let player;

let platforms = [];

function setup() {
  cnv = createCanvas(windowWidth - 300, windowHeight - 180);
  cnv.position((windowWidth - width) / 2, 30);
  background(44, 204, 232);

  player = new Player();
  loadRunPlatforms("LOAD", 4);

}

function draw() {
  background(44, 204, 232);

  loadRunPlatforms("RUN", platforms.length);

}

//Start Function loadRunPlatforms##########
function loadRunPlatforms(typ, qty){
  if (typ === "LOAD"){
    for (let i = 0; i < qty; i++){
      platforms[i] = new Platform();

    }

  }
  
}
//End Function loadRunPlatforms##########
