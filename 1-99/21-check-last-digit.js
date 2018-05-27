// Write a JavaScript program to check if the last digit of the three given positive integers is same. 

//my code works for more than 3 numbers

function checkLastDigit() { 

for (let j = 0; j < arguments.length; j++) {

  let number1 = arguments[j]
  let numberArray1 = number1.toString().split("");
  let lastDigit1 = numberArray1[numberArray1.length-1];

    for (let z = j + 1; z < arguments.length; z++) {

    let number2 = arguments[z]
    let numberArray2 = number2.toString().split("");
    let lastDigit2 = numberArray2[numberArray2.length-1];


    if (lastDigit1 === lastDigit2) {console.log(`the last digit of the number at the position ${j+1} is the same as the last digit of the number at the position ${z+1}`)}
    }
  }
}


console.log(checkLastDigit(344, 764, 895, 567, 995))