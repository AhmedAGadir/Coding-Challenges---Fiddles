/* Write a JavaScript program to get the first n Fibonacci numbers. Go to the editor
Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two. */

function fibonacciSeries(n = 3) {
  if (n === 1) return [0];
  if (n === 2) return [0,1];
  else {
    let series = fibonacciSeries(n-1);
    series.push(series[n-2]+series[n-3]);
    return series;
  }
}

console.log(fibonacciSeries(1))
console.log(fibonacciSeries(2))
console.log(fibonacciSeries(3))
console.log(fibonacciSeries(4));
console.log(fibonacciSeries(5));
console.log(fibonacciSeries(6));
console.log(fibonacciSeries(7));