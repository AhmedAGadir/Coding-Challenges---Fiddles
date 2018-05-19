//Write a JavaScript program which prints the elements of the following array.

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (i = 0; i < a.length; i++){
  console.log(`row ${i}`);
  a[i].forEach(function(element){console.log(`${element}`)});
  console.log(`------`);
}

