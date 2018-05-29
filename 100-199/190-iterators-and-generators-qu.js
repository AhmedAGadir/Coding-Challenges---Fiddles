//http://www.zsoltnagy.eu/es6-iterators-and-generators-6-exercises-and-solutions/

// Exercise 3. Make the following object iterable:

let todoList = {
    todoItems: [],
    addItem( description ) {
        this.todoItems.push( { description, done: false } );
        return this;
    },
    crossOutItem( index ) {
        if ( index < this.todoItems.length ) {
            this.todoItems[index].done = true;
        }
        return this;
    }
};

todoList.addItem( 'task 1' ).addItem( 'task 2' ).crossOutItem( 0 );

function *iterableTodoList() {
	for (let item of todoList.todoItems)
  	yield item;
}

for ( let item of iterableTodoList() ) {  
    console.log( item );
}

/* they wrote for ( let item of iterableTodoList) - ((they missed out the brackets after iterableTodoList))the reason that this is wrong is because generators have to be called first before they can even start running.
e.g. you have to write something like 
  it = myGen();
  it.next() // now it starts  */

/* solution - really clever 

let todoListGenerator = function *() {
    yield* todoList.todoItems;
}
*/