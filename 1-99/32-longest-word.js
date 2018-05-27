function longestWord(str) {
let arr = str.split(" ")
let maxWord;
let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
    maxLength = arr[i].length;
    maxWord = arr[i];
    }    
  }
return maxWord
}

console.log(longestWord("web development is cool"))