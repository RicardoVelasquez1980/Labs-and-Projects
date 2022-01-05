//Ricardo Velasquez
//Lab 1010 Paddle Game

//Start Function gameState0##########
function gameState0() {
  //Intro Screen#####
  background(86, 51, 145);
  loadTitle(); //Load Game Title#####
  playButton.run(); //Runs Play Button#####
  settingButton.run(); //Runs Settings Button#####
  instructionButton.run(); //Runs Intructions Button#####
  if (
    //Mouse Image Changes if Over Any of the Buttons#####
    playButton.mouseIsOverButton ||
    settingButton.mouseIsOverButton ||
    instructionButton.mouseIsOverButton
  ) {
    cursor("pointer");
  } else {
    cursor(ARROW);
  }
}
//End Function gameState0##########

//Start Function gameState1##########
function gameState1() {
  //Game#####
  cursor(ARROW);
  if (backgroundImageID === 0) {
    //IF No Background is Selected; Default#####
    background(
      //Takes in the Custom Values from Background Settings#####
      backgroundColorR.value(),
      backgroundColorG.value(),
      backgroundColorB.value()
    );
  } else if (backgroundImageID === 1) {
    //Forest Background#####
    background(forest);
  } else if (backgroundImageID === 2) {
    //Glitch Background#####
    background(glitch);
  } else if (backgroundImageID === 3) {
    //Island Background#####
    background(island);
  } else if (backgroundImageID === 4) {
    //Mars Background#####
    background(mars);
  } else if (backgroundImageID === 5) {
    //Planet Background#####
    background(planet);
  } else if (backgroundImageID === 6) {
    //Portal Background#####
    background(portal);
  } else if (backgroundImageID === 7) {
    //Rampage Background#####
    background(rampage);
  } else if (backgroundImageID === 8) {
    //Retro Background#####
    background(retro);
  } else if (backgroundImageID === 9) {
    //Swamp Day Background#####
    background(swampDay);
  } else if (backgroundImageID === 10) {
    //Swamp Night Background#####
    background(swampNight);
  } else if (backgroundImageID === 11) {
    //Tech Background#####
    background(tech);
  } else if (backgroundImageID === 12) {
    //Village Background#####
    background(village);
  }
  if (shapeOn && rvImageOn === false) {
    if (gameOver) {
      //   //If gameOver is True#####
      gameState = 4;
    } else {
      //   //If gameOver is False#####
      paddle.run(); //Run Paddles Class#####
      for (let i = 0; i < shapes.length; i++) {
        //     //Runs All Shapes Class#####
        shapes[i].run();
      }
      collision(); //Directs to Collision Function#####
      if (shapes.length === 0) {
        //     //If No Shapes Remain#####
        loadObjects();
        numObjects = numObjects * 2; //Amount of New Shapes Made Mult by 2#####
      }
      textFont(staatliches);
      textAlign(LEFT);
      fill(255, 220, 0);
      textSize(40);
      textStyle(BOLD);
      text("Score : " + score, 10, 40); //Shows Score#####
    }
  } else if (rvImageOn && shapeOn === false) {
    if (gameOver) {
      //If gameOver is True#####
      gameState = 4;
    } else {
      //If gameOver is False#####
      paddle.run(); //Run Paddles Class#####
      for (let i = 0; i < rvImages.length; i++) {
        //Runs All Images Class#####
        rvImages[i].run();
      }
      collision(); //Directs to Collision Function#####
      if (rvImages.length === 0) {
        //If No Images Remain#####
        loadObjects();
        numObjects = numObjects * 2; //Amount of New Images Made Mult by 2#####
      }
      textFont(staatliches);
      textAlign(LEFT);
      fill(255, 220, 0);
      textSize(40);
      textStyle(BOLD);
      text("Score : " + score, 10, 40); //Shows Score#####
    }
  }
}
//End Function gameState1##########

//Start Function gameState2##########
function gameState2() {
  //Settings#####
  background(30, 38, 107);
  cursor(ARROW);
  controlButton.run();
  audioButton.run();
  customizationButton.run();
  exitButton.run();
  if (
    controlButton.mouseIsOverButton ||
    audioButton.mouseIsOverButton ||
    customizationButton.mouseIsOverButton ||
    exitButton.mouseIsOverButton
  ) {
    cursor("pointer");
  } else {
    cursor(ARROW);
  }
}
//End Function gameState2##########

