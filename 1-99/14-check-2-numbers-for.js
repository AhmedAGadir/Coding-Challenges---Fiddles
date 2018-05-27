//  Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50

function check2(a,b) {
if (a === 50 || b === 50 || a+b === 50) {
return true
}
return false
}

console.log(check2(50,2));
console.log(check2(26,24));
console.log(check2(25,2));