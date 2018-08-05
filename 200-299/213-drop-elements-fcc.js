/* 

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*/


function dropElements(arr, func) {
  // Drop them elements.
  console.log('arr is: ', arr)
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (func(item)) {
      console.log("function returned true: ", item, func)
      break
    };
    console.log('array was ', arr)
    arr.splice(arr.indexOf(item),1);
    i--;
    console.log('arr is now', arr)
  }
  console.log('finished', arr)
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });