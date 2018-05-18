//Write a JavaScript function that generates a string id (specified length) of random characters. 

function makeId(l){
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = ""
  for (let i = 0; i < l; i++) {
    randomString += characters[Math.floor(Math.random()*characters.length)] ;
  }
  return randomString;
}

console.log(makeId(6))
console.log(makeId(15))
console.log(makeId(20))