/// the kind of solution i was going for

function capitalAll(str){
var arr = str.split(' ');
var store = [];

arr.forEach(function(eachWord){
store.push(eachWord.slice(0,1).toUpperCase() + eachWord.slice(1))
})

return store.join(' ') 
}

console.log(capitalAll('Allah is the greatest'));

// the given solution
function capitalizeFirstLetter(str) {

let words = str.split(" ");

for (let i = 0; i < words.length; i++) {
words[i] = words[i][0].toUpperCase() + words[i].substr(1)
}

return words.join(" ")
}

console.log(capitalizeFirstLetter('capitalize the first letter of each word of a given string')); 

