// Write a JavaScript function to get a part of a string after a specified character.Go to the editor

function subStrAfterChars(str,char,aOrB) {
  char = char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
  let re = new RegExp('^(.*)' + char + '(.*)$');
  // could also use RegExp(char + '([^]*)$'); which accepts any character including newline characters
  let matches =  re.exec(str);
  if (aOrB === 'a')
    return matches[1];
  else if (aOrB === 'b')
    return matches[2];
}

console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a')); 
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
"w3resource" 
"xercises"