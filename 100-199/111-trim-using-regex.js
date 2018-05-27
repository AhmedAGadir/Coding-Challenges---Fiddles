// Write a JavaScript program that work as a trim function (string) using regular expression. Go to the editor

/* ========== NOT A GOOD SOLUTION - DOESNT ACTUALLY WORK (NEEDS REDOING) */
let x = '        hi      '.replace(/^\s*(.+)\s*$/, "$1");
console.log(x);