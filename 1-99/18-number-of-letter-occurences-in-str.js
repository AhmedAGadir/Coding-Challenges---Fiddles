//Check a given string for the number of occurrences of a given character 

function checkAString(str,char) {

let charOcc = 0;

for (i = 0; i < str.length; i++) {
if (str[i] === char) {
charOcc++}
}
return `the character \'${char}\' appeared ${charOcc} times in the string \'${str}\'`
}

console.log(checkAString('charazard','a'))