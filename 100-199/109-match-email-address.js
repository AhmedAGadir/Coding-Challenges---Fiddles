/* Write a pattern that matches e-mail addresses. Go to the editor
The personal information part contains the following ASCII characters.

Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.*/

let re = /^\w+([.!#$%&'*+-/=?^`{|}~]\w+)*@\w+\.\w{2,3}(\.\w{2,3})?$/

//  solution is: 
//  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//  but it doesnt really match their specification (which isnt that clear as well)

console.log(re.test('ahmed.gad-ir@gmail.com'));
console.log(re.test('bob_gang#ster@yahoo.fr'));
console.log(re.test('YaDunKno2k18@yahoo.co.uk'));
console.log(re.test('me-info@example.com'));