// radius and circumference of a circle


// OLOO method

let Circle = {

  radius: 1, //default value
  
  get perimeter() {
    return (this.radius * 2 * Math.PI).toFixed(2); 
  },
  
  get area() {
    return (this.radius**2 * Math.PI).toFixed(2);
  }
  
}

let r5 = Object.create(Circle) 
r5.radius = 5;

console.log(r5.perimeter, r5.area)