//Start Function gameState3##########
function gameState3() {
  //Instructions#####
  background(30, 38, 107);
  cursor(ARROW);
  exitButton.run(); //Runs Exit Button#####
  if (
    //Mouse Image Changes if Over Any of the Buttons#####
    exitButton.mouseIsOverButton
  ) {
    cursor("pointer");
  } else {
    cursor(ARROW);
  }
  image(screenshot, 10, 10, exitButton.loc.y - 20, exitButton.loc.y - 20); //Load Image#####
  let x = width - (height - (exitButton.loc.y - 10)); //Helps Position Text#####
  let y = 10; //Helps Position Text#####
  fill(219, 0, 44);
  textAlign(CENTER);
  textFont(staatliches);
  textSize(20);
  text("Instructions", x, y + 20);
  text("Mouse Control By Default.", x, y + 50);
  text("Go To Settings To Change", x, y + 70);
  text("Game Controls To Arrows.", x, y + 90);
  text("Catch Shapes With Paddle", x, y + 110);
  text("If Shapes Touches The", x, y + 130);
  text("Bottom Of The Paddle", x, y + 150);
  text("You Lose.", x, y + 170);
  text("Still Under Development", x, y + 200);
}
//End Function gameState3##########

//Start Function gameState4##########
function gameState4() {
  //Outro Screen#####
  background(86, 51, 145);
  loadTitle(); //Load Game Title#####
  cursor(ARROW);
  endMsg();
  playButton.run();
  settingButton.run();
  if (
    //Mouse Image Changes if Over Any of the Buttons#####
    playButton.mouseIsOverButton ||
    settingButton.mouseIsOverButton
  ) {
    cursor("pointer");
  } else {
    cursor(ARROW);
  }
  if (shapeOn && rvImageOn === false) {
    //If Shapes are Being Caught#####
    if (playButton.mouseIsOverButton && mouseIsPressed) {
      //If Play Button Pressed#####
      score = 0; //Resets Score
      numObjects = 3;
      shapes = []; //Resets Array#####
      loadObjects();
      gameOver = false;
      gameState = 1; //Makes it so You Dont Click the Play Button Twice#####
    }
  } else if (rvImageOn && shapeOn === false) {
    //If Images are Being Caught#####
    if (playButton.mouseIsOverButton && mouseIsPressed) {
      score = 0;
      numObjects = 3;
      rvImages = [];
      loadObjects();
      gameOver = false;
      gameState = 1;
    }
  }
}
//End Function gameState4##########

//Start Function gameState10##########
function gameState10() {
  //Controls Settings#####
  background(30, 38, 107);
  cursor(ARROW);
  mouseControlButton.run();
  arrowsControlButton.run();
  if (
    mouseControlButton.mouseIsOverButton ||
    arrowsControlButton.mouseIsOverButton
  ) {
    cursor("pointer");
  } else {
    cursor(ARROW);
  }
}
//End Function gameState10##########

