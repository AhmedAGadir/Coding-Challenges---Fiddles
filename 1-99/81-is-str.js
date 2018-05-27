// Write a JavaScript function to check whether an `input` is a string or not. Go to the editor

function isString(str) {
  if (typeof str === 'string')
    return true;
  return false 
}


console.log(isString('w3resource')); 
true
console.log(isString([1, 2, 4, 0]));
false