
// Validation without Regular Expressions aka checking data types

// useful methods in here, e.g.: 
toString.call(val) === "[object Number]"

/* THESE COULD ALSO BE USEFUL

SEE https://www.w3resource.com/javascript-exercises/validation/index.php - LOOK AT THE SOLUTIONS

https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch3.md

https://www.webbjocke.com/javascript-check-data-types/

toString.call(32)
"[object Number]"
toString.call(true)
"[object Boolean]"
toString.call(null)
"[object Null]"
toString.call(NaN)
"[object Number]"
toString.call({})
"[object Object]"
toString.call([])
"[object Array]"
toString.call(function(){})
"[object Function]" */


// ===== Write a JavaScript function to validate whether a given value type is boolean or not ======================

console.log(typeof true === "boolean");
console.log(typeof false === "boolean");
console.log(typeof 'yo' === "boolean");
console.log(typeof 32 === "boolean"); 

// ==== Write a JavaScript function to validate whether a given value type is error or not. ==================

 console.log(Error.prototype.isPrototypeOf(new Error()))
/* solution 
function isError (value) {
return value instanceof Error && typeof value.message !== 'undefined'
};*/

//======= Write a JavaScript function to validate whether a given value type is NaN or not.=================
// sure solution is
 let a = NaN;
console.log(Number.isNaN(a)) 
//my attempt was:  
//console.log (typeof a === 'number' && a != a)

//======= Write a JavaScript function to validate whether a given value type is null or not.================

 // Returns if a value is null
function isNull (value) {
return value === null;
};

// Returns if a value is undefined
function isUndefined (value) {
return typeof value === 'undefined';
}; 

//====== Write a JavaScript function to validate whether a given value is number or not. ===================
 console.log(typeof 5 === 'number'); 


// ========= Write a JavaScript function to validate whether a given value is object or not =============
 function isObject (value) {
return value && typeof value === 'object' && value.constructor === Object;
}; 

// ====== Write a JavaScript function to validate whether a given value type is pure json object or not. ========

let x = { b: 2 }
let y = JSON.parse(JSON.stringify(x));

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

console.log(deepEqual(x, y)) 

// ====== Write a JavaScript function to validate whether a given value is RegExp or not. ==================
/* my solution:
console.log(RegExp.prototype.isPrototypeOf(/d+/)) */
// solution 
function isRegExp (value) {
return value && typeof value === 'object' && value.constructor === RegExp;
}; 


// ===== Write a JavaScript function to validate whether a given value type is char or not. =============
// Solution

function is_char(value)
    {
      if (Object.prototype.toString.call(value) !== '[object String]')
        return false;
    return value && value.length === 1;
    }
 
console.log(is_char('f'));
console.log(is_char('*'));

// ====== Write a JavaScript function to check whether given value types are same or not ===============


function is_sameType(value1, value2) {
        if(is_nan(value1) || is_nan(value2)) {
         return is_nan(value1) === is_nan(value2);
        }
        return toString.call(value1) === toString.call(value2);
    }

function is_nan(val)
        {
        return val !== val;
       }

console.log(is_sameType(NaN, NaN));
console.log(is_sameType(null, undefined));
console.log(is_sameType(0, -0));
console.log(is_sameType('12', 100));
console.log(is_sameType('12', '100'));
console.log(is_sameType(12, 100));
