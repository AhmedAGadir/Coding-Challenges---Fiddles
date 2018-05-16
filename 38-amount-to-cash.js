function amountToCash(num) {

console.log(`£${num} can be broken down into: `)
let money = [50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01]

for (let i = 0; i < money.length; i++) {
  if (num / money[i] >= 1) {
  let x = num / money[i];
  let y = Math.floor(x);
  let z = ((x - y) * money[i]).toFixed(2);
    if (money[i] < 1) { console.log(`${y} x ${money[i]*100}p`)} 
    else { console.log(`${y} x £${money[i]}`)}
  num = z;
  }
  }
}


amountToCash(177.50)