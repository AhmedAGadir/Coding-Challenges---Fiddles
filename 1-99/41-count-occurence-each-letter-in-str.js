// Write a JavaScript function to  get the number of occurrences of each letter in specified string.

function numberOfOccurences(str) {
  let store = "";
  for (let i = 0; i < str.length; i++){
    let letter = str[i].toLowerCase();
    if (store.includes(letter) === false && letter.match(/[a-z]/i)) {
      store += letter;
      let count = 0;
      for (let j = 0; j < str.length; j++){
        if (str[j].toLowerCase() === letter) {
          count++
        }
      }
      console.log(`the letter ${letter} appeared ${count} times`) 
    }     
  }
}

numberOfOccurences('Samurai Jack, Samurai Jack, wawawa jack, HAJAH!')