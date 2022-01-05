//Ricardo Velasquez
//Lab 1019 Image Manipulation

//Start Class Redraw##########
class Redraw{
  constructor(){
    this.loc = createVector(mouseX, mouseY);//First set Position#####
    this.dia = brushSize.value();//Diameter of Circle#####
    this.clr = [];//Just Setting SOMETHING to Give The CLR Variable#####
  }
  render(){
    this.loc = createVector(mouseX, mouseY);//Position Change#####
    this.dia = brushSize.value();//Diameter of Circle#####
    if (mouseIsPressed && mouseX < width / 2 - 5 && mouseX > 0 && mouseY < height && mouseY > 0 && redrawOnOff === 9){//If Mouse Pressed and Its Within the Image Canvas#####
      this.getColor();//Goes to Function getColor#####
      fill(this.clr);//Sets Circle Color to the Pixel Color#####
      ellipse(this.loc.x + width / 2 + 5, this.loc.y, this.dia);//Makes Ellipse#####
    }
  }

  getColor(){
    let tempclr;
    if (mouseIsPressed && mouseX < width / 2 - 5 && clrChangeSelection === 1 && mouseX > 0 && mouseY < height && mouseY > 0 && redrawOnOff === 9 && caeruleus != 81004){//If Mouse Pressed and Its Within the Image Canvas#####
      this.clr = landscape1.get(mouseX, mouseY);//Grabs Color of Pixel Mouse is On#####
    }
    if (mouseIsPressed && mouseX < width / 2 - 5 && clrChangeSelection === 1 && mouseX > 0 && mouseY < height && mouseY > 0 && redrawOnOff === 9 && caeruleus === 81004){//If Mouse Pressed and Its Within the Image Canvas#####
      this.clr = easterEgg.get(mouseX, mouseY);//Grabs Color of Pixel Mouse is On#####
    }
    if (mouseIsPressed && mouseX < width / 2 - 5 && clrChangeSelection === 2 && mouseX > 0 && mouseY < height && mouseY > 0 && redrawOnOff === 9){//If Mouse Pressed and Its Within the Image Canvas#####
      tempclr = landscape1.get(mouseX, mouseY);//Grabs Color of Pixel Mouse is On#####
      this.clr[0] = tempclr[1];//Red and Green Switch#####
      this.clr[1] = tempclr[0];
      this.clr[2] = tempclr[2];//Just Give The Origianl of Missing Color#####
    }
    if (mouseIsPressed && mouseX < width / 2 - 5 && clrChangeSelection === 3 && mouseX > 0 && mouseY < height && mouseY > 0 && redrawOnOff === 9){//If Mouse Pressed and Its Within the Image Canvas#####
      tempclr = landscape1.get(mouseX, mouseY);//Grabs Color of Pixel Mouse is On#####
      this.clr[0] = tempclr[2];//Red and Blue Switch#####
      this.clr[2] = tempclr[0];
      this.clr[1] = tempclr[1];//Just Give The Origianl of Missing Color#####
    }
    if (mouseIsPressed && mouseX < width / 2 - 5 && clrChangeSelection === 4 && mouseX > 0 && mouseY < height && mouseY > 0 && redrawOnOff === 9){//If Mouse Pressed and Its Within the Image Canvas#####
      tempclr = landscape1.get(mouseX, mouseY);//Grabs Color of Pixel Mouse is On#####
      this.clr[1] = tempclr[2];//Green and Blue Switch#####
      this.clr[2] = tempclr[1];
      this.clr[0] = tempclr[0];//Just Give The Origianl of Missing Color#####
    }
    if (mouseIsPressed && mouseX < width / 2 - 5 && clrChangeSelection === 5 && mouseX > 0 && mouseY < height && mouseY > 0 && redrawOnOff === 9){//If Mouse Pressed and Its Within the Image Canvas#####
      tempclr = landscape1.get(mouseX, mouseY);//Grabs Color of Pixel Mouse is On#####
      let avg = (tempclr[0] + this.clr[1] + tempclr[2]) / 3;
      this.clr[0] = avg;
      this.clr[1] = avg;
      this.clr[2] = avg;
    }
    if (mouseIsPressed && mouseX < width / 2 - 5 && clrChangeSelection === 6 && mouseX > 0 && mouseY < height && mouseY > 0 && redrawOnOff === 9){//If Mouse Pressed and Its Within the Image Canvas#####
      tempclr = landscape1.get(mouseX, mouseY);//Grabs Color of Pixel Mouse is On#####
      this.clr[0] = tempclr[0];//Red Remains the Same#####
      this.clr[1] = 0;//Other Colors Set to 0#####
      this.clr[2] = 0;
    }
    if (mouseIsPressed && mouseX < width / 2 - 5 && clrChangeSelection === 7 && mouseX > 0 && mouseY < height && mouseY > 0 && redrawOnOff === 9){//If Mouse Pressed and Its Within the Image Canvas#####
      tempclr = landscape1.get(mouseX, mouseY);//Grabs Color of Pixel Mouse is On#####
      this.clr[0] = 0;//Other Colors Set to 0#####
      this.clr[1] = tempclr[1];//Green Remains the Same#####
      this.clr[2] = 0;
    }
    if (mouseIsPressed && mouseX < width / 2 - 5 && clrChangeSelection === 8 && mouseX > 0 && mouseY < height && mouseY > 0 && redrawOnOff === 9){//If Mouse Pressed and Its Within the Image Canvas#####
      tempclr = landscape1.get(mouseX, mouseY);//Grabs Color of Pixel Mouse is On#####
      this.clr[0] = 0;
      this.clr[1] = 0;//Other Colors Set to 0#####
      this.clr[2] = tempclr[2];//Blue Remains the Same#####
    }
    if (mouseIsPressed && mouseX < width / 2 - 5 && clrChangeSelection === "i" && mouseX > 0 && mouseY < height && mouseY > 0 && redrawOnOff === 9){//If Mouse Pressed and Its Within the Image Canvas#####
      tempclr = landscape1.get(mouseX, mouseY);//Grabs Color of Pixel Mouse is On#####
      this.clr[0] = 255 - tempclr[0];//Inverse of Red Value#####
      this.clr[1] = 255 - tempclr[1];//Inverse of Green Value#####
      this.clr[2] = 255 - tempclr[2];//Inverse of Blue Value#####
    }
  }
}
//End Class Redraw#########
