// Write a JavaScript function to count the occurrence of a substring in a string. 

function count (str,word){
  // this is how to escape the user input so that nothing they enter interferes with the regex. see MDN + bookmarks for more
  word = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // you have to use the constructor as using the forward slashes doesnt take in external inputs.
  let re = new RegExp(word, 'gi');
  let matches = str.match(re);
  return matches === null ? 'substring not found' : matches.length;
}

console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// 2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// 1
console.log(count("The quick brown fox jumps over the lazy dog", 'anchor',false));


