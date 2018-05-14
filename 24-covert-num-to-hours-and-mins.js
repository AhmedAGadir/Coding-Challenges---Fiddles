//Convert a given number to hours and minutes

function convertToHoursAndMinutes(numb) {

let hours = Math.floor(numb / 60);
let minutes = numb % 60;

return hours + ': ' + minutes;
}

console.log(convertToHoursAndMinutes(71));
console.log(convertToHoursAndMinutes(120));
console.log(convertToHoursAndMinutes(153));
console.log(convertToHoursAndMinutes(55));
