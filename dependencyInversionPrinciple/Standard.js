class Mailer {
  send(message) {
    message = message + ' ,we Send Message to You with mailer'
    console.log(message);
  }
}


class Sms {
  send(message) {
    message = message + ' ,we Send Message to You with SMS'
    console.log(message);
  }
}
class SendWelcomeMessage {
  constructor(mailer) {
    this.mailer =new mailer;
  }
  sendMessage(name) {
    const message = `welcome ${name}`;

    this.mailer.send(message);
  }
}

const sendWelcomeMessage = new SendWelcomeMessage(Mailer);

sendWelcomeMessage.sendMessage("Mohsen");

const sendWelcomeMessage2 = new SendWelcomeMessage(Sms);

sendWelcomeMessage2.sendMessage("Ali");