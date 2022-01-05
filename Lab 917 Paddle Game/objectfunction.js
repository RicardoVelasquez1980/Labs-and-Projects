//Ricardo Velasquez
//Lab 1005 Paddle Game

//Start Function loadObjects##########
function loadObjects() {
  if (shapeOn && rvImageOn === false) {
    //If Shapes Are Choosen#####
    for (let i = 0; i < numObjects; i++) {
      //Makes All Necessary Shapes#####
      //New Shapes##########
      //Push a Shape Into the Array Shapes##########
      shapes.push(new Shape(random(width), random(height - 200))); //Adds New Shape Into Array#####
    } //+
  } else if (rvImageOn && shapeOn === false) {
    //If Images Are Choosen#####
    for (let i = 0; i < numObjects; i++) {
      //Image Being Loaded is Based Off the Current ImageID#####
      if (rvImageID === 0) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IAlien.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 1) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IApple.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 2) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IAstronaut.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 3) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IBaby.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 4) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IBrain.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 5) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IBurger.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 6) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "ICupcake.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 7) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IDolphine.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 8) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IDonut.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 9) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IDragon.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 10) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IElephant.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 11) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IFried Chicken.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 12) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IIce Cream.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 13) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IKoala.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 14) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IMonkey.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 15) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IOtter.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 16) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IPanda.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 17) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IPizza.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 18) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IShark.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 19) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "ISloth.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 20) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IUnicorn Cat.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 21) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IUnicorn.png")
        ); //Adds New Image Into Array#####
      } else if (rvImageID === 22) {
        //Makes All Necessary Images#####
        //New Images##########
        rvImages.push(
          new RVImage(random(width), random(height - 200), "IWallet.png")
        ); //Adds New Image Into Array#####
      }
    }
  }
}
//End Function loadObjects##########

//Start Function collision##########
function collision() {
  if (shapeOn && rvImageOn === false) {
    //If Shapes is Choosen#####
    for (let i = 0; i < shapes.length; i++) {
      //Makes it Run for All Shapes#####
      //Shape Collision Detection is Based Off The ShapeID#####
      if (shapeID === 0) {
        if (
          shapes[i].loc.x < paddle.loc.x + paddle.l &&
          shapes[i].loc.x > paddle.loc.x &&
          shapes[i].loc.y - shapes[i].d1 / 2 < paddle.loc.y + paddle.w &&
          shapes[i].loc.y + shapes[i].d1 / 2 > paddle.loc.y
        ) {
          if (shapes[i].vel.y < 0) {
            //If Ascending##########
            gameOver = true;
            buzzer.play(); //If GameOver Sound#####
          } else {
            //If Descending##########
            shapes.splice(i, 1);
            score = score + 1; //Adds to Score if You Catch a Shape#####
            beep.play(); //Caught Shape Sound#####
          }
        }
      } else if (shapeID === 1) {
        if (
          shapes[i].loc.x < paddle.loc.x + paddle.l &&
          shapes[i].loc.x > paddle.loc.x &&
          shapes[i].loc.y - shapes[i].d2 / 2 < paddle.loc.y + paddle.w &&
          shapes[i].loc.y + shapes[i].d2 / 2 > paddle.loc.y
        ) {
          if (shapes[i].vel.y < 0) {
            //If Ascending##########
            gameOver = true;
            buzzer.play(); //If GameOver Sound#####
          } else {
            //If Descending##########
            shapes.splice(i, 1);
            score = score + 1; //Adds to Score if You Catch a Shape#####
            beep.play(); //Caught Shape Sound#####
          }
        }
      } else if (shapeID === 2) {
        if (
          shapes[i].loc.x < paddle.loc.x + paddle.l &&
          shapes[i].loc.x + shapes[i].l > paddle.loc.x &&
          shapes[i].loc.y < paddle.loc.y + paddle.w &&
          shapes[i].loc.y + shapes[i].l > paddle.loc.y
        ) {
          if (shapes[i].vel.y < 0) {
            //If Ascending##########
            gameOver = true;
            buzzer.play(); //If GameOver Sound#####
          } else {
            //If Descending##########
            shapes.splice(i, 1);
            score = score + 1; //Adds to Score if You Catch a Shape#####
            beep.play(); //Caught Shape Sound#####
          }
        }
      } else if (shapeID === 3) {
        if (
          shapes[i].loc.x < paddle.loc.x + paddle.l &&
          shapes[i].loc.x + shapes[i].l > paddle.loc.x &&
          shapes[i].loc.y < paddle.loc.y + paddle.w &&
          shapes[i].loc.y + shapes[i].w > paddle.loc.y
        ) {
          if (shapes[i].vel.y < 0) {
            //If Ascending##########
            gameOver = true;
            buzzer.play(); //If GameOver Sound#####
          } else {
            //If Descending##########
            shapes.splice(i, 1);
            score = score + 1; //Adds to Score if You Catch a Shape#####
            beep.play(); //Caught Shape Sound#####
          }
        }
      } else if (shapeID === 4) {
        if (
          shapes[i].loc.x - shapes[i].rx2 < paddle.loc.x + paddle.l &&
          shapes[i].loc.x + shapes[i].rx3 > paddle.loc.x &&
          shapes[i].loc.y - shapes[i].ry1 < paddle.loc.y + paddle.w &&
          shapes[i].loc.y + shapes[i].ry3 > paddle.loc.y
        ) {
          if (shapes[i].vel.y < 0) {
            //If Ascending##########
            gameOver = true;
            buzzer.play(); //If GameOver Sound#####
          } else {
            //If Descending##########
            shapes.splice(i, 1);
            score = score + 1; //Adds to Score if You Catch a Shape#####
            beep.play(); //Caught Shape Sound#####
          }
        }
      }
    }
  } else if (rvImageOn && shapeOn === false) {
    //If Images is Choosen#####
    for (let i = 0; i < rvImages.length; i++) {
      if (
        rvImages[i].loc.x < paddle.loc.x + paddle.l &&
        rvImages[i].loc.x + rvImages[i].s > paddle.loc.x &&
        rvImages[i].loc.y < paddle.loc.y + paddle.w &&
        rvImages[i].loc.y + rvImages[i].s > paddle.loc.y
      ) {
        if (rvImages[i].vel.y < 0) {
          //If Ascending##########
          gameOver = true;
          buzzer.play(); //If GameOver Sound#####
        } else {
          //If Descending##########
          rvImages.splice(i, 1);
          score = score + 1; //Adds to Score if You Catch an Image#####
          beep.play(); //Caught Images Sound#####
        }
      }
    }
  }
}
//End Function collision##########
