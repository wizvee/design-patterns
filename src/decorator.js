class Notifier {
    send(message) {
        console.log(`Email 알림: ${message}`);
    }
}
class BaseDecorator {
    constructor(notifier) {
        this.wrappee = notifier;
    }
    send(message) {
        this.wrappee.send(message);
    }
}
class SMSDecorator extends BaseDecorator {
    send(message) {
        super.send(message);
        console.log(`SMS 알림: ${message}`);
    }
}
class FacebookDecorator extends BaseDecorator {
    send(message) {
        super.send(message);
        console.log(`Facebook 알림: ${message}`);
    }
}
class SlackDecorator extends BaseDecorator {
    send(message) {
        super.send(message);
        console.log(`Slack 알림: ${message}`);
    }
}
class Application {
    constructor() {
        this.setNotifier();
    }
    setNotifier() {
        let stack = new Notifier();
        stack = new FacebookDecorator(stack);
        stack = new SlackDecorator(stack);
        this.notifier = stack;
    }
    send(message) {
        this.notifier.send(message);
    }
}
const app = new Application();
app.send("긴급한 알림 메시지를 전송합니다.");
