// Write a JavaScript function check if a string ends with specified suffix. Go to the editor

function stringEndsWith(str,word) {
  if (!word)
    return false;
  word = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  let re = new RegExp(word + '$', 'i')
  return re.test(str);
}

console.log(stringEndsWith('JS PHP PYTHON','PYTHON')); 
//true
console.log(stringEndsWith('JS PHP PYTHON',''));
//false