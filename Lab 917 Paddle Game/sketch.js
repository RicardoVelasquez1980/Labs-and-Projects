//Ricardo Velasquez
//Lab 917 Paddle Game

//Global variables##########
//Main Variables#####
let shapes = [];
let rvImages = [];
let paddle;
let score;
let numObjects = 3;
let gameOver = false;
let gameState = 0;
let shapeID = 0;//Circle by Default#####
let rvImageID = 0;//Alien By Default#####
let backgroundImageID = 0;//None by Default#####
//Button Variables#####
let playButton,//gameState 1#####
  instructionButton,//gameState 3#####
  settingButton,//gameState 4#####
  mouseControlButton,//In Control Settings#####
  arrowsControlButton,// In Control Settings#####
  exitButton,//Back to Intro Screen#####
  audioButton,//gameState 11, Audio Settings#####
  controlButton,//gameState 10, Control Settings#####
  customizationButton,//gameState 12, Customization Settings#####
  shapeButton,//gameState 13, Shape Settings, In Customization Settings#####
  rvImageButton,//gameState 14, Image Settings, In Customization Settings#####
  backgroundButton,//gameState 15, Background Settings, In Customization Settings#####
  shapeChangeButton,//In Shape Settings#####
  rvimageChangeButton,//In Image Settings#####
  backgroundImageChangeButton;//In Background Settings#####
//Images & Sound/Music Variables#####
let screenshot; //Image in Intructions#####
let staatliches, permanentMarker; //Special Fonts#####
let beep, buzzer, press, music1, music2, music3, music4, music5; //Sounds#####
let music = []; //Music Array for GameMusic#####
//Trigger Variables; Such as Music On or Off Check#####
let shapeOn = true;//Shapes Being Caught By Default#####
let rvImageOn = false;
let difficulty;//Sets Difficulty Variable
let soundVolume,
  musicVolume,
  shapeColorR,
  shapeColorG,
  shapeColorB,
  backgroundColorR,
  backgroundColorG,
  backgroundColorB;
//Image and Background Vars For Each Individual Image and Background#####
let alien, apple, astronaut, baby, brain, burger, cupcake, dolphine, donut, dragon, elephant, friedChicken, iceCream, koala, monkey, otter, panda, pizza, shark, sloth, unicornCat, unicorn, wallet;
let forest, glitch, island, mars, planet, portal, rampage, retro, swampDay, swampNight, tech, village;

function preload() {
  screenshot = loadImage("Instructions_Image.png");
  staatliches = loadFont("Staatliches.ttf"); //Loading Font#####
  permanentMarker = loadFont("PermanentMarker.ttf"); //Loading Font####
  beep = loadSound("Beep.mp3"); //Beep Sound When a Shape is Caught#####
  buzzer = loadSound("Buzzer.mp3"); //Buzzer Sound When GameOver#####
  press = loadSound("Press.mp3"); //Sound When Button Pressed#####
}

