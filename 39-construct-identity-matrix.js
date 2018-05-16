function identityMatrix(n) {
let zeroRow = []
  for (let i = 0; i < n ; i++) {
    for (let j = 0; j < n; j++) {  
      if (i === j) { zeroRow[j] = 1}
      else {zeroRow[j] = 0}
    }
  console.log(zeroRow)
  }
}

identityMatrix(4);