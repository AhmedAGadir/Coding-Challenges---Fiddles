function getLeapYears(x,y) {
  
  let arr= []
  
  for (x; x <= y; x++){
    let Leap = false;
    let year = x;
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {Leap = true; }
    if (year % 4 === 0 && year % 100 !== 0) {Leap = true; }
    if (Leap) arr.push(x)
  }
  
  return arr
}

console.log(getLeapYears(2001,2100))