function capitalize(str) {

let arr = str.split(" ");
let store = [];

arr.forEach(function(element){store.push(element[0].toUpperCase() + element.substr(1))})

return store.join(" ")
}

console.log(capitalize('samurai jack samurai jack dahdahdah jack, wAJAH!'))