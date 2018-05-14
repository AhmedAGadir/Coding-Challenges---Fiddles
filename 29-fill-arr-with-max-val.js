//Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.  

function fillArrayWithMax(arr) {

let maxValue = 0;

if (arr[0] > arr[arr.length-1] ) {maxValue = arr[0]
} else {maxValue = arr[arr.length-1]}

return arr.fill(maxValue);

}

console.log(fillArrayWithMax([12,4,5,7,8,3,6,15]))