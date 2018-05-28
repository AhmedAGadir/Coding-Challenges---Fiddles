/* Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays. */

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

let newArr = arrays.reduce((a,b) => a.concat(b))

console.log(newArr)

/* 

another one i did just for the sake of it

function flatten(arr) {
  let store = [];
  (function doSomething(arr) {
    for (let item of arr){
      if (Array.isArray(item)) doSomething(item);
      else store.push(item);
    }
  })(arr)
  return store
}


console.log(flatten([1,[2,3],[[4,5,[[6]]],7]])) */