function setup() {
  var cnv = createCanvas(1850, 900);
  cnv.position((windowWidth - width) / 2, 30);
  //Create Paddle/Score/Call Functions
  paddle = new Paddle(width / 2, height - 150); //Make Paddle#####
  //Button Creation#####
  playButton = new Button( //Make a Play Button#####
    width * 0.25, //x Location#####
    height - (height * 1.9) / 5, //y Location#####
    width * 0.5, //Width#####
    2 * (height / 5 - 10), //length#####
    "Play", //Button Name#####
    100 //Button Name Size#####
  );
  instructionButton = new Button( //Make an Intructions Button#####
    width * 0.75 + 10,
    height - height / 5,
    width * 0.25 - 20,
    height / 5 - 10,
    "Instructions",
    20
  );
  settingButton = new Button( //Make a Settings Button#####
    10,
    height - height / 5,
    width * 0.25 - 20,
    height / 5 - 10,
    "Settings",
    20
  );
  mouseControlButton = new Button( //Option for Mouse Control#####
    10,
    10,
    width * 0.5 - 20,
    height - 20,
    "Mouse",
    75
  );
  arrowsControlButton = new Button( //Option for Arrow Control#####
    width * 0.5 + 10,
    10,
    width * 0.5 - 20,
    height - 20,
    "Arrows",
    75
  );
  exitButton = new Button( //Make an Exit Button#####
    width * 0.75 + 10,
    height - height / 5,
    width * 0.25 - 20,
    height / 5 - 10,
    "Exit",
    40
  );
  audioButton = new Button(// Make an Audio Settings Button#####
    width * 0.25,
    height * 0.375,
    width * 0.5,
    height / 5 - 10,
    "Audio",
    75
  );
  controlButton = new Button(//Make a Control Settings Button#####
    width * 0.25,
    10,
    width * 0.5,
    height / 5 - 10,
    "Controls",
    75
  );
  customizationButton = new  Button(//Make a Customization Settings Button#####
    width * 0.25,
    height - height / 5,
    width * 0.5,
    height / 5 - 10,
    "Customize",
    75
  );
  shapeButton = new Button(//Make a Shape Settings Button#####
    width * 0.25,
    10,
    width * 0.5,
    height / 5 - 10,
    "Shapes",
    75
  );
  rvImageButton = new Button(//Make an Image Settings Button#####
    width * 0.25,
    height * 0.375,
    width * 0.5,
    height / 5 - 10,
    "Images",
    75
  );
  backgroundButton = new Button(//Make a Background Settings Button#####
    width * 0.25,
    height - height / 5,
    width * 0.5,
    height / 5 - 10,
    "Background",
    60
  );
  shapeChangeButton = new Button(//Make a Shape Changer Button#####
    width * 0.25,
    10,
    width * 0.5,
    height / 5 - 10,
    "Circle",
    75
  );
  rvImageChangeButton = new Button(//Make an Image Changer Button#####
    width * 0.25,
    height * 0.375,
    width * 0.5,
    height / 5 - 10,
    "Alien",
    75
  );
  backgroundImageChangeButton = new Button(//Make a Background Image Changer Button#####
    width * 0.25,
    10,
    width * 0.5,
    height / 5 - 10,
    "None",
    75
  );
  //Slider Creation#####
  musicVolume = createSlider(0, 1, 0.75, 0.01);//Makes Slider for Music Volume#####
  musicVolume.hide();//Hides Music Volume Slider#####
  soundVolume = createSlider(0, 1, 1, 0.01);//Makes Slider for Sound Effects Volume#####
  soundVolume.hide();//Hides Sound Effects Volume Slider#####
  shapeColorR = createSlider(0, 256, 256, 1);//Makes Slider for Red Color for Shapes#####
  shapeColorR.hide();//Hides Slider for Red Color for Shapes#####
  shapeColorG = createSlider(0, 256, 256, 1);//Makes Slider for Green Color for Shapes#####
  shapeColorG.hide();//Hides Slider for Green Color for Shapes#####
  shapeColorB = createSlider(0, 256, 256, 1);//Makes Slider for Blue Color for Shapes#####
  shapeColorB.hide();//Hides Slider for Blue Color for Shapes#####
  backgroundColorR = createSlider(0, 256, 0, 1);//Makes Slider for Red Color for Background#####
  backgroundColorR.hide();//Hides Slider for Red Color for Background#####
  backgroundColorG = createSlider(0, 256, 0, 1);//Makes Slider for Green Color for Background#####
  backgroundColorG.hide();//Hides Slider for Green Color for Background#####
  backgroundColorB = createSlider(0, 256, 0, 1);//Makes Slider for Blue Color for Background#####
  backgroundColorB.hide();//Hides Slider for Blue Color for Background#####
  //Starting Score#####
  score = 0; //Stating Score#####
  //Music Loader#####
  music1 = loadSound("GameMusic1.mp3", playMusic1);
  music2 = loadSound("GameMusic2.mp3");
  music3 = loadSound("GameMusic3.mp3");
  music4 = loadSound("GameMusic4.mp3");
  music5 = loadSound("GameMusic5.mp3");
  //Load Images#####
  alien = loadImage('IAlien.png');
  apple = loadImage('IApple.png');
  astronaut = loadImage('IAstronaut.png');
  baby = loadImage('IBaby.png');
  brain = loadImage('IBrain.png');
  burger = loadImage('IBurger.png');
  cupcake = loadImage('ICupcake.png');
  dolphine = loadImage('IDolphine.png');
  donut = loadImage('IDonut.png');
  dragon = loadImage('IDragon.png');
  elephant = loadImage('IElephant.png');
  friedChicken = loadImage('IFried Chicken.png');
  iceCream = loadImage('IIce Cream.png');
  koala = loadImage('IKoala.png');
  monkey = loadImage('IMonkey.png');
  otter = loadImage('IOtter.png');
  panda = loadImage('IPanda.png');
  pizza = loadImage('IPizza.png');
  shark = loadImage('IShark.png');
  sloth = loadImage('ISloth.png');
  unicornCat = loadImage('IUnicorn Cat.png');
  unicorn = loadImage('IUnicorn.png');
  wallet = loadImage('IWallet.png');
  forest = loadImage('BForest.jpg')
  glitch = loadImage('BGlitch.jpg')
  island = loadImage('BIsland.jpg')
  mars = loadImage('BMars.jpg')
  planet = loadImage('BPlanet.jpg')
  portal = loadImage('BPortal.jpg')
  rampage = loadImage('BRampage.jpg')
  retro = loadImage('BRetro.jpg')
  swampDay = loadImage('BSwamp Day.jpg')
  swampNight = loadImage('BSwamp Night.jpg')
  tech = loadImage('BTech.jpg')
  village = loadImage('BVillage.jpg')
}

function draw() {
  //Run Functions#####
  if (gameState === 0) {
    //Intro Screen#####
    gameState0();
  }
  if (gameState === 1) {
    //Play Game#####
    gameState1();
  }
  if (gameState === 2) {
    //Settings#####
    gameState2();
  }
  if (gameState === 3) {
    //Intructions#####
    gameState3();
  }
  if (gameState === 4) {
    //Outro Screen#####
    gameState4();
  }
  if (gameState === 10) {
    //Control Settings#####
    gameState10();
  }
  if (gameState === 11) {
    //Audio Settings#####
    gameState11();
  }
  if (gameState === 12) {
    //Customization Settings#####
    gameState12();
  }
  if (gameState === 13) {
    //Shape Settings#####
    gameState13();
  }
  if (gameState === 14) {
    //Image Settings#####
    gameState14();
  }
  if (gameState === 15) {
    //Background Settings#####
    gameState15();
  }
}
