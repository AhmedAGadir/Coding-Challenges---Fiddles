let a = 5;
let b = 6;
let c = 7;

let a2 = a * a;
let b2 = b * b;
let c2 = c * c;

let angleC = Math.acos((b2 + c2 - a2)/(2*b*c))

areaOfTriangle = 0.5 * a * b * Math.sin(angleC);

console.log(areaOfTriangle);
