// A Program to find all the 1st January's that are Sundays between 2014 and 2050

for ( let y = 2014; y <= 2050; y++ ) {
let date = new Date(y, 0, 1);
  
let dd = date.getDay() + 1;
let mm = date.getMonth() + 1;
let yyyy = date.getFullYear();

if (dd < 10) { dd = `0${dd}`}
if (mm < 10) { mm = `0${mm}`}  
  
if (date.getDay() === 0) {
  if (yyyy > 2018) {console.log(`${dd}/${mm}/${yyyy} will be a Sunday`)}
else {console.log(`${dd}/${mm}/${yyyy} was a Sunday`) } } 
}