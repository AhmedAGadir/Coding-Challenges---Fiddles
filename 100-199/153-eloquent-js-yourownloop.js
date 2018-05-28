/* or 
for (let i = initializer; exitCondition(i); i = finalExpression(i))/  
  action(i);
  return null 
  */  

function loop(initializer, exitCondition, finalExpression, action) {
  let i = initializer;
  while (exitCondition(i)) {
    action(i);
    
    i = finalExpression(i);
  }
  return null
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

