// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Go to the editor
// Sample arguments : 'w3resource.com', 'o' 
// Expected output : 2 

function checkOcc(str,x) {
let occ = 0;
for (let i = 0; i <  str.length; i++) {
  if (str[i] === x) {occ++}
}
return occ 
}

console.log(checkOcc('Samurai jack','a'))
