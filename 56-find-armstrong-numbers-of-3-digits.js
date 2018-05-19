/* Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor 
Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.  */

for (let numb = 100; numb < 1000; numb++){  

  let numbArray = numb.toString().split("").map(function(element){return parseInt(element);})
  let sumOfCubes = 0;
  numbArray.forEach(function(element){sumOfCubes += element**3})
  if (sumOfCubes === numb) {console.log(`${numb} is an Armstrong number`);}

}