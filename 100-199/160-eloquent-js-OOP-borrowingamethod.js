// 2 ways to do it

let map = {one: true, two: true, hasOwnProperty: true};


// #1 using .bind 
Object.defineProperty(map, 'hasOwnProperty', {
  get: function() { return Object.prototype.hasOwnProperty.bind(this) }
});

// #2 using .call
Object.defineProperty(map, 'hasOwnProperty', {
  get: function() { return x => Object.prototype.hasOwnProperty.call(this, x) }
});


console.log(map.hasOwnProperty("one"));
// → true

