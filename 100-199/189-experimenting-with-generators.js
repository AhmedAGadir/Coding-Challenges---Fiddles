/* generators are syntactic sugar */

/* with generator */

function *gen() {
  let num = 9;
  
  while (true) {
    if (num == 1) {
      yield num;
      break;
    }
    else 
      yield num--
  }
}

let it = gen();
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

for (let num of gen()) 
  console.log(num);
  
/* solution 

let getCountdownIterator = function *() {
    let i = 10;
    while( i > 1 ) {
        yield --i;
    }
}

console.log( [ ...getCountdownIterator() ] );
> [9, 8, 7, 6, 5, 4, 3, 2, 1]

*/
  
  
  /* without generator */
  
function gen2() {
  let num = 9;

  return {
		[Symbol.iterator]: () => {
      return {
        next: () => {
      	  if (num < 1) 
            return {value: num, done: true};
          else 
            return {value: num--, done: false}
        }
      }
    }
  }
}

for (let num of gen2()) 
  console.log(num); 
  
  