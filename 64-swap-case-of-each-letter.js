// JavaScript: Swap the case of each character of a string, upper case to lower and vice versa. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function swapCase(str){
let newStr = ""
  for (let i = 0; i < str.length; i++){
    if (str[i].toLowerCase() === str[i]) {
     newStr += str[i].toUpperCase();}
    else {newStr +=str[i].toLowerCase();}
  }
  return newStr 
}

console.log(swapCase('The Quick Brown Fox'))