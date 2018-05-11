// Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.

//better way of doing it

function newString2(str) {
if (str.length < 1) {
return `error: the string length must be more than 1`}
let middle = str.substring(1,str.length-1);
return str.charAt(str.length-1) + middle + str.charAt(0)
}

console.log(newString2('Jaffa Cakes'));

// my solution
function newString() {
if (arguments[0].length < 1) {
return `error: the string length must be more than 1`}
let stringArray = arguments[0].split("");
let front = stringArray.shift();
let back = stringArray.pop();
stringArray.push(front);
stringArray.unshift(back);
return stringArray.join("");
}

console.log(newString('Hello World'));
console.log(newString(''))