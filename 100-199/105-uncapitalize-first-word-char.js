// Write a JavaScript function to Uncapitalize the first letter of each word of a string. Go to the editor

function unCapitalizeWords(str){
  return str.replace(/(\b)(\w)/g,function(match,boundary,firstLetter){
    return boundary + firstLetter.toLowerCase();
  })
}

console.log(unCapitalizeWords('Js String Exercises'));
"js string exercises"