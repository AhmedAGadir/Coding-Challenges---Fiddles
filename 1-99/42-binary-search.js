// come back to their solution once i learn recurrence

 // my solution
 
 function binaraySearch(arr,x) {
 
 let sArray = arr.sort(function(a,b) {return a-b});
 console.log(`the sorted array is ${sArray}`)
 let startIndex = 0;
 let endIndex = arr.length - 1;
 for (let i = 1; i <= arr.length; i++) {
   let length = endIndex - startIndex + 1;
   let middleIndex = startIndex + Math.floor((length + 1)/2) - 1;
   if (x < sArray[middleIndex]) {endIndex = middleIndex - 1; console.log(`the middle number is ${sArray[middleIndex]}, the remaining array is ${sArray.slice(startIndex, endIndex + 1)}`)}
   if (x > sArray[middleIndex]) {startIndex = middleIndex + 1; console.log(`the middle number is ${sArray[middleIndex]}, the remaining array is ${sArray.slice(startIndex, endIndex+1)}`)}
   if (x === sArray[middleIndex]) { return `${x} is the ${middleIndex+1}th number in the sorted array`}
 }
 }
 
console.log(binaraySearch([6,9,12,15,18,21,24,27,30,33,51,66], 9))

//their solution

function binary_Search(items, value){
    var firstIndex  = 0,
        lastIndex   = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

 return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));   
console.log(binary_Search(items, 5));
 
 