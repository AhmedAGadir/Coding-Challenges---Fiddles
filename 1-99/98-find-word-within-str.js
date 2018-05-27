// Write a JavaScript function to find a word within a string. 

function searchWord(str,word){
  word = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  let re = new RegExp('\\b' + word + '\\b','gi'); 
  let matches = str.match(re);
  return `'${word}' was found ${matches.length} times`
}

console.log(searchWord('The quick brown fox', 'fox')); 
console.log(searchWord('aa, bb, cc, dd, aa', 'aa'));
"'fox' was found 1 times." 
"'aa' was found 2 times."
console.log(searchWord('aa, bbaa, caac, aadd, aa', 'aa'));
"'aa' was found 2 times."