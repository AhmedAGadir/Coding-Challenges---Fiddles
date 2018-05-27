// Write a JavaScript function to uncamelize a string. 

function unCamelize(str,fill) {
  if (fill === undefined) 
    fill = ' ';
  return str.replace(/([\w$])([A-Z])/,function(match,one,two){
    return one + fill + two.toLowerCase();
  })
}

console.log(unCamelize('helloWorld')); 
// "hello world" 
console.log(unCamelize('helloWorld','-')); 
// "hello-world" 
console.log(unCamelize('helloWorld','_'));
// "hello_world"
