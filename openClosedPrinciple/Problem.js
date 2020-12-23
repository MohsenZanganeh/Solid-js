class Report {
  constructor (type, data){
      this.type = type;
      this.data = data
  }
  export (){
      if (this.type == 'pdf') {
          //Do Something
      }
      else if (this.type == 'doc'){
          //Do Something
      }
      else if (this.type == 'xml'){
          //Do Something
      }
  }
}





//*****************************--other example--*****************************
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
  constructor(circles) {
    this.areas = [];

    circles.forEach((value) => {
      const circleArea = {
        name: value.name,
        area: value.radius * 2 * 3.14,
      };

      this.areas.push(circleArea);
    });
  }
}
const circle_1 = new circle("circle_1", 5);
const circle_2 = new circle("circle_2", 66);

const square_1 = new square("square_1", 50);
const square_2 = new square("square_2", 20);

// const areaCalculator1 = new AreaCalculator([
//     circle_1,
//     circle_2,
//   ]);
const areaCalculator2 = new AreaCalculator([
  circle_1,
  circle_2,
  square_1,
  square_2,
]);

// console.table(areaCalculator1.areas);
console.table(areaCalculator2.areas);

