//Ricardo Velasquez
//Lab 1101 Root Brush

//ATTRIBUTION:
//<a href='https://www.freepik.com/vectors/icons'>Icons vector created by rawpixel.com - www.freepik.com</a>

//Global Variables##########
let roots, counter, brush;


function preload(){
  brush = loadImage('Brush.png');
}
 

function setup() {
  var cnv = createCanvas(1850, 900);
  cnv.position((windowWidth - width) / 2, 30);
  background(1);
  roots = []; //Declare Roots as an Array#####
  counter = 0;
}

function draw() {
  for (let i = 0; i < roots.length; i++) {
    roots[i].run(); //Run All Roots#####
  }
  rootRemoval(); //Calls rootRemoval Function, Line 37#####
  branchOut(); //Calls branchOut Function, Line 48#####
}

//Found a Wired Thing About This Function, If You Press The Mouse This Function Stops#####
function mouseMoved() {
  //If Mouse is Being Moved#####
counter++;
if (counter%5 === 0){
  roots.push(
    //Add a New Root to the Root Array#####
    new Roots(
      mouseX, //New Root Starts at X Position of the Mouse#####
      mouseY, //New Root Starts at Y Position of the Mouse#####
      ceil(random(25, 40)), //Random Diameter Set For the New Root#####
      color(random(54, 90), random(30, 60), random(8, 50)) //Random Color Set For the New Root#####
    )
  );
}
}

//Start Function rootRemoval##########
function rootRemoval() {
  for (let i = roots.length - 1; i >= 0; i--) {
    if (roots[i].isDead) {
      //If Root is Dead#####
      roots.splice(i, 1); //Removes Root#####
    }
  }
}
//End Function rootRemoval##########

//Start Function branchOut##########
function branchOut() {
  for (let i = 0; i < roots.length; i++) {
    let chance = ceil(random(1,5))
    if (roots[i].lifeSpan < 70 && roots[i].dia > roots[i].splitDia && chance === 5) {
      roots.push(
        //Adds New Root to Existing Root is Current Root Meets Requirments Above(Line 47)#####
        new Roots(roots[i].loc.x, roots[i].loc.y, roots[i].dia, roots[i].clr)
      ); //Creation of the New Root#####
    }
  } //Weird Thing About this Is That is Makes Multiple New Roots But It Looks Cool ALthought It Still Needs to Be Fixed#####
}
//End Function branchOut##########
