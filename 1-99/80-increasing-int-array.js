// Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position. Go to the editor

function arrayRange(start,len){
  let arr = [];
  for (let i = 0; arr.length < len ;i++, start++)
    arr[i] = start;
  return arr 
}

console.log(arrayRange(1, 4)); 
// [1, 2, 3, 4]
console.log(arrayRange(-6, 4));
// [-6, -5, -4, -3]