function translatePigLatin(str) {
  if (/^[aeiou]/.test(str)) return str + 'way';
  //console.log(123)
  console.log(str, str.replace(/([^aeiou]+)(.*)/, "$2$1ay"))
  return str.replace(/([^aeiou]+)(.*)/, "$2$1ay");
}

translatePigLatin("consonant");