// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers

// a must be bigger than b 

function gcd(a, b) {
  let r = a % b;
  if (!r) return b;
  return gcd(b, r)
}

console.log(gcd(45, 10));
console.log(gcd(3768, 1701));
console.log(gcd(48, 36));
