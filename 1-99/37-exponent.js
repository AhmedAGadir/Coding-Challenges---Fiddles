function exponent(b,n) {

  let ans = 1
  
  for (let i = 1; i <= n ; i++) {
    ans *= b
  }
  
  return ans
}

console.log(exponent(5,4))