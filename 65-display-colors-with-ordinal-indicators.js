let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"], x;

for (let i = 1; i <= color.length; i++){
  if ( i < 4) {x = i}
  else {x = 0}
  console.log(`${i}${o[x]} choice is ${color[i-1]}`)
}

