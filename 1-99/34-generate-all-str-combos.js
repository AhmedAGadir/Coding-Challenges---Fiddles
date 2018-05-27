//Write a JavaScript function that generates all combinations of a string. Example string : 'dog' . Expected Output : d,do,dog,o,og,g 

//their solution would also give 'dg'. 

// my function would do the same as their expected output for a string of any length

function generateCombos(str) {

for (let i = 0; i < str.length; i++)

  for (let j = 1; j <= str.length-i; j++) {
  console.log(str.substr(i,j))
  }
  
}

generateCombos('dog');
generateCombos('doggo');
generateCombos('Rasengan');