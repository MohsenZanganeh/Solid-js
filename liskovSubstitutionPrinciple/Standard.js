class Bird {
  constructor(name) {
    this.name = name;
  }
}
class UnFlightFulBird extends Bird {
  constructor(name) {
    super(name);
  }
  walk() {}
}
class FlightfulBird extends Bird {
  constructor(name) {
    super(name);
  }
  fly() {}
}
class Rooster extends UnFlightFulBird {}

//*****************************--other example--*****************************
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(width) {
    super();
    this.width = width;
    this.height = width;
  }
}

const shape = new Rectangle(4, 5);
console.log("area of Rectangle:", shape.area());

const shape_2 = new Square(5);
console.log("area of Square:", shape_2.area());
