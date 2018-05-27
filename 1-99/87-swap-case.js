function swapCase(str){
  
  return str.replace(/[a-z]/gi,function(letter){
    if (letter.toUpperCase() === letter)
      return letter.toLowerCase();
    else 
      return letter.toUpperCase(); 
  } ) 
  
}

console.log(swapCase('AaBbc'));