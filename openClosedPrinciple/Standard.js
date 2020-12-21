class circle {
  constructor(name, radius) {
    this.radius = radius;
    this.name = name;
  }
}
class square {
  constructor(name, length) {
    this.length = length;
    this.name = name;
  }
}
class AreaCalculator {
  constructor(shapes) {
    this.areas = [];

    shapes.forEach((value) => {
      if (value instanceof circle) {
          
        const circleArea = {
          name: value.name,
          area: value.radius * 2 * 3.14,
        };
        this.areas.push(circleArea);
      }

      if (value instanceof square) {
        const circleArea = {
          name: value.name,
          area: (value.length * value.length) ,
        };
        this.areas.push(circleArea);
      }
      

    });
  }
}

const circle_1 = new circle("circle_1", 5);
const circle_2 = new circle("circle_2", 66);

const square_1 = new square("square_1", 2);
const square_2 = new square("square_2", 20);

const areaCalculator2 = new AreaCalculator([
  circle_1,
  circle_2,
  square_1,
  square_2,
]);

console.table(areaCalculator2.areas);
