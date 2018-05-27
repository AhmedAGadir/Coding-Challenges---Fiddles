// Write a JavaScript function to create a case-insensitive search. Go to the editor

function caseInsensitiveSearch(str,word) {
  if (!word) return 'not matched fam';
  word = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  let re = new RegExp('\\b'+ word + '\\b','i') 
  return str.search(re) !== -1 ? 'Matched' : 'Not Matched'
 
 /* playing around with operators (eloquentJS chapter 1)
  let x = 'Matched';
  if (!re.test(str)) 
    x = '';          
  return x || 'Not Matched' */
}

console.log(caseInsensitiveSearch('JavaScript Exercises', 'exercises')); 
"Matched"
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercises')); 
"Matched"
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercisess')); 
"Not Matched"
console.log(caseInsensitiveSearch('JavaScript Exercises', '')); 
"not matched fam"