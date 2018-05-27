// Write a JavaScript program to shuffle an array.

// go through the array and foreach call a function that i made up
// set up an empty array,
// what the function does is that it generates a random number from 0 - array length, and places the array item in that place, as long as that space in the array is empty, if the space is not empty, it just calls the function again

//my solution 
let sampleArr = [1,2,3,4,5,6,7];
let newArr = [];

sampleArr.forEach(function shuffle(element){
  let randomNum = Math.floor(Math.random()*sampleArr.length);
  if (newArr[randomNum] === undefined) {newArr[randomNum] = element}
  else {shuffle(element)}
})

console.log(newArr);

// their solution 
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));
