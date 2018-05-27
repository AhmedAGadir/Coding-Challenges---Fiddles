// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

function dashesBetweenEvenNumbers(str) {

    for (let i = 1; i < str.length; i++){
  
      if (parseInt(str[i]) % 2 === 0 && parseInt(str[i-1]) % 2 === 0) {
        str = str.substring(0,i) + '-' + str.substring(i);
      }
  
    }

  return str
}

console.log(dashesBetweenEvenNumbers('025468'))
