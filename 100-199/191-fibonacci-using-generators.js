/* function *fibon() {
  let seq = [0,1], term;
  yield seq[0];
  yield seq[1];
  for (let i = 1; i < seq.length; i++) {
   term = seq[i] + seq[i-1];
   yield term;
   seq.push(term);
  }
}

let it = fibon();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); */

/* lazy filter - gives only even fibonacci values */

function *fibon() {
  let seq = [0,1], term;
  yield seq[0];
  for (let i = 1; i < seq.length; i++) {
   term = seq[i] + seq[i-1];
   if (term % 2 == 0) 
     yield term;
   seq.push(term);
  }
}

let it = fibon();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);