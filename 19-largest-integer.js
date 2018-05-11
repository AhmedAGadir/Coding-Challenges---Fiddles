 //Write a JavaScript program to find the largest of three given integers.
 
 function largestNumber(x,y,z) {
 let maxValue;
 if ( x > y) { maxValue = x }
 else { maxValue = y }
 if (z > maxValue) {maxValue = z}
 console.log(maxValue)
 }
 
 largestNumber(1,2,3);
 largestNumber(4,6,5);
 largestNumber(9,7,8);
 