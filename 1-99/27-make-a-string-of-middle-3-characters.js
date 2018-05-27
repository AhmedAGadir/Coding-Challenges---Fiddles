// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.

function middle3Odd(str) {
if (str.length > 2 && str.length % 2 !== 0) {
middle = ( str.length + 1 ) / 2 
return str.substr(middle-2,3)
}
}

console.log(middle3Odd('12345'));
console.log(middle3Odd('1234567'));
console.log(middle3Odd('123456789'));