// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

function difference13(){
if (arguments[0] > 13) {
return Math.abs(2 * (13 - arguments[0]))
}
return 13 - arguments[0];
}

console.log(difference13(5)) 
console.log(difference13(20)) 