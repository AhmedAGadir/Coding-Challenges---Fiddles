/* 

Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

*/


function Person(firstAndLast) {
  // Complete the method below and implement the others similarly

  this.getFirstName = function() {
    return firstAndLast.match(/^(\w+)/)[0];
  }

  this.getLastName = function() {
    return firstAndLast.match(/(\w+)$/)[0];
  }

  this.getFullName = function() {
    return firstAndLast;
  }

  this.setFirstName = function(first) {
    firstAndLast = firstAndLast.replace(/^(\w+)/, first);
  }

  this.setLastName = function(last) {
    firstAndLast = firstAndLast.replace(/(\w+)$/, last)
  }

  this.setFullName = function(newFirstAndLast) {
    firstAndLast = newFirstAndLast;
  }
};

var bob = new Person('Bob Ross');
bob.getFirstName();
