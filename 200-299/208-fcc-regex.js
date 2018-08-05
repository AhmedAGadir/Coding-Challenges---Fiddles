function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str.replace(/(\w)([A-Z])/g, "$1 $2").replace(/[\W_]+/g,'-').toLowerCase();
}

spinalCase('This Is Spinal Tap');