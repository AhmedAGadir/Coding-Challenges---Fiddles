function antiOptimizeAsync(task) {
  
//   let t0 = performance.now();
//   task();
//   let t1 = performance.now();

  let t0 = new Date().getTime();
  let res = task();
  let t1 = new Date().getTime();
  
  let ms = 11000 - (t1 - t0);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(res), ms)
  });
}