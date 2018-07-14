/* let t0 = performance.now()
let t1 = performance.now();
console.log("Call to antioptimize took " + (t1 - t0).toFixed(3) + " milliseconds.") */

// =============================================================================

// using async functions 

 async function antiOptimize(task) {
  let timeoutify = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(task()), 10700)
  })
  return timeoutify
}

antiOptimize(() => console.log('hi'))

// =============================================================================

 // using generators 

 function *myGen(task) {
  let a = yield new Promise((resolve, reject) => {
    setTimeout(() => resolve(task()), 2000)
  });
  return a + ' ahmed';
}

function antiOptimize(task) {
  let it = myGen(task);
  let prom = it.next().value;
  prom.then(res => console.log(it.next(res).value));

}

antiOptimize(() => 'hi') 
 

