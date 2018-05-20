 //Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
//Test Data :

function isArray() {

  return Array.isArray(arguments[0])

}



console.log(isArray('w3resource')); 
console.log(isArray([1, 2, 4, 0]));