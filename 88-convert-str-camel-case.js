// Write a JavaScript function to convert a string into camel case.

//.replace method

function camelize(str) {
str = str.trim();
str = str[0].toLowerCase() + str.slice(1);
return str.replace(/(\s)([\w$])/g,function(match,one,two){
  return two.toUpperCase();
})
}

//.exec method


console.log(camelize("JavaScript Exercises")); 
console.log(camelize("JavaScript exercises")); 
console.log(camelize("JavaScriptExercises"));


 1