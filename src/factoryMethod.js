class Mail {
    constructor(type) {
        if (type)
            this.type = type;
    }
    trackShipping() {
        const transport = this.factoryMethod(this.type);
        return `이 우편은 ${transport.deliver()}`;
    }
}
class GroundMail extends Mail {
    constructor() {
        super(...arguments);
        this.transportList = {
            truck: new Truck(),
            train: new Train(),
        };
    }
    factoryMethod(type) {
        return this.transportList[type];
    }
}
class AirMail extends Mail {
    factoryMethod(type) {
        return new Plane();
    }
}
class Plane {
    deliver() {
        return "비행기로 배송 중...";
    }
}
class Truck {
    deliver() {
        return "트럭으로 배송 중...";
    }
}
class Train {
    deliver() {
        return "기차로 배송 중...";
    }
}
function clientCode(mail) {
    console.log(mail.trackShipping());
}
console.log("앱: 지상우편 조회 중...");
clientCode(new GroundMail("train"));
clientCode(new GroundMail("truck"));
console.log("");
console.log("앱: 항공우편 조회 중...");
clientCode(new AirMail());
