//Ricardo Velasquez
//Bubble Sort

//Global Variables##########
let nums;//Nums Array#####
let hereMom = 0;//Selector, Variable Name From Non Other Than Shane#####

function setup() {
  var cnv = createCanvas(900, 700);
  cnv.position((windowWidth - width) / 2, 30);
  hereMom++;
  nums = [];
  for (let i = 0; i < 10; i++){
    nums[i] = ceil(random(10));
  }
  console.log("");
  console.log("Unsorted: " + nums);
  if(hereMom === 1){
    mySort(nums);
  } else if(hereMom === 2){
    bubbleSort(nums);
  } else if(hereMom === 3){
    selectionSort(nums);
  } else if(hereMom === 4){
    insertionSort(nums);
  }
}//+++++++++++++++++++++++++++++++++++++++++++++++++++  stup

function mySort(arr){
  for (let i = 0; i < arr.length; i++){
    for (let j = i++; j < arr.length; j++){
      if (arr[i] < arr[j]){
        swap(arr, i, j);
      }
    }
  }
  console.log("Cae Sort: " + nums);
  setup();
}

function bubbleSort(arr){
  for (let i = arr.length - 1; i > 0; i--){
    for (let j = 0; j < i; j++){
      if (arr[j] > arr[j + 1]){
        swap(arr, j, j + 1);
      }
    }
  }
  console.log("Bubble Sort: " + nums);
  setup();
}

function selectionSort(arr){
  for (let  i = 0; i < arr.length - 1; i++){
    let index = i;
    for (let  j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[index]){
        index = j;
      }
    }
    swap(arr, i, index)
  }
  console.log("Selection Sort: " + nums);
  setup();
}

function insertionSort(arr){
  for (let   i = 1; i < arr.length; i++){
    let j = i;
    while ((j > 0) && arr[j] < arr[j-1]) {
      swap(j, j-1);
      j --;
    }
  }
  console.log("Insertion Sort: " + nums);
}

function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