//Start Function gameState11##########
function gameState11() {
  //Audio Settings#####
  background(30, 38, 107);
  cursor(ARROW);
  exitButton.run();
  musicVolume.show(); //Shows Music Volume Scale#####
  musicVolume.position(width / 2 - 40, height * 0.25 + 60); //Position of Music Volume Scale#####
  soundVolume.show(); //SHows Sound Effects Volume Scale#####
  soundVolume.position(width / 2 - 40, height * 0.5 + 60); //Position of Sound Effects Volume Scale#####
  if (musicVolume.value() === 0) {
    //If Music Volume is 0 Then Pause Music#####
    if (music1.isPlaying()) {
      music1.pause();
    }
    if (music2.isPlaying()) {
      music2.pause();
    }
    if (music3.isPlaying()) {
      music3.pause();
    }
    if (music4.isPlaying()) {
      music4.pause();
    }
    if (music5.isPlaying()) {
      music5.pause();
    }
  } else if (musicVolume.value() > 0) {
    //If Music Volume is Greater Than 0 then Set Music Volume to Scale Value#####
    if (music1.isPlaying()) {
      //If Music1 Is Playing then Adjust the Volume for Music1 ONLY#####
      // music1.pause(false);
      music1.setVolume(musicVolume.value());
    }
    if (music2.isPlaying()) {
      // music2.pause(false);
      music2.setVolume(musicVolume.value());
    }
    if (music3.isPlaying()) {
      // music3.pause(false);
      music3.setVolume(musicVolume.value());
    }
    if (music4.isPlaying()) {
      // music4.pause(false);
      music4.setVolume(musicVolume.value());
    }
    if (music5.isPlaying()) {
      // music5.pause(false);
      music5.setVolume(musicVolume.value());
    }
  }
  //BUG(FEATURE), When Volume is Set to 0, Instead of Puasing ALL Music, It Skips Through Them, So You Can Change the Music#####
  beep.setVolume(soundVolume.value()); //Sets Sound Effect for Catching Objects to the Scale Value#####
  buzzer.setVolume(soundVolume.value()); //Sets Sound Effect for Losing to the Scale Value#####
  press.setVolume(soundVolume.value()); //Sets Sound Effect for Pressing Buttons to the Scale Value#####
  fill(37, 168, 204);
  textAlign(CENTER);
  textFont(staatliches);
  textSize(40);
  text("Music Volume", width / 2, height * 0.25);
  text("Sound Effects Volume", width / 2, height * 0.5);
  if (exitButton.mouseIsOverButton) {
    cursor("pointer");
  } else {
    cursor(ARROW);
  }
}
//End Function gameState11##########

//Start Function gameState12##########
function gameState12() {
  //Customization Settings#####
  //A Settings Which ALlows You to Go To Other Settings#####
  background(30, 38, 107);
  cursor(ARROW);
  exitButton.run();
  shapeButton.run();
  rvImageButton.run();
  backgroundButton.run();
  if (
    exitButton.mouseIsOverButton ||
    shapeButton.mouseIsOverButton ||
    rvImageButton.mouseIsOverButton ||
    backgroundButton.mouseIsOverButton
  ) {
    cursor("pointer");
  } else {
    cursor(ARROW);
  }
}
//End Function gameState12##########

//Start Function gameState13##########
function gameState13() {
  //Shape Settings#####
  background(30, 38, 107);
  cursor(ARROW);
  exitButton.run();
  shapeChangeButton.run();
  shapeColorR.show(); //Shows Scale for Deciding the Amount of Red in the Shape#####
  shapeColorR.position(width / 2 + 50, height * 0.25 + 70); //Position of Red Scale#####
  shapeColorG.show(); //Shows Scale for Deciding the Amount of Green in the Shape#####
  shapeColorG.position(width / 2 + 50, height * 0.25 + 130); //Position for Green Scale#####
  shapeColorB.show(); //Shows Scale for Deciding the Amount of Blue in the Shape#####
  shapeColorB.position(width / 2 + 50, height * 0.25 + 190); //Position for Blue Scale#####
  fill(37, 168, 204);
  textAlign(CENTER);
  textFont(staatliches);
  textSize(40);
  text("Color", width / 2, height * 0.25 + 10);
  text("Red", width / 2 - 140, height * 0.25 + 65);
  text("Green", width / 2 - 140, height * 0.25 + 125);
  text("Blue", width / 2 - 140, height * 0.25 + 185);
  //Examples of Color They Want Along with the Shape They Want#####
  if (shapeID === 0) {
    //If Shape Circle is Choosen#####
    fill(shapeColorR.value(), shapeColorG.value(), shapeColorB.value());
    ellipse(width / 2, height * 0.25 + 230, 40);
    shapeChangeButton.msg = "Circle"; //Button Message is Changed#####
  } else if (shapeID === 1) {
    //If Shape Oval is Choosen#####
    fill(shapeColorR.value(), shapeColorG.value(), shapeColorB.value());
    ellipse(width / 2, height * 0.25 + 230, 40, 20);
    shapeChangeButton.msg = "Oval";
  } else if (shapeID === 2) {
    //If Shape Square is Choosen#####
    fill(shapeColorR.value(), shapeColorG.value(), shapeColorB.value());
    square(width / 2 - 20, height * 0.25 + 230, 40);
    shapeChangeButton.msg = "Square";
  } else if (shapeID === 3) {
    //If Shape Rectangle is Choosen#####
    fill(shapeColorR.value(), shapeColorG.value(), shapeColorB.value());
    rect(width / 2 - 30, height * 0.25 + 230, 60, 45);
    shapeChangeButton.msg = "Rectangle";
  } else if (shapeID === 4) {
    //If Shape Triangle is Choosen#####
    fill(shapeColorR.value(), shapeColorG.value(), shapeColorB.value());
    triangle(
      width / 2,
      height * 0.25 + 230,
      width / 2 + 20,
      height * 0.25 + 270,
      width / 2 - 20,
      height * 0.25 + 270
    );
    shapeChangeButton.msg = "Triangle";
  }
  if (exitButton.mouseIsOverButton || shapeChangeButton.mouseIsOverButton) {
    cursor("pointer");
  } else {
    cursor(ARROW);
  }
}
//End Function gameState13##########

