//Ricardo Velasquez
//Lab 1021 Image Manipulation

function manipulationOption() {
  if (redrawOnOff === 9) {//If Redraw is Chosen; Default#####
    brush.render();//Render Brush#####
  } else if (redrawOnOff === 0) {//If Copy and Change of Full Image is Chosen#####
    loadImage(landscape2, width / 2 + 5, 0);//Load Image on RIght Half of Screen#####
    if (clrChangeSelection === 1){//Replicate Image Exactly#####
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let index = (x + y * width) * 4;//Used to Find Pixel Location#####
          landscape2.pixels[index] = landscape1.pixels[index];//Red Remains the Same#####
          landscape2.pixels[index + 1] = landscape1.pixels[index];//Green Remains the Same#####
          landscape2.pixels[index + 2] = landscape1.pixels[index];//Blue Remains the Same#####
          landscape2.updatePixels();//Update Pixels of Second Image to New Values
        }
      }
    } else if (clrChangeSelection === 2){//Switch the Red and Green Colors#####
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let index = (x + y * width) * 4;//Used to Find Pixel Location#####
          landscape2.pixels[index] = landscape1.pixels[index + 1];//Red is Now Green Values#####
          landscape2.pixels[index + 1] = landscape1.pixels[index];//Green is Now Red Values#####
          landscape2.pixels[index + 2] = landscape1.pixels[index + 2];//Blue Remains the Same#####
          landscape2.updatePixels();//Update Pixels of Second Image to New Values
        }
      }
    } else if (clrChangeSelection === 3){//Switch the Red and Blue Colors#####
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let index = (x + y * width) * 4;//Used to Find Pixel Location#####
          landscape2.pixels[index] = landscape1.pixels[index + 2];//Red is Now Blue Value#####
          landscape2.pixels[index + 1] = landscape1.pixels[index + 1];//Green Remains the Same#####
          landscape2.pixels[index + 2] = landscape1.pixels[index];//Blue is Now Red Values#####
          landscape2.updatePixels();//Update Pixels of Second Image to New Values
        }
      }
    } else if (clrChangeSelection === 4){//Switch the Green and Blue Colors#####
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let index = (x + y * width) * 4;//Used to Find Pixel Location#####
          landscape2.pixels[index] = landscape1.pixels[index];//Red Remains the Same#####
          landscape2.pixels[index + 1] = landscape1.pixels[index + 2];//Green is Now Blue Values#####
          landscape2.pixels[index + 2] = landscape1.pixels[index + 1];//Blue is Now Green Values#####
          landscape2.updatePixels();//Update Pixels of Second Image to New Values
        }
      }
    } else if (clrChangeSelection === 5){//Convert to Black and White#####
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let index = (x + y * width) * 4;//Used to Find Pixel Location#####
          let avg = (landscape1.pixels[index] + landscape1.pixels[index + 1] + landscape1.pixels[index + 2]) / 3;//Average of All Colors In a Pixel#####
          landscape2.pixels[index] = avg;//Same Value as Avg#####
          landscape2.pixels[index + 1] = avg;//Same Value as Avg#####
          landscape2.pixels[index + 2] = avg;//Same Value as Avg#####
          landscape2.updatePixels();//Update Pixels of Second Image to New Values
        }
      }
    }
  }
}
