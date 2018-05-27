// Write a JavaScript function to chop a string into chunks of a given length.

function stringChop(str,n){
  if (n === undefined) {
    let arr = [];
    arr[0] = str;
    return arr
  }
  else {
    for (let i = n - 1; i < str.length; i += n + 1) {
      if (i !== str.length-1)
        str = str.slice(0,i + 1) + ' ' + str.slice(i + 1);
    }
    return str.split(" ");
  }
}


console.log(stringChop('w3resource')); 
console.log(stringChop('w3resource',2)); 
console.log(stringChop('w3resource',3));
// ["w3resource"] 
// ["w3", "re", "so", "ur", "ce"] 
// ["w3r", "eso", "urc", "e"]