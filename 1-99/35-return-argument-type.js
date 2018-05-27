// Write a JavaScript function which accepts an argument and returns the type.

// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('w3resource'));
console.log(detect_data_type(false)); 


// the below answer is from the comments on the w3schools challenge where this is found - function section, question #9
// You try: return typeof [] ; //object. You can used contructor method or instanceof always the return correct datatype.





// the below exerts are from https://www.webbjocke.com/javascript-check-data-types/ 


//                                                  (1) STRINGS 
// A string is always a string so this one is easy. Except if called with new (new String) typeof will instead return "object". So to also include those strings instanceof can be used.
// Returns true if a value is a string
function isString (value) {
return typeof value === 'string' || value instanceof String;
};


//                                                  (2) NUMBER 
// From typeof more things than just an ordinary number will return "number" like NaN and Infinity. To know if a value really is a number the function isFinite is also required.
// mynote* 
// (mynote) instanceof doesnt work here for some reason
function isNumber (value) {
return typeof value === 'number' && isFinite(value);
};

//                                                 (3) ARRAYS 
// In javascript arrays are not true arrays like in java and in other languages. They're actually objects so typeof will return "object" for them. To know if something's really an array its constructor can be compared to Array.

// Returns if a value is an array
function isArray (value) {
return value && typeof value === 'object' && value.constructor === Array;
};

// ES5 actually has a method for this (ie9+)
Array.isArray(value);
value instanceof Array // would also return true 

//                                                (4) FUNCTIONS

//Functions are functions so here just typeof is enough.

// Returns if a value is a function
function isFunction (value) {
return typeof value === 'function';
};

function(){} instanceof Function // would also return true 

//                                                (5) NULL AND UNDEFINED
//Most times you don't need to check explicitly for null and undefined since they're both falsy values. However to do it below functions does the trick.

// Returns if a value is null
function isNull (value) {
return value === null;
};

// Returns if a value is undefined
function isUndefined (value) {
return typeof value === 'undefined';
};

//                                               (6) BOOLEANS
//For booleans typeof is enough since it returns "boolean" for both true and false. instanceof doesnt work here.

// Returns if a value is a boolean
function isBoolean (value) {
return typeof value === 'boolean';
};

//                                               (7) REGEXP'S
//RegExp's are objects so the only thing needed to check is if the constructor is RegExp.

// Returns if a value is a regexp
function isRegExp (value) {
return value && typeof value === 'object' && value.constructor === RegExp;
};

//                                               (8) ERROR
//Errors in javascript are the same as "exceptions" in many other programming languages. They come in a couple different forms like for instance Error, TypeError and RangeError. An instanceof statement is enough for them all, but just to be extra sure we also check for the "message" property that errors have.

// Returns if value is an error object
function isError (value) {
return value instanceof Error && typeof value.message !== 'undefined';
};

//                                               (9) DATE
//Date isn't really a data type in javascript. But to know if something's a Date object it can be tested with instanceof against Date.

// Returns if value is a date object
function isDate (value) {
return value instanceof Date;
};

//                                               (10) SYMBOL
//In ES6 the new datatype Symbol was added. Nicely enough typeof returns "symbol" for it so no more logic is required.

// Returns if a Symbol
function isSymbol (value) {
return typeof value === 'symbol';
};

//That was all types for now. If you think something is wrong or missing and should be added, just leave a comment below! Some more in depth reading about javascripts data types and structures can be found at developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures.
