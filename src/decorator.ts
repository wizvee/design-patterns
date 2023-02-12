class Notifier {
  public send(message: string): void {
    console.log(`Email 알림: ${message}`);
  }
}

class BaseDecorator implements Notifier {
  protected wrappee: Notifier;

  constructor(notifier: Notifier) {
    this.wrappee = notifier;
  }

  public send(message: string): void {
    this.wrappee.send(message);
  }
}

class SMSDecorator extends BaseDecorator {
  public send(message: string): void {
    super.send(message);
    console.log(`SMS 알림: ${message}`);
  }
}

class FacebookDecorator extends BaseDecorator {
  public send(message: string): void {
    super.send(message);
    console.log(`Facebook 알림: ${message}`);
  }
}

class SlackDecorator extends BaseDecorator {
  public send(message: string): void {
    super.send(message);
    console.log(`Slack 알림: ${message}`);
  }
}

class Application {
  notifier: Notifier;

  constructor() {
    this.setNotifier();
  }

  setNotifier() {
    let stack = new Notifier();
    stack = new FacebookDecorator(stack);
    stack = new SlackDecorator(stack);
    this.notifier = stack;
  }

  public send(message: string) {
    this.notifier.send(message);
  }
}

const app = new Application();
app.send("긴급한 알림 메시지를 전송합니다.");
