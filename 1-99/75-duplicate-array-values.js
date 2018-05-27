//Write a JavaScript program to find duplicate values in a JavaScript array.

// not very good 

function findDuplicates(arr) {
  bigStore = [];
  for (let i = 0; i < arr.length; i++) {
    let store = [];
    for (let j = i+1; j < arr.length; j++){
        if (arr[i] === arr[j] && store.length === 0) {store.push(i+1); store.push(j+1);}
        else if (arr[i] === arr[j]) {store.push(j+1);}
      }
    if (store.length > 0 && bigStore.includes(arr[i]) === false) {console.log(`there are ${store.length} duplicates of the number ${arr[i]} at positions ${store.toString()}`)}
    bigStore.push(arr[i])
  }   
}
   


findDuplicates([1,2,3,4,5,6,7,6,5,4,3,3,2,2,2,1])