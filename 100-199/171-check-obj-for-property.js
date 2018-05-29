//Write a JavaScript function to check if an object contains given property.

function check(obj, prop) {
return Object.prototype.hasOwnProperty.call(obj, prop)
}

console.log(check({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}, "green"))