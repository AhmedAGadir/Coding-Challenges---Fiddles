// Write a JavaScript function to create a Zerofilled value with optional +, - sign. Go to the editor

function zeroFill(numb,n,sign) {
  if (sign === undefined)
    sign = '';
  let numberOfZeros = n - numb.toString().length;
  let fill = ''
  for (let i = 0; i < numberOfZeros; i++)
    fill += '0';
  return sign + fill + numb.toString();
}

console.log(zeroFill(120, 5, '+')); 
"+00120"
console.log(zeroFill(29, 4));
"0029"
console.log(zeroFill(29, 2));
"0029"