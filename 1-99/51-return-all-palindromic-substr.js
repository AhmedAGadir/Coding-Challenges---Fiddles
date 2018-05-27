// return all the palindromic substrings in a string and each of their lengths

// abracadabra

// loop 2ce, once picking a letter, the second looking through the rest of the string for the same letter, when the letter is found check if there is a palindrome, if there is log it down (Add it to an array) then make another function which goes through the array, sorts their lengths and returns them in decending order.

function isPalindrome(str) {
  if (str === str.split("").reverse().join("")) {
  return true} else {return false}
}

function returnAllPalindromicSubstrings(str){
  let store = [] 
  for (let i = 0; i < str.length; i++) {
    let letterA = str[i];
    for (let j = i + 1; j < str.length; j++ ) {
    let letterB = str[j];
      if (letterA === letterB) {
        if (isPalindrome(str.substring(i,j+1)) === true){
          store.push(str.substring(i,j+1))
        }
      }
    }
  }
let sortedArray = store.sort().sort(function(a,b){return b.length - a.length})
sortedArray.forEach(function(element){console.log(`"${element}" - length ${element.length}`)})
}

returnAllPalindromicSubstrings('abracadabra')
returnAllPalindromicSubstrings('bananas')

