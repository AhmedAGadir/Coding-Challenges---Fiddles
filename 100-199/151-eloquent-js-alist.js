

let list = {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}};

//======================================================

/* the solution is so simple and clean, but mine is more elegant 
  function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
} */

// my solution
function arrayToList([value, ...rest]) {
  if (rest.length === 0)  
    return {value, rest: null};
  return {value, rest: arrayToList(rest)}
}

// =====================================================

// again the solution is so clean and simple, mine is overly technical
  function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
} 

// my solution 
/* function listToArray(list) {
  let arr = [];
  
  function doSomething(list) {
    for (let item of Object.keys(list)){
      if (!list[item]) continue;
      if (item === 'rest') 
        return doSomething(list[item]); 
      arr.push(list[item]); 
    }
  }
  doSomething(list);
  
  return arr
}
 */


// how to do it with a custom iterator 
/*
function listToArray(list) {
  let arr = [];
  
  function doSomething(list) {
  
  Object.defineProperty( list, Symbol.iterator, {
	enumerable: false,
	writable: false,
	configurable: true,
	value: function() {
		var o = this;
		var idx = 0;
		var ks = Object.keys( o );
		return {
			next: function() {
				return {
					value: o[ks[idx++]],
					done: (idx > ks.length)
				};
			}
		};
	}
} );

    for (let item of list){
      if (!item) continue;
      if (typeof item === 'object') 
        return doSomething(item); 
      arr.push(item); 
    }
  }
  doSomething(list);
  
  return arr
}

*/


// ==================================================
/* solution - mine is simpler (not sure if i did something wrong)
function prepend(value, list) {
  return {value, rest: list};
}*/

//my solution
function prepend (value, rest) {
  return {value, rest}
}

// =====================================================
 // solution with a for loop
/*  function nth(list, n = 0) {
   let node = list;
   for (let c = 0; c < n ; c++)
     node = node.rest;
   return node.value;
 } */
 
/*  solution - i missed the mark here */
  function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
 }  
 

console.log(arrayToList([10, 20, 30, 40, 50]));
console.log(listToArray(arrayToList([10, 20, 30, 40, 50])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30, 40, 50]), 3));
