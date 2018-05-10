// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

let input = window.prompt('Enter a number between 1 - 10:');

let randomNumber = Math.floor(Math.random()*10) + 1; 

// had a problem here because whatever is entered into the window.prompt is actually a string. figure out how to get around this

//if (isNaN(input) === false) { alert('Please put in a valid input')}

if (input === randomNumber.toString()) {
alert('Good Work')
} else { 
alert(`Not Matched. The number was ${randomNumber}`)
} 