//Start Function gameState14##########
function gameState14() {
  //Image Settings##########
  background(30, 38, 107);
  cursor(ARROW);
  exitButton.run();
  rvImageChangeButton.run();
  if (rvImageID === 0) {
    //If Image Alien is Choosen#####
    image(alien, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Alien";
  } else if (rvImageID === 1) {
    //If Image Apple is Choosen#####
    image(apple, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Apple";
  } else if (rvImageID === 2) {
    //If Image Astronaut is Choosen#####
    image(astronaut, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Astronaut";
  } else if (rvImageID === 3) {
    //If Image Baby is Choosen#####
    image(baby, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Baby";
  } else if (rvImageID === 4) {
    //If Image Brain is Choosen#####
    image(brain, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Brain";
  } else if (rvImageID === 5) {
    //If Image Burger is Choosen#####
    image(burger, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Burger";
  } else if (rvImageID === 6) {
    //If Image Cupcake is Choosen#####
    image(cupcake, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Cupcake";
  } else if (rvImageID === 7) {
    //if Image Dolphine is Choosen#####
    image(dolphine, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Dolphine";
  } else if (rvImageID === 8) {
    //If Image Donut is Choosen#####
    image(donut, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Donut";
  } else if (rvImageID === 9) {
    //Is Image Dragon is Choosen#####
    image(dragon, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Dragon";
  } else if (rvImageID === 10) {
    //If Image Elephant is Choosen#####
    image(elephant, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Elephant";
  } else if (rvImageID === 11) {
    //If Image Fried Chicken is Choosen#####
    image(friedChicken, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Fried Chicken";
  } else if (rvImageID === 12) {
    //If Image Ice Cream is Choosen#####
    image(iceCream, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Ice Cream";
  } else if (rvImageID === 13) {
    //If Image Koala is Choosen#####
    image(koala, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Koala";
  } else if (rvImageID === 14) {
    //If Image Monkey is Choosen#####
    image(monkey, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Monkey";
  } else if (rvImageID === 15) {
    //If Image Otter is Choosen#####
    image(otter, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Otter";
  } else if (rvImageID === 16) {
    //If Image Panda is Choosen#####
    image(panda, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Panda";
  } else if (rvImageID === 17) {
    //If Image Pizza is Choosen#####
    image(pizza, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Pizza";
  } else if (rvImageID === 18) {
    //If Image Shark is Choosen#####
    image(shark, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Shark";
  } else if (rvImageID === 19) {
    //If Image Sloth is Choosen#####
    image(sloth, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Sloth";
  } else if (rvImageID === 20) {
    //If Image Unicorn Cat is Choosen#####
    image(unicornCat, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Unicorn Cat";
  } else if (rvImageID === 21) {
    //If Image Unicorn is Choosen#####
    image(unicorn, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Unicorn";
  } else if (rvImageID === 22) {
    //If Image Wallet is Choosen#####
    image(wallet, width / 2 - 25, height * 0.5 + 80, 50, 50);
    rvImageChangeButton.msg = "Wallet";
  }

  if (exitButton.mouseIsOverButton || rvImageChangeButton.mouseIsOverButton) {
    cursor("pointer");
  } else {
    cursor(ARROW);
  }
}
//End Function gameState14##########

//Start Function gameState15##########
function gameState15() {
  //Background Settings#####
  background(30, 38, 107);
  cursor(ARROW);
  exitButton.run();
  backgroundImageChangeButton.run();
  backgroundColorR.show(); //Shows Red Color Scale for Background#####
  backgroundColorR.position(width / 2 - 40, height * 0.25 + 170); //Position for Red Color Scale#####
  backgroundColorG.show(); //Shows Green Color Scale for Background#####
  backgroundColorG.position(width / 2 - 40, height * 0.25 + 230); //Position for Green Color Scale#####
  backgroundColorB.show(); //Shows Blue Color Scale for Background#####
  backgroundColorB.position(width / 2 - 40, height * 0.25 + 290); //Position for Blue Color Scale#####
  fill(37, 168, 204);
  textAlign(CENTER);
  textFont(staatliches);
  textSize(40);
  text("Color", width / 2, height * 0.25 + 110);
  text("Red", width / 2 - 140, height * 0.25 + 165);
  text("Green", width / 2 - 140, height * 0.25 + 225);
  text("Blue", width / 2 - 140, height * 0.25 + 285);
  fill(
    backgroundColorR.value(),
    backgroundColorG.value(),
    backgroundColorB.value()
  );
  square(width / 2 - 30, height * 0.25 + 300, 60); //Example of the Color They Want#####
  if (backgroundImageID === 0) {
    //If No Background Image is Choosen#####
    backgroundImageChangeButton.msg = "None";
  } else if (backgroundImageID === 1) {
    //If Forest Background Image is Choosen#####
    backgroundImageChangeButton.msg = "Forest";
    image(forest, width / 2 - 75 / 2, height * 0.25 - 10, 75, 75);
  } else if (backgroundImageID === 2) {
    //If Glitch Background Image is Choosen#####
    backgroundImageChangeButton.msg = "Glitch";
    image(glitch, width / 2 - 75 / 2, height * 0.25 - 10, 75, 75);
  } else if (backgroundImageID === 3) {
    //If Island Background Image is Choosen#####
    backgroundImageChangeButton.msg = "Island";
    image(island, width / 2 - 75 / 2, height * 0.25 - 10, 75, 75);
  } else if (backgroundImageID === 4) {
    //If Mars Background Image is Choosen#####
    backgroundImageChangeButton.msg = "Mars";
    image(mars, width / 2 - 75 / 2, height * 0.25 - 10, 75, 75);
  } else if (backgroundImageID === 5) {
    //If Planet Background Image is Choosen#####
    backgroundImageChangeButton.msg = "Planet";
    image(planet, width / 2 - 75 / 2, height * 0.25 - 10, 75, 75);
  } else if (backgroundImageID === 6) {
    //If Portal Background Image is Choosen#####
    backgroundImageChangeButton.msg = "Portal";
    image(portal, width / 2 - 75 / 2, height * 0.25 - 10, 75, 75);
  } else if (backgroundImageID === 7) {
    //If Rampage Background Image is Choosen#####
    backgroundImageChangeButton.msg = "Rampage";
    image(rampage, width / 2 - 75 / 2, height * 0.25 - 10, 75, 75);
  } else if (backgroundImageID === 8) {
    //If Retro Background Image is Choosen#####
    backgroundImageChangeButton.msg = "Retro";
    image(retro, width / 2 - 75 / 2, height * 0.25 - 10, 75, 75);
  } else if (backgroundImageID === 9) {
    //If Swamp Day Background Image is Choosen#####
    backgroundImageChangeButton.msg = "Swamp Day";
    image(swampDay, width / 2 - 75 / 2, height * 0.25 - 10, 75, 75);
  } else if (backgroundImageID === 10) {
    //If Swamp Night Background Image is Choosen#####
    backgroundImageChangeButton.msg = "Swamp Night";
    image(swampNight, width / 2 - 75 / 2, height * 0.25 - 10, 75, 75);
  } else if (backgroundImageID === 11) {
    //If Tech Background Image is Choosen#####
    backgroundImageChangeButton.msg = "Tech";
    image(tech, width / 2 - 75 / 2, height * 0.25 - 10, 75, 75);
  } else if (backgroundImageID === 12) {
    //If Village Background Image is Choosen#####
    backgroundImageChangeButton.msg = "Village";
    image(village, width / 2 - 75 / 2, height * 0.25 - 10, 75, 75);
  }
  if (
    exitButton.mouseIsOverButton ||
    backgroundImageChangeButton.mouseIsOverButton
  ) {
    cursor("pointer");
  } else {
    cursor(ARROW);
  }
}
//End Function gameState15##########
