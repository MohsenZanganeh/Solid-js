class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area(){
      return this.width * this.height;
  }
}

class Square extends Rectangle{
    constructor(width){
        super();
        this.width = width;
        this.height = width;
    }
}

const shape = new Rectangle(4,5);
console.log('area of Rectangle:',shape.area())

const shape_2 = new Square(5);
console.log('area of Square:',shape_2.area())
