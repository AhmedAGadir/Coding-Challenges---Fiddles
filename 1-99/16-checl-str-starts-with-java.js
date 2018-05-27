// Write a JavaScript program to check if a string starts with 'Java' and false otherwise.

function startsWithJava(){
if(arguments[0].substr(0,4).toLowerCase() === 'java'){return true}
else {return false}
}

console.log(startsWithJava('python'));
console.log(startsWithJava('javascript'));
console.log(startsWithJava('JavaScript'));