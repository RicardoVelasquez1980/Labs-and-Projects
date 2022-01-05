//Ricardo Velasquez
//Warm Up 1115

let nums = [];

function setup() {
  var cnv = createCanvas(900, 700);
  cnv.position((windowWidth - width) / 2, 30);
  loadNums(10);
  let s = smallest(nums);
}

function loadNums(n){
  for (let i = 0; i < n; i++){
    nums[i] = ceil(random(10));
  }
}

function smallest(arr){
  let small = 100;
  for(let i = 0; i < arr.length; i++){
    if (small > arr[i]){
      small = arr[i];
    }
  }
  return small;
}
