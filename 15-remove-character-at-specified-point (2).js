//Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

function removeACharacterAtPosition(x,string){
let stringArray = string.split("");
stringArray.splice(x-1,1);
return stringArray.join("")
}

console.log(removeACharacterAtPosition(4,'abacus')); 
console.log(removeACharacterAtPosition(5,'Ahmed')); 
console.log(removeACharacterAtPosition(2,'love')); 
