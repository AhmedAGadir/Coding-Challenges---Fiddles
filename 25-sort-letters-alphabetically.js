//JavaScript program to convert the letters of a given string  in alphabetical order.


function sortAlphabetically(str) {

return str.split("").sort().join("")

}

console.log(sortAlphabetically('sdfgadshesaf'));
console.log(sortAlphabetically('adferjhnrgfgrefg'));
console.log(sortAlphabetically('asfgfashbafdg'));
console.log(sortAlphabetically('fsdfdfs'));