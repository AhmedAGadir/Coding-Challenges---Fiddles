//Write a JavaScript function to remove non-word characters. Go to the editor

function removeNonWord(str) {

// return str.replace(/\W/g,''); this is removing non-word characters
  return str.replace(/[^\w\s-]/g,''); // this gives the output they wanted - the solution is more detailed however and i think it goes over unicodes or something that ive yet to learn.
  
// *solution* 
// return str.replace(/[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g,'');

}


console.log(removeNonWord('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL')); 
"PHP - MySQL" // this isnt the result of removing non word characters, spaces and '-' are not word characters so technically they should also be removed 