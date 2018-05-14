// Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 40 and if two numbers are same return 20.  

function check3(x,y,z) {
if (x === y && y === z) {return 30}
else if (x === y || x === z || y === z) {return 20}
else {return 40}
}

console.log(check3(15,10,5))