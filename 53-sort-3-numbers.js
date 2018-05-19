//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
//Sample numbers : 0, -1, 4 
//Output : 4, 0, -1 

let inputs = window.prompt('enter 3 numbers seperated by commas (nospaces): ');
console.log(inputs);
alert(inputs.split(",").sort(function(a,b){return b-a}).join(", "));