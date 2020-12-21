class Mailer {
  send(message) {
    message = message + ' ,we Send Message to You with mailer'
    console.log(message);
  }
}


// class Sms {
//   send(message) {
//     message = message + ' ,we Send Message to You with SMS'
//     console.log(message);
//   }
// }


class SendWelcomeMessage {
  constructor() {
    this.mailer = new Mailer();
  }
  sendMessage(name) {
    const message = `welcome ${name}`;

    this.mailer.send(message);
  }
}

const sendWelcomeMessage = new SendWelcomeMessage();

sendWelcomeMessage.sendMessage("Mohsen");


