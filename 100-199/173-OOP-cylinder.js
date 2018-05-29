/* Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Go to the editor
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder. */

class Cylinder {
  constructor(radius = 3, height = 10){
    this.radius = radius;
    this.height = height
  }
  get volume() {
    return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
  }
}

let pringles = new Cylinder(4, 20)
console.log(pringles.volume)

let randomCylinder = new Cylinder();
console.log(randomCylinder.volume)