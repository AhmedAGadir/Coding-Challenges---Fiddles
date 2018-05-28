/* Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
Sample object:  */

var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };
// Sample Output: name,sclass,rollno

console.log(Object.keys(student));
console.log(Object.getOwnPropertyNames(student));
for (let property in student) console.log(property);

