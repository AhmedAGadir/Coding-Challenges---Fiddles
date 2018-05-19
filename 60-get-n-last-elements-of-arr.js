//Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

function lastNElements(arr,n) {

  if (n === null) {
    return arr.slice(arr.length-1)
  }
  else {
    return arr.slice(arr.length-n)
  }

}

console.log(lastNElements([1,2,3,4,5,6,7,8]))
console.log(lastNElements([1,2,3,4,5,6,7,8],3))