class Car {
  private parts: string[] = [];

  public setPart(parts: string) {
    this.parts.push(parts);
  }

  public listParts(): void {
    console.log(`이 자동차의 옵션: ${this.parts.join(", ")}\n`);
  }
}

class Mannual {
  public scripts: string[] = [];

  public writeScript(script: string) {
    this.scripts.push(script);
  }

  public listScripts(): void {
    console.log(`이 메뉴얼에 포함된 설명: ${this.scripts.join(", ")}\n`);
  }
}

interface Builder {
  reset(): void;
  setSeats(number: number): void;
  setEngine(engine: Engine): void;
  setTripComputer(flag: boolean): void;
  setGPS(flag: boolean): void;
}

class CarBuilder implements Builder {
  private car: Car;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.car = new Car();
  }

  public setSeats(number: number): void {
    this.car.setPart(`시트 ${number}개`);
  }

  public setEngine(engine: Engine): void {
    this.car.setPart(engine.getType());
  }

  public setTripComputer(flag: boolean): void {
    if (flag) this.car.setPart(`트립 컴퓨터`);
  }

  public setGPS(flag: boolean): void {
    if (flag) this.car.setPart(`GPS`);
  }

  public getProduct(): Car {
    const result = this.car;
    this.reset();
    return result;
  }
}

class CarMannualBuilder implements Builder {
  private mannual: Mannual;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.mannual = new Mannual();
  }

  public setSeats(number: number): void {
    this.mannual.writeScript(`시트 ${number}개 설명`);
  }

  public setEngine(engine: Engine): void {
    this.mannual.writeScript(`${engine.getType()} 설명`);
  }

  public setTripComputer(flag: boolean): void {
    if (flag) this.mannual.writeScript(`트립 컴퓨터 설명`);
  }

  public setGPS(flag: boolean): void {
    if (flag) this.mannual.writeScript(`GPS에 대한 설명`);
  }

  public getProduct(): Mannual {
    const result = this.mannual;
    this.reset();
    return result;
  }
}

interface Engine {
  getType(): string;
}

class SportEngine implements Engine {
  public getType(): string {
    return "스포츠 엔진";
  }
}

class BasicEngine implements Engine {
  public getType(): string {
    return "보통 엔진";
  }
}

class Director {
  public constructSportsCar(builder: Builder) {
    builder.setSeats(2);
    builder.setEngine(new SportEngine());
    builder.setTripComputer(true);
    builder.setGPS(true);
  }

  public constructSUV(builder: Builder) {
    builder.setSeats(6);
    builder.setEngine(new BasicEngine());
    builder.setTripComputer(false);
    builder.setGPS(true);
  }
}

function makeCar(type: string) {
  const director = new Director();

  const catalog = {
    sports: makeSportsCar,
    SUV: makeSUV,
  };

  function makeSportsCar() {
    const carBuilder = new CarBuilder();
    console.log("스포츠카 생성 중...");
    director.constructSportsCar(carBuilder);
    carBuilder.getProduct().listParts();

    const carMannualBuilder = new CarMannualBuilder();
    console.log("스포츠카 매뉴얼 생성 중...");
    director.constructSportsCar(carMannualBuilder);
    carMannualBuilder.getProduct().listScripts();
  }

  function makeSUV() {
    const carBuilder = new CarBuilder();
    console.log("SUV 생성 중...");
    director.constructSUV(carBuilder);
    carBuilder.getProduct().listParts();

    const carMannualBuilder = new CarMannualBuilder();
    console.log("SUV 매뉴얼 생성 중...");
    director.constructSUV(carMannualBuilder);
    carMannualBuilder.getProduct().listScripts();
  }

  catalog[type]();
}

makeCar("sports");
makeCar("SUV");
