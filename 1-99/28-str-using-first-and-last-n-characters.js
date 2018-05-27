// Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n.

function newString(str,n) {

return str.substr(0,n) + str.substr(str.length-n)

}


console.log(newString('Samurai Jack is the show that used to be watched by Ahmed!',7))