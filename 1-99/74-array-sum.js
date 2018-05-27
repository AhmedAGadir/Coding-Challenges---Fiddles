// Compute the sum of each individual index value of two or more arrays

function arraySum() {

  let longestArr = 0;
  
  for (let i = 0; i < arguments.length; i++){
    if (arguments[i].length > longestArr) {longestArr = arguments[i].length}
  }
  
  let sum = [];
  
  for (let j = 0; j < longestArr; j++){ 
    sum[j] = 0;
    for (let z = 0; z < arguments.length; z++) {
      if (typeof arguments[z][j] === 'number') {
        sum[j] += arguments[z][j];
      }
    }  
  }
  return sum
}


console.log(arraySum([1,2,3,4,5],[6,7,8,9]));
console.log(arraySum([1,2,3,4,5],[6,7,8,9],[10,11,12,13,14,15,16]));

