 function sumFibs(num) {
 if (num == 1) return 1;
  return fibon(num).filter(n => n % 2 !== 0).reduce((a,b) => a + b);
}

function fibon(num) {
  let series = [1, 1];
  while (series[series.length-1] < num) {
    let nextNum = series[series.length-1] + series[series.length-2];  
    series.push(nextNum);
  }
  
  if (series[series.length-1] > num) series.pop();
  
  return series;
}

  console.log(sumFibs(1)); 
  console.log(sumFibs(1000)); 
  console.log(sumFibs(4000000)); 
  console.log(sumFibs(4)); 
  console.log(sumFibs(75024)); 
  console.log(sumFibs(75025)); 
  
  /* sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721. */