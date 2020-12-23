
class Report {
  constructor (data){
      this.data = data
  }

  export (){
    //Do Something With data for example
    this.data ={...this.data , FontColor:'Black'};

    // return this.#reportOfData();
  }

  // #reportOfData(){
  //   //Do Something
  //   return this.data;
  // }
}

class Pdf extends Report {
  constructor(){
    super();
    this.PDF = 'pdf' //for example new from Pdf module
  }
  Report(){
    this.data = {name:'mohsen',phon:'09901759179',type:PDF}
    //Do Something
    return this.export()
  }
  
}
class Doc extends Report {
  constructor(){
    super();
    this.DOC = 'Doc' //for example new from Doc module
  }    
  Report(){
    this.data = {name:'mohsen',phon:'09901759179',type:DOC}
    return this.export()
  }
}
class Xml extends Report {
  constructor(){
    super();
    this.XML = 'pdf' //for example new from Xml module
  }    
  Report(){
    this.data = {name:'mohsen',phon:'09901759179',type:XML}
    return this.export()
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
        const squareArea = {
          name: value.name,
          area: (value.length * value.length) ,
        };
        this.areas.push(squareArea);
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
