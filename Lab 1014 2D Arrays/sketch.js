//Ricardo Velasquez
//lab 1014 2D Arrays

//Variable Declaration##########
let nums = [];//Array of Nums#####
let numAvg;
function setup() {
  var cnv = createCanvas(900, 700);
  cnv.position((windowWidth - width) / 2, 30);
  showNumbers();
  numAvg = getAverage();
  console.log("Average = " + numAvg);
}

function showNumbers(){
  for (let i = 0; i < 10; i++){
    nums[i] = [];
    for (let j = 0; j < 10; j++){
      nums[i][j] = floor(random(1, 100));
      console.log("nums[" + i + "][" + j + "] = " + nums[i][j]);
    }
  }
}

function getAverage(){
  let avg = 0;
  for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
      avg = nums[i][j] + avg;
    }
  }
  return avg / 100;
}
