function flatten(arr) {
  return arr.reduce((a, b) => {
    return [...a].concat((Array.isArray(b)) ? flatten(b) : b)
  }, [])
}

steamrollArray([1, [2], [3, [[4]]]]);

/*  

function flatten(arr) {
  return arr.reduce((a, b) => {
    return a.concat((Array.isArray(b)) ? flatten(b) : b)
  }, [])
}

*/