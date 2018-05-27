//  ========================= REGEXP GOLF =======================

// car and cat

// pop and prop

// ferret, ferry, and ferrari

// Any word ending in ious

// A whitespace character followed by a dot, comma, colon, or semicolon

// A word longer than six letters

// A word without the letter e

verify(/\bca[rt]s?\b/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/\bpr?ops?\b/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/\bferr(et|y|ari)\b/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/\b\w+ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s(\.|,|:|;)/,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/\b\w{7,}\b/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/\b[a-df-z]+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}


// ============================= QUOTING STYLE ================


/*  replace all the dialogue quotes with double quotes, while 
  keeping the single quotes used in contractions like aren’t. */

var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/A/g, "B"));
// → "I'm the cook," he said, "it's my job."


 // solution
  console.log(text.replace(/(^)'|(\W)'|'(\W)/g, "$1$2\"$3"));



  // ========================== NUMBERS AGAIN ==================


  // Fill in this regular expression.
var number = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
 "1e+12"].forEach(function(s) {
  if (!number.test(s))
    console.log("Failed to match '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
 "."].forEach(function(s) {
  if (number.test(s))
    console.log("Incorrectly accepted '" + s + "'");
});


 //// See regexone.com and bookmarks for more useful regex stuff