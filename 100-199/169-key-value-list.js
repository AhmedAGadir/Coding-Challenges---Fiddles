// Write a JavaScript function to convert an object into a list of `[key, value]` pairs

function keyValuePairs(obj) {
  let keys = Object.keys(obj);
  let store = [];
  for (let key of keys) {
    store.push({key, value: obj[key]})
  }
  return store;
}

console.log(keyValuePairs({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}))