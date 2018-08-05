// parameters are placed from the outside in

function test(a) {
  return function(b) {
    return a - b;
  }
}

test(2)(10)
//-8

let one = test(2);
one(10)
//-8