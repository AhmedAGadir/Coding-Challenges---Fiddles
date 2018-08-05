function myReplace(str, before, after) {
  let regex = new RegExp(before)
  if (/^[A-Z]/.test(before)) {
    after = after.replace(/^./, x => x.toUpperCase()) 
  }
  return str.replace(regex, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");