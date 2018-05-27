// Write a JavaScript function that returns array elements larger than a number.


function biggerOnly(arr,num) {

return arr.filter(function(element){return element > num })

}

console.log(biggerOnly([10,4,23,50,16,44,32,9,44],12));