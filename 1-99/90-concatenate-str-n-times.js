// Write a JavaScript function to concatenates a given string n times (default is 1). 

function repeat(str,n){
  if (n === undefined)
    n = 1;
  let word = '';
  for (let i = 1; i <= n; i++)
    word += str;
  return word;
}


console.log(repeat('Ha!')); 
console.log(repeat('Ha!',2)); 
console.log(repeat('Ha!',3));
"Ha!" 
"Ha!Ha!" 
"Ha!Ha!Ha!"