// Write a JavaScript function to remove HTML/XML tags from string. Go to the editor

function stripHtmlTags(str){

  return str.replace(/<[^]*?>/g,'')
   
 /*  their solution is good too has useful info:
  if ((str===null) || (str===''))    
       return false;
  else 
   str = str.toString();  
  return str.replace(/<[^>]*>/g, ''); */ 

}

console.log(stripHtmlTags('<p><strong><em>PHP Exercises</em></strong></p>'));
"PHP Exercises"