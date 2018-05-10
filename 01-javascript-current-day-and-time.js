// Write your code 
var date = new Date();
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

console.log(`Today is: ${days[date.getDay()-1]}`);

let hour = date.getHours();
let isAM = true;

if (hour > 12) {
  hour -= 12;
  isAM = false
} else if (hour === 12) {
  isAM = false;
}

let prepand;
if (isAM) {
  prepand = 'AM'
} else {
  prepand = 'PM'
};

let minutes = date.getMinutes();
let seconds = date.getSeconds();

console.log(`Curent time is: ${hour} ${prepand}: ${minutes}: ${seconds}`);
