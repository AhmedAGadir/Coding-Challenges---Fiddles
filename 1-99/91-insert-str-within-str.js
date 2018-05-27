//  Write a JavaScript function to insert a string within a string at a particular position (default is 1).Go to the editor

function insert(str,word,place){
  if (word === undefined && place === undefined)
    return str;
  if (place === undefined) 
    return word + str;
  else 
    return str.slice(0,place) + word + str.slice(place);
}

console.log(insert('We are doing some exercises.')); 
console.log(insert('We are doing some exercises.','JavaScript ')); 
console.log(insert('We are doing some exercises.','JavaScript ',18));
"We are doing some exercises." 
"JavaScript We are doing some exercises." 
"We are doing some JavaScript exercises."