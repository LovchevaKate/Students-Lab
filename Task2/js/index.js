//1. Array Processing Tool

let SubSum = {
  getMaxSubSum_n2: function (arr) {
    let maxSum = 0;   
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += Number(arr[j]);
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }    
    return maxSum;
},

getMaxSubSum_n : function(arr) {
  let maxSum = 0,
    partialSum = 0;
  for (let i = 0; i < arr.length; i++) {
    partialSum += Number(arr[i]);
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
},

getMinElement : function(arr) {
  return Math.min.apply(null, arr);
},

getMaxElement : function(arr) {
  return Math.max.apply(null, arr);
},

getMidElement : function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
      sum += Number(arr[i]);
  }
  return sum / arr.length;
},

getMaxSelection : function(arr) {
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
};

//a. Sub Sum
let t1o2_result = document.getElementById('t1o2_result');
t1o2.onclick = function() { 
  let arr = prompt('Array: ', '0, 8, 7');
  t1o2_result.value = SubSum.getMaxSubSum_n2(arr.split(', '));
};


let t1o_result = document.getElementById('t1o_result');
t1o.onclick = function() { 
  let arr = prompt('Array: ', '0, 8, 7');
  t1o_result.value = SubSum.getMaxSubSum_n(arr.split(', '));
};


//b. Search
search_button.onclick = function() { 
  let arr = prompt('Array: ', '0, 8, 7, 3');
  min_element.value = SubSum.getMinElement(arr.split(', '));
  max_element.value = SubSum.getMaxElement(arr.split(', '));
  mid_element.value = SubSum.getMidElement(arr.split(', '));
};


//c. Selection Task
selection_button.onclick = function() { 
  let arr = prompt('Array: ', '0, 2, 3, 5, 1, 4, 5, 11');
  selection.value = SubSum.getMaxSelection(arr.split(', '));
};


//2. Date Display Formatter

formatDate_button.onclick = function() { 

  let date_in =  prompt('Date: ', '2015-03-25');
  date_out.value = formatDate(date_in);
};

function formatDate(date) {
  console.log(date);
  let date_out = new Date(date);
  console.log(date_out);
  return date_out;
};



//3. Text Formatter


//4. String calculator
let Calculator = {
  sum : function(num1, num2)
  {
    let res = num1+num2;
    return res;
  },
  sub : function(num1, num2)
  {
    return num1-num2;
  },
  mul : function(num1, num2)
  {
    return num1*num2;
  },
  div : function(num1, num2)
  {
    return num1/num2;
  },
  percent : function(num1, num2)
  {
    return number2*100/number1;
  }
};

function showresult(choise){
  let number1=parseFloat(document.getElementById('number1').value);
  let number2=parseFloat(document.getElementById('number2').value);
  let result;
  
  switch(choise)
    {
    case '+': result = Calculator.sum(number1, number2); break;
    case '-': result = Calculator.sub(number1, number2); break;
    case '*': result = Calculator.mul(number1, number2); break;
    case '/': result = Calculator.div(number1, number2); break;
    case '%': result = Calculator.percent(number1, number2); break;
    default: break;
        
    }
  document.getElementById('calculator_result').value=result;
}

//5. Array Sorter

arraySort_button.onclick = function() {  
  let arr = prompt('Array: ', '0, 8, 7, 9, 1'); 
  arrHighestSort_result.value = ArraySort.arrHighestSort(arr.split(', '));
  arrLowestSort_result.value = ArraySort.arrLowestSort(arr.split(', '));
  arrReverseSort_result.value = ArraySort.arrReverseSort(arr.split(', '));
  arrEvenSort_result.value = ArraySort.arrEvenSort(arr.split(', '));
  arrОddSort_result.value = ArraySort.arrОddSort(arr.split(', '));
  getMinElement_result.value = ArraySort.getMinElement(arr.split(', '));
  getMaxElement_result.value = ArraySort.getMaxElement(arr.split(', '));
};

let ArraySort = {

  arrHighestSort : function(arr) {
    result = arr.sort(function(a, b){return a - b});
  return result;
  },

  arrLowestSort : function(arr) {
    result = arr.sort(function(a, b){return b - a});
  return result;
  },

  arrReverseSort : function(arr) {
    result = arr.reverse();
  return result;
  },

  arrEvenSort : function(arr) {
    result = [];
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] % 2 == 0) {
        result.unshift(arr[i]);
      }
    }
  return result;
  },

  arrОddSort : function(arr) {
    result = [];
    for (let i = 0; i <= arr.length-1; i++) {
      if (arr[i] % 2 != 0) {
        console.log(arr[i]);
        result.unshift(arr[i]);
      }
    }
  return result;
  },
  
  getMinElement : function(arr) {
    return Math.min.apply(null, arr);
  },
  
  getMaxElement : function(arr) {
    return Math.max.apply(null, arr);
  }
}


//6. Binary Converter

var ConvertBase = function (num) {
  return {
      from : function (baseFrom) {
          return {
              to : function (baseTo) {
                  return parseInt(num, baseFrom).toString(baseTo);
              }
          };
      }
  };
};
  
// binary to decimal
ConvertBase.bin2dec = function (num) {
  return ConvertBase(num).from(2).to(10);
};

// binary to hexadecimal
ConvertBase.bin2hex = function (num) {
  return ConvertBase(num).from(2).to(16);
};

// decimal to binary
ConvertBase.dec2bin = function (num) {
  return ConvertBase(num).from(10).to(2);
};

// decimal to hexadecimal
ConvertBase.dec2hex = function (num) {
  return ConvertBase(num).from(10).to(16);
};

// hexadecimal to binary
ConvertBase.hex2bin = function (num) {
  return ConvertBase(num).from(16).to(2);
};

// hexadecimal to decimal
ConvertBase.hex2dec = function (num) {
  return ConvertBase(num).from(16).to(10);
};
      

bin2dec_button.onclick = function() {   
  let numConvert=document.getElementById('num_converter').value;
  result_converter.value= ConvertBase.bin2dec(numConvert);
};

bin2hex_button.onclick = function() {   
  let numConvert=document.getElementById('num_converter').value;
  result_converter.value= ConvertBase.bin2hex(numConvert);
};

dec2bin_button.onclick = function() { 
  let numConvert=document.getElementById('num_converter').value;
  result_converter.value= ConvertBase.dec2bin(numConvert);
};

dec2hex_button.onclick = function() {   
  let numConvert=document.getElementById('num_converter').value;
  result_converter.value= ConvertBase.dec2hex(numConvert);
};

hex2bin_button.onclick = function() { 
  let numConvert=document.getElementById('num_converter').value;  
  result_converter.value= ConvertBase.hex2bin(numConvert);
};

hex2dec_button.onclick = function() {  
  let numConvert=document.getElementById('num_converter').value; 
  result_converter.value= ConvertBase.hex2dec(numConvert);
};
  
  
 