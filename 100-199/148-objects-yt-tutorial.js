// Factory Pattern

function addCard(name, type, rank) {
 
  let holder = [];
  // could have done: let holder = new Object(); but its just unneccessarily verbose
  
  holder.name = name;
  holder.type = type;
  holder.rank = rank;
  holder.summary = function() {console.log(this.name + '\n' + this.type + '\n' + this.rank)} 
  return holder;
}

let darkMagician = addCard('Dark Magician','Dark','Level 7');
let blueEyesWhiteDragon = addCard('Blue Eyes White Dragon','Light','Level 8');

darkMagician.summary();
blueEyesWhiteDragon.summary();

// Constructor Pattern

function addCard2(name, type, rank) {
  this.name = name;
  this.type = type;
  this.rank = rank;
  this.summary = function() {console.log(this.name + '\n' + this.type + '\n' + this.rank)}
};

let kuribo = new addCard2('Kuribo','Dark','Level 1');
let redEyesBlackDragon = new addCard2('Red Eyes Black Dragon','Fire','Level 7');

kuribo.summary();
redEyesBlackDragon.summary();

// Prototype Pattern 

function addCard3() {

}

addCard3.prototype.name = 'default name';
addCard3.prototype.type = 'default type';
addCard3.prototype.rank = 'default rank';
addCard3.prototype.summary = function() {console.log(this.name + ', ' + this.type + ', ' + this.rank)}
addCard3.prototype.foo = 'default foo'

let littleWingGuard = new addCard3();
littleWingGuard.name = 'little Wing-Guard'; 
littleWingGuard.type = 'Wind';
littleWingGuard.rank = 'level 4';

littleWingGuard.summary(); 
// the summary method didnt need to be added to little Wing-Guard because it can be found on its prototype chain. this makes instances more lightweight.
console.log(littleWingGuard.foo)
// again, if a property is not defined on the instance, the default will be used (because they are prototyped linked)

console.log('name' in littleWingGuard);
console.log('foo' in littleWingGuard);    
// the 'in' operator checks the object in question as well as its prototype chain for a property/method.

console.log(littleWingGuard.hasOwnProperty('name'));
console.log(littleWingGuard.hasOwnProperty('foo'));
console.log(littleWingGuard.hasOwnProperty('summary'));
// the .hasOwnProperty method checks only the object in question.

// Dynamic Prototype Pattern

function addCard4(name, type, rank) {
  this.name = name;
  this.type = type;
  this.rank = rank;
  
  if (typeof this.summary == 'undefined')
    addCard4.prototype.summary = function() {console.log(this.name + ', ' + this.type + ', ' + this.rank)}
// when the function addCard4 is called for the first time - typeof this.summary is undefined, so the summary method is added onto the addCard4.prototype object. after that point, whenever the constructor is called again, it wont keep reassigning the same function to addCard4.prototype.summary because typeof this.summary != undefined (its now = 'function'). this improves speed and is useful if you know you'll be creating a lot of instances out of the constructor.
}

let swordsmanOfLandstar = new addCard4('Swordsman Of Landstar', 'Earth', 'Level 3');

swordsmanOfLandstar.summary();
console.log('name' in swordsmanOfLandstar);
console.log(swordsmanOfLandstar.hasOwnProperty('summary'));

