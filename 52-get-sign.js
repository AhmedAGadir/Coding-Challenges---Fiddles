function getSign() {
  let isPositive = true;
  for (let i = 0; i < arguments.length; i++){ 
    if (arguments[i] < 0) { isPositive = !isPositive;}
  }
  if (isPositive) {alert('positive');} else {alert('negative')}
}

getSign(5,4,-2,5,-3,-3,4,5,-5,4,-5,-5);
getSign(5,4,-2);
getSign(-5,-4,2);
getSign(-5,4,-2);
getSign(-5,-4,-2);