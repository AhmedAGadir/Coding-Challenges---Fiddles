// Write a JavaScript function to convert a string to title case. Go to the editor

function sentenceCase(str) {

  return str.replace(/\b(\w+)/g,function(match,word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

}




console.log(sentenceCase('PHP exercises. python exercises.')); 
"Php Exercises. Python Exercises."