function getMaxSubSum_n2(arr) {
    let maxSum = 0; // если совсем не брать элементов, то сумма 0
  
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
  }

  let t1o_result = document.getElementById('t1o_result');
  t1o.onclick = function() { 
    let arr = prompt('Array: ', '0, 8, 7');
    t1o_result.value = getMaxSubSum_n(arr.split(', '));
  };
