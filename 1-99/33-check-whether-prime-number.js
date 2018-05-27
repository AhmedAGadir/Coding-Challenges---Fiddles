// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Go to the editor
//Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// my question - Why does this function ever return false?
// assuming that an input is not equal to 1 or 2 (e.g. an input of 15), the input would go through the for loop and return false. However, wouldn’t the false return value be overridden by the following ‘return true’ (in the line below)?


// answer - As soon is you return something the function exits. So the last line is never reached.


function checkIfPrime(numb) {

if (numb === 1) { return false; }
else if (numb === 2) { return true; }

else {

  for (let x = 2; x < numb; x++) {
  if (numb % x === 0) { return false; }
  }
  return true;    
}
}


console.log(checkIfPrime(2));
console.log(checkIfPrime(15));
console.log(checkIfPrime(17));
console.log(checkIfPrime(19));
