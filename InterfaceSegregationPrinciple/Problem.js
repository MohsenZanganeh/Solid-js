class User {
   constructor(username, password) {
     this.username = username;
     this.password = password;
     this.initiateUser();
   }
   initiateUser() {
     this.username = this.username;
     this.validateUser()
   }
 
   validateUser = (user, pass) => {
     console.log("validating...");
   }
 }
 const user1 = new User("USER_111111", "1111111");
 console.log(user1);

 const user2 = new User("USER_22222", "2222222");
 console.log(user2);




