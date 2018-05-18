// Write a JavaScript function to find the first not repeated character. Go to the editor
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 

function firstNotRepeatedCharacter(str) {
  for (let i = 0; i < str.length; i++){  
    let subString = str.substring(0,i) + str.substring(i+1);
    if (subString.search(str[i]) === -1 && str[i].match(/[a-z]/i)) {
      return str[i]      
    }
  }
}

console.log(firstNotRepeatedCharacter('jfhgkiyjfhgwkiyll'))