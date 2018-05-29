// Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

function keyValuePairs(obj) {
  let keys = Object.keys(obj);
  let store = {};
  for (let key of keys) {
    store[obj[key]] = key;
  }
  return store;
}

console.log(keyValuePairs({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}))