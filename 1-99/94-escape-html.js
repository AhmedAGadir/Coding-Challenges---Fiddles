// Write a JavaScript function to escape a HTML string. 

function escapeHTML (str) {
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  return str
}
console.log(escapeHTML('<a href="javascript-string-exercise-17.php" target="_blank">'));

// "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"

// *solution*

function escape_HTML(html_str) {
    'use strict';

    return html_str.replace(/[&<>"]/g, function (tag) {
		var chars_to_replace = {
            '&': '&',
            '<': '<',
            '>': '>',
            '"': '"'
        };

		return chars_to_replace[tag] || tag;
	});
}

