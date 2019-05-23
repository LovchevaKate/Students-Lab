function getMaxSubSum_n2(arr) {
    let maxSum = 0;   
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += Number(arr[j]);
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }    
    return maxSum;
};
  
let t1o2_result = document.getElementById('t1o2_result');
  t1o2.onclick = function() { 
    let arr = prompt('Array: ', '0, 8, 7');
    t1o2_result.value = getMaxSubSum_n2(arr.split(', '));
};


function getMaxSubSum_n(arr) {
  let maxSum = 0,
    partialSum = 0;
  for (let i = 0; i < arr.length; i++) {
    partialSum += Number(arr[i]);
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
};

let t1o_result = document.getElementById('t1o_result');
t1o.onclick = function() { 
  let arr = prompt('Array: ', '0, 8, 7');
  t1o_result.value = getMaxSubSum_n(arr.split(', '));
};



function getMinElement(arr) {
  return Math.min.apply(null, arr);
};

function getMaxElement(arr) {
  return Math.max.apply(null, arr);
};

function getMidElement(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
      sum += Number(arr[i]);
  }
  return sum / arr.length;
};

let min_element = document.getElementById('min_element');
let max_element = document.getElementById('max_element');
let mid_element = document.getElementById('mid_element');

search_button.onclick = function() { 
  let arr = prompt('Array: ', '0, 8, 7, 3');
  min_element.value = getMinElement(arr.split(', '));
  max_element.value = getMaxElement(arr.split(', '));
  mid_element.value = getMidElement(arr.split(', '));
};



selection_button.onclick = function() { 
  let arr = prompt('Array: ', '0, 2, 3, 5, 1, 4, 5, 11');
  selection.value = getMaxSelection(arr.split(', '));
};

function getMaxSelection(arr) {
  let arr2 = [];
  let len; 
  arr2[0] = arr[0]; 
  len = 1; 
  for (let i = 1; i < arr.length; i++) { 
    if (arr[i] < arr2[0]) 
      arr2[0] = arr[i]; 
  
    else if (arr[i] > arr2[len - 1]) 
      arr2[len++] = arr[i]; 
  }
  return arr2; 
} 














