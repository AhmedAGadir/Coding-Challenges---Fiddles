// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

let year = window.prompt("Enter a year and see if it's a leap year:")

let notLeap = true;

if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
  notLeap = false; }

if (year % 4 === 0 && year % 100 !== 0) {
  notLeap = false; }

if (notLeap) {console.log(`${year} is not a leap year`)
} else {console.log(`${year} is a leap year`)}
