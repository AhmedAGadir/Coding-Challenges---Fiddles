// capitalize the first letter of each word in a string

function capitalizeWords(str){
  
  let arr = str.split(" ");
  return arr.map(
  function(word){
  return word[0].toUpperCase() + word.slice(1);
  }).join(" ");
  
}

console.log(capitalizeWords('js string exercises'));