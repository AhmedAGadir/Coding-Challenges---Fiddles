// solution - elegant as always 
function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl


// my solution - good but i feel like its a bit unorthodox
function maxKey(obj) {
  let maxKey, max = 0;
  for (let key of Object.keys(obj)){
    if (obj[key] > max) {
      maxKey = key;
      max = obj[key];
    }
  }
  return maxKey
}

function characterScript2(char){
  let unicodeChar = char.codePointAt(0);
  for (let script of SCRIPTS){
    for (let [from, to] of script.ranges){
     if (unicodeChar >= from && unicodeChar <= to)
       return script 
    }
  }
  return null 
}


function dominantDirection(text) {
  let directions = {
    'ltr': 0,
    'rtl': 0,
    'ttb': 0,
  }; 
  for (let char of text) {
    let script = characterScript2(char);
    if (!script) continue;
    directions[script.direction]++
  }  
  return maxKey(directions);
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl