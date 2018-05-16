// Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrome(str) {

if (str === str.split("").reverse().join("")) {
return true} else {return false}
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('rasengan'));
console.log(isPalindrome('madam'));
console.log(isPalindrome('run'));
