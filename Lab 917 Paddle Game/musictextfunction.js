//Ricardo Velasquez
//Lab 1005 Paddle Game

//Start Function loadTItle##########
function loadTitle() {
  let x = width / 2; //Helps with Positioning#####
  let y = height * 0.25; //Helps with Positioning#####
  fill(227, 14, 159);
  textAlign(CENTER);
  textFont(permanentMarker);
  textSize(70);
  text("GAME", x, y - 60);
  text("CATCHER", x, y - 20);
  text("2000", x, y + 20);
}
//End Function loadTItle##########

//Start Function playMusic1##########
function playMusic1() {
  //First Music is Played Once it has Been Loaded#####
  music1.play();
  music1.onended(playMusic2);
}
//End Function playMusic1##########

//Start Function playMusic2##########
function playMusic2() {
  //Second Music is Played After First Music#####
  music2.play();
  music2.onended(playMusic3);
}
//End Function playMusic2##########

//Start Function playMusic3##########
function playMusic3() {
  //Third Music is Played After Second Music#####
  music3.play();
  music3.onended(playMusic4);
}
//End Function playMusic3##########

//Start Function playMusic4##########
function playMusic4() {
  //Fourth Music is Played After Third Music#####
  music4.play();
  music4.onended(playMusic5);
}
//End Function playMusic4##########

//Start Function playMusic5##########
function playMusic5() {
  //Fifth Music is Played After Fourth Music#####
  music5.play();
  music5.onended(playMusic1);
}
//End Function playMusic5##########

//Start Function End Message##########
function endMsg() {
  let msg = ""; //Declare Local Variable#####
  let msgclr;
  if (score < 20) {
    //If Score is Less than 20#####
    msg = "Terrible Job, DO BETTER!!";
    msgclr = color(173, 20, 3);
  } else if (score < 35) {
    //If Score is Less than 35#####
    msg = "My Grandma Can Do Better";
    msgclr = color(201, 77, 0);
  } else if (score < 60) {
    //If Score is Less than 60#####
    msg = "You Call Yourself a Gamer?";
    msgclr = color(227, 179, 57);
  } else if (score < 69) {
    //If Score is Less than 69#####
    msg = "Better, I Suppose";
    msgclr = color(31, 209, 39);
  } else if (score < 90) {
    //If Score is Less than 90#####
    msg = "Your Improving";
    msgclr = color(97, 212, 106);
  } else if (score < 420) {
    //If Score is Less than 420#####
    msg = "Seems Your Better Than My Grandma";
    msgclr = color(47, 48, 130);
  } else {
    //If Score is Over 420#####
    msg = "I Honor You With The Gift of Silence";
    msgclr = color(175, 71, 191);
  }
  textFont(staatliches);
  textSize(40);
  fill(255, 220, 0);
  textAlign(CENTER);
  textStyle(BOLD);
  text("Score: " + score, width / 2, height / 2 - 50); //Shows Final Score#####
  fill(msgclr);
  textStyle(ITALIC);
  textSize(35);
  text(msg, width / 2, height / 2);
}
//End Function End Message##########
