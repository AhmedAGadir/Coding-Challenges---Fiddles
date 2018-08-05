/* 

Intermediate Algorithm Scripting: Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/



function addTogether() {
  let args = [...arguments]
  console.log(args);
  
  for (let arg of args) {
    if (typeof arg !== 'number') return undefined;
  }
  
  if (args.length == 1) {
    return function(param) {
      if (typeof param !== 'number') return undefined;
      return args[0] + param;
    }
  }

  return args.reduce((a,b) => a + b)

}

addTogether(2,3);