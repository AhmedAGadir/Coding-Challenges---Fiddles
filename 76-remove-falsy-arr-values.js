/* Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. Go to the editor
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47] */

let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null], store = [];

//one way to do it
let fArr = arr.filter(function(element){return (element) })
console.log(fArr)

//another way to do it
arr.forEach(function(element){if (element) {store.push(element)}})
console.log(store)

