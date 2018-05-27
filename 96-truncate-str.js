// Write a JavaScript function to truncate a string to a certain number of words.

function truncate(str,n) {
  str = str.trim();
  str = str.replace(/[^\w\s]/g,'');
  str = str.match(/\S+/g).slice(0,n).join(" ");
  return str
}

console.log(truncate('The quick brown fox jumps over the lazy dog',4))
console.log(truncate('The, quick. brown? fox: jumps; (over)! the@ lazy (dog)',7))
