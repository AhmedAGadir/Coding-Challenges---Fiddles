// Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

function gCD(x,y) { 
  let biggerNumb;
  if (x > y) {biggerNumb = x;} else { biggerNumb = y;}
  let xDivisors = [];
  let yDivisors = [];
  for (let i = 1; i <= biggerNumb; i++){
    if (x % i === 0) {xDivisors.push(i)}
    if (y % i === 0) {yDivisors.push(i)}    
  }
  let maxDivisor;
  for (let a = 0; a < xDivisors.length; a++){
    for (let b = 0; b < yDivisors.length; b++){
      if (xDivisors[a] === yDivisors[b]){maxDivisor = xDivisors[a]}
    }  
  }
  return maxDivisor
}

console.log(gCD(36,24))
