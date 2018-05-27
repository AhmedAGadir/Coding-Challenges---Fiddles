/* Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
Expected Output : 
60°C is 140 °F
45°F is 7.222222222222222°C   */

let tempInput = Number(window.prompt('Enter the temperature in Celsius: '));

let tempFahrenheit = tempInput * 9 / 5 + 32;

console.log(`${tempInput} degrees celsius is ${tempFahrenheit} degrees fahrenheit`)



