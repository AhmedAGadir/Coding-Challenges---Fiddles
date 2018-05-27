// Write a JavaScript function to get a random item from an array.

function getRandomItem(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

let test = [1,'true',456,'objective',null];

console.log(getRandomItem(test));
console.log(getRandomItem(test));
console.log(getRandomItem(test));
