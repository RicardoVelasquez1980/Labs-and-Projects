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
          let clr = landscape1.get(x, y);
          landscape2.set(x, y, clr);
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === 2){//Switch the Red and Green Colors#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let clr2 = landscape1.get(x, y);
          let clr = [];
          clr[0] = clr2[1];//Red Is Now Green#####
          clr[1] = clr2[0];//Green Is Now Red#####
          clr[2] = clr2[2];//Blue Remains the Same#####
          clr[3] = clr2[3];//Opacity Needs to Be Included or Else an Error Occurs#####
          landscape2.set(x, y, clr);
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === 3){//Switch the Red and Blue Colors#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let clr2 = landscape1.get(x, y);
          let clr = [];
          clr[0] = clr2[2];//Red Is Now Blue#####
          clr[1] = clr2[1];//Green Remains the Same#####
          clr[2] = clr2[0];//Blue Is Now Red#####
          clr[3] = clr2[3];//Opacity Needs to Be Included or Else an Error Occurs#####
          landscape2.set(x, y, clr);
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === 4){//Switch the Green and Blue Colors#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let clr2 = landscape1.get(x, y);
          let clr = [];
          clr[0] = clr2[0];//Red Remains the Same#####
          clr[1] = clr2[2];//Green Is Now Blue#####
          clr[2] = clr2[1];//Blue Is Now Green#####
          clr[3] = clr2[3];//Opacity Needs to Be Included or Else an Error Occurs#####
          landscape2.set(x, y, clr);
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === 5){//Convert to Black and White#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let clr2 = landscape1.get(x, y);
          let avg = (clr2[0] + clr2[1] + clr2[2]) / 3;
          let clr = [];
          clr[0] = avg;//Red Is Now Avg#####
          clr[1] = avg;//Green Is Now Avg#####
          clr[2] = avg;//Blue Is Now Avg#####
          clr[3] = clr2[3];//Opacity Needs to Be Included or Else an Error Occurs#####
          landscape2.set(x, y, clr);
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === 6){//Convert to Pure Red#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let clr2 = landscape1.get(x, y);
          let clr = [];
          clr[0] = clr2[0];//Red Remains the Same#####
          clr[1] = 0;//Green Is Now 0#####
          clr[2] = 0;//Blue Is Now 0#####
          clr[3] = clr2[3];//Opacity Needs to Be Included or Else an Error Occurs#####
          landscape2.set(x, y, clr);
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === 7){//Convert to Pure Green#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let clr2 = landscape1.get(x, y);
          let clr = [];
          clr[0] = 0;//Red Is Now 0#####
          clr[1] = clr2[1];//Green Remains the Same#####
          clr[2] = 0;//Blue Is Now 0#####
          clr[3] = clr2[3];//Opacity Needs to Be Included or Else an Error Occurs#####
          landscape2.set(x, y, clr);
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === 8){//Pure Blue#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let clr2 = landscape1.get(x, y);
          let clr = [];
          clr[0] = 0;//Red Is Now 0#####
          clr[1] = 0;//Green Is Now 0#####
          clr[2] = clr2[2];//Blue Remains the Same#####
          clr[3] = clr2[3];//Opacity Needs to Be Included or Else an Error Occurs#####
          landscape2.set(x, y, clr);
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === "t"){//Threshold#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let clr2 = landscape1.get(x, y);
          let avg = (clr2[0] + clr2[1] + clr2[2]) / 3;
          if (avg <= threshold.value()){//Sets avg  to 0 or 255#####
            avg = 0;
          } else if(avg > threshold.value()){
            avg = 255;
          }
          let clr = [];
          clr[0] = avg;//Red Is Now Avg#####
          clr[1] = avg;//Green Is Now Avg#####
          clr[2] = avg;//Blue Is Now Avg#####
          clr[3] = clr2[3];//Opacity Needs to Be Included or Else an Error Occurs#####
          landscape2.set(x, y, clr);
          threshold.show();//Makes Threshold Slider Reappear#####
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    } else if (clrChangeSelection === "i"){//Invert Colors#####
      image(landscape2, width / 2 + 5, 0);
      landscape1.loadPixels();//Load Pixels of First Image#####
      landscape2.loadPixels();//Load  Pixels of Second Image#####
      for (let y = 0; y < landscape1.height; y++){
        for (let x = 0; x < landscape1.width; x++){
          let clr2 = landscape1.get(x, y);
          let clr = [];
          clr[0] = 255 - clr2[0];//Red Is the Its Inverse#####
          clr[1] = 255 - clr2[1];//Green Is the Its Inverse#####
          clr[2] = 255 - clr2[2];//Blue Is the Its Inverse#####
          clr[3] = clr2[3];//Opacity Needs to Be Included or Else an Error Occurs#####
          landscape2.set(x, y, clr);
        }
      }
      landscape2.updatePixels();//Update Pixels of Second Image to New Values
    }
  }
}
