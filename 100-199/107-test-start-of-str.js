// Write a JavaScript function to test whether a string starts with a specified string. Go to the editor
function startsWith(str,word) {
  word = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  let re = new RegExp('^' + word,'i');
  return re.test(str);
}
console.log(startsWith('js string exercises', 'js'));
// Write a JavaScript function to test whether a string ends with a specified string. Go to the editor
function endsWith(str,word) {
  word = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  let re = new RegExp(word + '$','i');
  return re.test(str);
}
console.log(endsWith('JS string exercises', 'exercises'));