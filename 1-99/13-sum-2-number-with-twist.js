// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum


function sumX(a,b) {
  if (a === b) {
    return 3 * (a + b)
  }
  return a + b
}

console.log(sumX(5,6));
console.log(sumX(5,5));