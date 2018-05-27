// Write a JavaScript program to search a date within a string.

let re = /\b(0?[1-9])|([12][0-9]|3[01])[\s-._/]?(0?[1-9])|(1[0-2])[\s-._/]?\d{2,4}\b/

// their solution
// let  re =  = /(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}/;
// (?:x - Matches x but does not remember the match. - MDN 


let test = re.test('12-02-2020');
console.log(test);
test = re.test('01/22/2015');
console.log(test);
test = re.test('32.01.2015');
console.log(test);