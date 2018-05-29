// solution 
// ive got scrap notes on an envelope that explains how it works 
// i need to take an intro to algorithms course and properly understand recursion

var range = function(a, b) {
  if (b - a === 2) {
    return [a + 1];
  } 
  else {
    var list = range(a, b - 1);
    list.push(b - 1);
    return list;
  }
};

console.log(range(2,9));