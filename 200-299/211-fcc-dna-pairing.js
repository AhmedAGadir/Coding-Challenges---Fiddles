function pairElement(str) {
  let arr = [];
  str.split('').forEach(letter => arr.push(getPair(letter)));

  function getPair(letter) {
    switch(letter) {
      case 'A':
        return ['A','T'];
        break;
      case 'T':
        return ['T', 'A']
        break;
      case 'C':
        return ['C', 'G']
        break;
      case 'G':
        return ['G', 'C']
        break;
    }
  }
  
  return arr;
}

pairElement("GCG");