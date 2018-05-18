function isPalindrome(str) {
  if (str === str.split("").reverse().join("")) {
  return true} else {return false}
}

function longestPalindromeInString(str) {
  let wordArray = str.split(" ");
  let longestPalindrome = ""; 
  for (let i = 0; i < wordArray.length; i++){
    if (isPalindrome(wordArray[i]) === true && wordArray[i].length > longestPalindrome.length) {
      longestPalindrome = wordArray[i]
    }
  }
  return longestPalindrome;
}

console.log(longestPalindromeInString("mum bought a racecar"))
console.log(longestPalindromeInString("noon bought a redivider for her new kayak"))
