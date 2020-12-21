
//ISP: Validate only if it is necessary
class UserISP {
  constructor(username, password, validate) {
    this.username = username;
    this.password = password;
    this.validate = validate;

    if (validate) {
      this.initiateUser(username, password);
    } else {
      console.log("no validation required");
    }
  }

  initiateUser() {
    this.validateUser(this.username, this.password);
  }

  validateUser = (username, password) => {
    console.log("validating...");
  }
}

//User with validation required
console.log(new UserISP("Francesco", "123456", true));
// validating...
// UserISP {
//   validateUser: [Function: validateUser],
//   username: 'Francesco',
//   password: '123456',
//   validate: true
// }


//User with no validation required
console.log(new UserISP("guest", "guest", false));
// no validation required
// UserISP {
//   validateUser: [Function: validateUser],
//   username: 'guest',
//   password: 'guest',
//   validate: false
// }


//***********************************************------another example------***********************************************


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
