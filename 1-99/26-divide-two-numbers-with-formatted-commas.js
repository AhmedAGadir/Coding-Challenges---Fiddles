
function divideAndCommas(x,y) {

let numb = Math.floor(x / y)

let z = numb.toString();

for (let i = z.length-4; i >= 0 ; i -= 3){
z = z.substring(0,i+1) + ',' + z.substring(i+1)
}

return z
}

console.log(divideAndCommas(23545434233503412,4));
console.log(divideAndCommas(2354543423350342,4));
console.log(divideAndCommas(235454342335034,4));
console.log(divideAndCommas(23545434233502,4));