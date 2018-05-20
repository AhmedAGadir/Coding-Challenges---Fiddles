// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity). 

function removeDuplicates(arr) { 
  let store = [];
  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'string') {
      arr[i] = arr[i].toLowerCase();
    }
    if (store.includes(arr[i]) === false){
      store.push(arr[i]);
    }
  }
  arr = store;
  return arr
}

console.log(removeDuplicates([1,2,4,'H',65,1,2,4,'h'])) 