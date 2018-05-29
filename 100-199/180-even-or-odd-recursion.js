/*  Write a JavaScript program to check whether a number is even or not. */

function evenOrOdd(n) {
  if (n < 0) return evenOrOdd(-n);
  if (n === 0) return 'even';
  else if (n === 1) return 'odd';
  else return evenOrOdd(n-2)
}

console.log(evenOrOdd(10));
console.log(evenOrOdd(5));
console.log(evenOrOdd(-7));
console.log(evenOrOdd(13));

