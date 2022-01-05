//Ricardo Velasquez
//Lab 1021 Image Manipulation

function manipulationOption() {
  if (redrawOnOff === 9) {//If Redraw is Chosen; Default#####
    brush.render();//Render Brush#####
  } else if (redrawOnOff === 0) {//If Copy and Change of Full Image is Chosen#####
    if (clrChangeSelection === 1){//Replicate Image Exactly#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let index = (x + y * landscape1.width) * 4;//Used to Find Pixel Location#####
          landscape2.pixels[index] = landscape1.pixels[index];//Red Remains the Same#####
          landscape2.pixels[index + 1] = landscape1.pixels[index + 1];//Green Remains the Same#####
          landscape2.pixels[index + 2] = landscape1.pixels[index + 2];//Blue Remains the Same#####
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === 2){//Switch the Red and Green Colors#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let index = (x + y * landscape1.width) * 4;//Used to Find Pixel Location#####
          landscape2.pixels[index] = landscape1.pixels[index + 1];//Red is Now Green Values#####
          landscape2.pixels[index + 1] = landscape1.pixels[index];//Green is Now Red Values#####
          landscape2.pixels[index + 2] = landscape1.pixels[index + 2];//Blue Remains the Same#####
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === 3){//Switch the Red and Blue Colors#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let index = (x + y * landscape1.width) * 4;//Used to Find Pixel Location#####
          landscape2.pixels[index] = landscape1.pixels[index + 2];//Red is Now Blue Value#####
          landscape2.pixels[index + 1] = landscape1.pixels[index + 1];//Green Remains the Same#####
          landscape2.pixels[index + 2] = landscape1.pixels[index];//Blue is Now Red Values#####
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === 4){//Switch the Green and Blue Colors#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let index = (x + y * landscape1.width) * 4;//Used to Find Pixel Location#####
          landscape2.pixels[index] = landscape1.pixels[index];//Red Remains the Same#####
          landscape2.pixels[index + 1] = landscape1.pixels[index + 2];//Green is Now Blue Values#####
          landscape2.pixels[index + 2] = landscape1.pixels[index + 1];//Blue is Now Green Values#####
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === 5){//Convert to Black and White#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let index = (x + y * landscape1.width) * 4;//Used to Find Pixel Location#####
          let avg = (landscape1.pixels[index] + landscape1.pixels[index + 1] + landscape1.pixels[index + 2]) / 3;//Average of All Colors In a Pixel#####
          landscape2.pixels[index] = avg;//Same Value as Avg#####
          landscape2.pixels[index + 1] = avg;//Same Value as Avg#####
          landscape2.pixels[index + 2] = avg;//Same Value as Avg#####
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === 6){//Convert to Pure Red#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let index = (x + y * landscape1.width) * 4;//Used to Find Pixel Location#####
          landscape2.pixels[index] = landscape1.pixels[index];//Red Values Stay#####
          landscape2.pixels[index + 1] = 0;//Value Set to 0#####
          landscape2.pixels[index + 2] = 0;//Value Set to 0#####
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === 7){//Convert to Pure Green#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let index = (x + y * landscape1.width) * 4;//Used to Find Pixel Location#####
          landscape2.pixels[index] = 0;//Red Value Set to 0#####
          landscape2.pixels[index + 1] = landscape1.pixels[index + 1];//Green Values Stay#####
          landscape2.pixels[index + 2] = 0;//Blue Value Set to 0#####
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === 8){//Pure Blue#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let index = (x + y * landscape1.width) * 4;//Used to Find Pixel Location#####
          landscape2.pixels[index] = 0;//Red Value Set to 0#####
          landscape2.pixels[index + 1] = 0;//Green Value Set to 0#####
          landscape2.pixels[index + 2] = landscape1.pixels[index + 2];//Blue Values Stay#####
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === "t"){//Threshold#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let index = (x + y * landscape1.width) * 4;//Used to Find Pixel Location#####
          let avg = (landscape1.pixels[index] + landscape1.pixels[index + 1] + landscape1.pixels[index + 2]) / 3;//Average of All Colors In a Pixel#####
          let thresh = threshold.value();//Threshold Value#####
          if (avg <= thresh){//Set Avg to Either Black or White#####
            avg = 0;
          } else {
            avg = 255;
          }
          landscape2.pixels[index] = avg;//All Colors Values Remain the Same#####
          landscape2.pixels[index + 1] = avg;//All Colors Values Remain the Same#####
          landscape2.pixels[index + 2] = avg;//All Colors Values Remain the Same#####
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === "i"){//Invert Colors#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let index = (x + y * landscape1.width) * 4;//Used to Find Pixel Location#####
          let avg = (landscape1.pixels[index] + landscape1.pixels[index + 1] + landscape1.pixels[index + 2]) / 3;//Average of All Colors In a Pixel#####
          landscape2.pixels[index] = 255 - landscape1.pixels[index];//Red Inverse#####
          landscape2.pixels[index + 1] = 255 - landscape1.pixels[index + 1];//Green Inverse#####
          landscape2.pixels[index + 2] = 255 - landscape1.pixels[index + 2];//Blue Inverse
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    }
  }
}
