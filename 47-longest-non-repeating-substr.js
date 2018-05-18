// Write a JavaScript function to find longest substring in a given a string without repeating characters. 

function longestSubstring(str) {
  let maxStore = "";
  for (let i = 0; i < str.length; i++) {
    let string2 = str.substring(i);
    let store = "";
    for (let j = 0; j < string2.length; j++) {
      if (store.includes(string2[j]) === false) {
        store += string2[j];
      }
      else {
        store = string2[j];
      }
      if (store.length > maxStore.length) {
        maxStore = store;}
    }
  }
  return maxStore;
}
  
  console.log(longestSubstring('example.com'))
  console.log(longestSubstring("google.com"))

