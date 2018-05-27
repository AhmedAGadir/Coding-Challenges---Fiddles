/* Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level. Go to the editor
Sample Data :
console.log(flatten([1, [2], [3, [[4]]],[5,6]])); 
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true)); 
[1, 2, 3, [[4]], 5, 6] */

  function flatten(arr){
    let store = [];
    function x(arr) {
      arr.forEach(function(element){
        if (typeof element === 'number'){store.push(element)}
        else if (element.constructor === Array){return x(element)}
      });
    } 
    x(arr);
    return store;
  }
  

console.log(flatten([1, [2], [3, [[4]]],[5,6]])); 
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true)); 