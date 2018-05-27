/* Write a JavaScript program to count number of words in string. Go to the editor
Note : 
- Remove white-space from start and end position. 
- Convert 2 or more spaces to 1. 
- Exclude newline with a start spacing. */

let str = '     guys\' no matter  what kakashi   says,\n kakashi  is still an imposter who was supposed to save rin - (obito\'s thoughts of kakashi - obito the anti-hero) '

function countNumber (str) {
  str = str.trim().replace(/\n /,' ').replace(/\s{2,}/g,' ');
  arr = str.split(/\s/)
  console.log(arr);
  arr = arr.map(function(element){
    return element.replace(/[^\w-']/g,'')
  })
  console.log(arr);
  wordArr = arr.filter(function(element){
    return (/^\w+([-']\w+)*'?$/.test(element))
  })
  console.log(wordArr);
  return wordArr.length
}

console.log(countNumber(str))

/* Solution
 function count_words()
{
str1= document.getElementById("InputText").value;
//exclude  start and end white-space
str1 = str1.replace(/(^\s*)|(\s*$)/gi,"");
//convert 2 or more spaces to 1  
str1 = str1.replace(/[ ]{2,}/gi," ");
// exclude newline with a start spacing  
str1 = str1.replace(/\n /,"\n");
document.getElementById("noofwords").value = str1.split(' ').length;
}*/