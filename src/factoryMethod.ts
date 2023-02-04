abstract class Mail {
  type: string;

  constructor(type?: string) {
    if (type) this.type = type;
  }

  public abstract factoryMethod(type: string): Transport;

  public trackShipping(): string {
    const transport = this.factoryMethod(this.type);
    return `이 우편은 ${transport.deliver()}`;
  }
}

class GroundMail extends Mail {
  transportList = {
    truck: new Truck(),
    train: new Train(),
  };

  public factoryMethod(type: string): Transport {
    return this.transportList[type];
  }
}

class AirMail extends Mail {
  public factoryMethod(type: string): Transport {
    return new Plane();
  }
}

interface Transport {
  deliver(): string;
}

class Plane implements Transport {
  public deliver(): string {
    return "비행기로 배송 중...";
  }
}

class Truck implements Transport {
  public deliver(): string {
    return "트럭으로 배송 중...";
  }
}

class Train implements Transport {
  public deliver(): string {
    return "기차로 배송 중...";
  }
}

function clientCode(mail: Mail) {
  console.log(mail.trackShipping());
}

console.log("앱: 지상우편 조회 중...");
clientCode(new GroundMail("train"));
clientCode(new GroundMail("truck"));
console.log("");

console.log("앱: 항공우편 조회 중...");
clientCode(new AirMail());
