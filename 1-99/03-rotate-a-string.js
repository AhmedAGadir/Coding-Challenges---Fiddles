let word = 'w3resource';

let wordArray = word.split("");

console.log(word);

for (let i = 0; i < wordArray.length; i++) {

 let lastLetter = wordArray.pop();
 
 wordArray.unshift(lastLetter);
 
 wordAgain = wordArray.join("");
 
 console.log(wordAgain); 
}