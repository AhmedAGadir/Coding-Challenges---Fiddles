// Write a JavaScript program to compute the sum of an array of integers. Go to the editor
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21 


function sumArr(arr) {
  
  if (arr.length === 1) 
    return arr[0];
  
  else { 
    let sum = sumArr(arr.slice(1));
    sum += arr[0];
    return sum
  }
  
}

console.log(sumArr([1, 2, 3, 4, 5, 6]))