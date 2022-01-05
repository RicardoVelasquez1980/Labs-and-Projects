//Ricardo Velasquez
//Lab 1010 Paddle Game

//Start Function mousePressed##########
function mousePressed() {
  if (playButton.mouseIsOverButton) {
    //Game Start#####
    gameState = 1;
    press.play(); //Play Button Sound#####
    playButton.mouseIsOverButton = false; //Prevents Sound From Playing After Button Is Not Longer Visible#####
  }
  if (settingButton.mouseIsOverButton) {
    //Settings Screen#####
    gameState = 2;
    press.play(); //Play Button Sound#####
    settingButton.mouseIsOverButton = false; //Prevents Sound From Playing After Button Is Not Longer Visible#####
  }
  if (instructionButton.mouseIsOverButton && gameState != 3) {
    //Intructions Screen#####
    gameState = 3;
    press.play(); //Play Button Sound#####
    instructionButton.mouseIsOverButton = false; //Prevents Sound From Playing After Button Is Not Longer Visible#####
  }
  if (mouseControlButton.mouseIsOverButton) {
    //Mouse Control Selection#####
    paddle.control = "mouse"; //Changes Control to Mouse#####
    press.play(); //Play Button Sound#####
    mouseControlButton.mouseIsOverButton = false; //Prevents Sound From Playing After Button Is Not Longer Visible#####
    gameState = 0; //Goes Back to Intro Screen#####
  }
  if (arrowsControlButton.mouseIsOverButton) {
    //Arrows Control Selection#####
    paddle.control = "arrows"; //Changes Control to Arrows#####
    press.play(); //Play Button Sound#####
    gameState = 0; //Goes Back to Intro Screen#####
    arrowsControlButton.mouseIsOverButton = false; //Prevents Sound From Playing After Button Is Not Longer Visible#####
  }
  if (exitButton.mouseIsOverButton) {
    gameState = 0; // Goes Back to Intro Screen#####
    exitButton.mouseIsOverButton = false; //Prevents Sound From Playing After Button Is Not Longer Visible#####
    //Hides All Scales If They Were Shown in A Previos Screen#####
    musicVolume.hide();
    soundVolume.hide();
    shapeColorR.hide();
    shapeColorG.hide();
    shapeColorB.hide();
    backgroundColorR.hide();
    backgroundColorG.hide();
    backgroundColorB.hide();
    press.play(); //Play Button Sound#####
  }
  if (controlButton.mouseIsOverButton) {
    //Control Settings Screen#####
    gameState = 10;
    press.play(); //Play Button Sound#####
    controlButton.mouseIsOverButton = false; //Prevents Sound From Playing After Button Is Not Longer Visible#####
  }
  if (audioButton.mouseIsOverButton) {
    //Audio Settings Screen#####
    gameState = 11;
    press.play(); //Play Button Sound#####
    audioButton.mouseIsOverButton = false; //Prevents Sound From Playing After Button Is Not Longer Visible#####
  }
  if (customizationButton.mouseIsOverButton) {
    //Customization Settings Screen#####
    gameState = 12;
    press.play(); //Play Button Sound#####
    customizationButton.mouseIsOverButton = false; //Prevents Sound From Playing After Button Is Not Longer Visible#####
  }
  if (shapeButton.mouseIsOverButton) {
    //Shape Settings Screen#####
    gameState = 13;
    shapeOn = true; //Sets Object Being Caught to Shapes#####
    rvImageOn = false;
    press.play(); //Play Button Sound#####
    shapeButton.mouseIsOverButton = false; //Prevents Sound From Playing After Button Is Not Longer Visible#####
  }
  if (rvImageButton.mouseIsOverButton) {
    //Image Settings Screen#####
    gameState = 14;
    shapeOn = false;
    rvImageOn = true; //Sets Object Being Caught to Images#####
    press.play(); //Play Button Sound#####
    rvImageButton.mouseIsOverButton = false; //Prevents Sound From Playing After Button Is Not Longer Visible#####
  }
  if (backgroundButton.mouseIsOverButton) {
    //Background Settings Screen#####
    gameState = 15;
    press.play(); //Play Button Sound#####
    backgroundButton.mouseIsOverButton = false; //Prevents Sound From Playing After Button Is Not Longer Visible#####
  }
  if (shapeChangeButton.mouseIsOverButton) {
    //Shape Change Selection#####
    shapeID = shapeID + 1; //Changes the Shape You Want#####
    if (shapeID === 5) {
      //If ShapeID Goes Past All Existing IDs Go Back to ID 0#####
      shapeID = 0;
    }
    press.play(); //Play Button Sound#####
    shapeChangeButton.mouseIsOverButton = false; //Prevents Sound From Playing After Button Is Not Longer Visible#####
  }
  if (rvImageChangeButton.mouseIsOverButton) {
    //Image Change Selection#####
    rvImageID = rvImageID + 1; //Changes The Image You Want#####
    if (rvImageID === 23) {
      //If ImgaeID Goes Past All Existing IDs Go Back to ID 0#####
      rvImageID = 0;
    }
    press.play(); //Play Button Sound#####
    rvImageChangeButton.mouseIsOverButton = false; //Prevents Sound From Playing After Button Is Not Longer Visible#####
  }
  if (backgroundImageChangeButton.mouseIsOverButton) {
    //Background Image Change Selection#####
    backgroundImageID = backgroundImageID + 1; //Changes The Background Image You Want#####
    if (backgroundImageID === 13) {
      //If Background Image ID Goes Past All Existing IDs GO Back to ID 0#####
      backgroundImageID = 0;
    }
    press.play(); //Play Button Sound#####
    backgroundImageChangeButton.mouseIsOverButton = false; //Prevents Sound From Playing After Button Is Not Longer Visible#####
  }
}
//End Function mousePressed##########
