/* Write a JavaScript program to compute the exponent of a number. Go to the editor
Note : The exponent of a number says how many times the base number is used as a factor.
82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent. */


function exponent(a, b = 2) {
  if (!b) 
    return 1;
  return a * exponent(a, b - 1)
}

console.log(exponent(5,3))
console.log(exponent(2,4))
console.log(exponent(7,3))
console.log(exponent(2,8))
console.log(exponent(5))