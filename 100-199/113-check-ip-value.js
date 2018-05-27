// Write a JavaScript function to check whether a given value is IP value or not

//solution - (from https://www.regular-expressions.info/ip.html)
// also included a feature to retrieve the last 3 digits of the IP address - using (?:x)  
// see https://www.regular-expressions.info/ip.html, mdn and bookmarks

let matches = '123.123.123.222'.match(/\b(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\b/);

// ?: has to be used at the start of every bracket if you want them (the code in the parenthesis) not be captured - this includes brackets within brackets 

console.log(matches);
console.log(matches[1]);
  
