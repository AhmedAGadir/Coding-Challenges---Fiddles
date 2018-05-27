/* For this exercise we want to implement a custom context menu for Tux, the penguin.	
This is the HTML for a menu which exists, but is currently hidden:
<div id="menu">
  <div id="option1">Photograph</div>
  <div id="option2">Rub belly</div>
  <div id="option3">Feed a fish</div>
</div>

Write some JavaScript code below that does as many of the following as you can:
Add a click event handler to the penguin (his id is "tux") that makes the menu visible (style.display = 'block').
Move the menu (e.g. style.left = '123px' and style.top = '123px') to the mouse's location. Use the event's pageX and pageY properties.
Instead of using click, use contextmenu to detect the right mouse button.
Supress the browser's own context menu.
Add a click handler to the whole page (document.body) that hides the menu (style.display = 'none').
Add event handlers to each option that does something.  */

let menu = document.getElementById('menu');
document.getElementById('tux').addEventListener('click',function(){
  menu.style.display='block';
  document.body.addEventListener('keypress', function(){menu.style.display = 'none';},false);
},false);
document.body.addEventListener('contextmenu', move, false);
function move(e) {
  menu.style.left = e.pageX + 'px';
  menu.style.top = e.pageY + 'px';
  e.preventDefault();
}
