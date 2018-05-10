/* calculate the days until ramadan starts (15th may 2018) or any other day
note - the month is zero indexed*/

let ramadan = new Date(2018, 4, 15);
let ramadansDate = ramadan.getDate();
let ramadansMonth = ramadan.getMonth();
let ramadansYear = ramadan.getFullYear();

let today = new Date();
let todaysDate = today.getDate();
let todaysMonth = today.getMonth();
let todaysYear = today.getFullYear();

let currentMonth = new Date(todaysYear, todaysMonth, 0)
let numberOfDaysInCurrentMonth = currentMonth.getDate();

let numberOfDaysRemainingThisMonth = numberOfDaysInCurrentMonth - todaysDate;

let n = 0;

for (let i = 1 + todaysMonth; i < ramadansMonth ; i++) {
  let x = new Date(ramadansYear, i, 0);
  n += x.getDate();
  console.log(x.getDate())
}

numberOfDaysUntilramadan = numberOfDaysRemainingThisMonth + n + ramadansDate - 1; 

  console.log(`${numberOfDaysUntilramadan} days until ramadan 2018`)