//Write a JavaScript function to move an array element from one position to another. 

function move(arr,from,to) {
 let item = arr.splice(from, 1)[0];
 if (from < 0) 
   arr.splice(to + 1, 0, item);
 else 
   arr.splice(to, 0, item);
 return arr
}


console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]