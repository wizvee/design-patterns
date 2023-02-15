class Car {
    constructor() {
        this.parts = [];
    }
    setPart(parts) {
        this.parts.push(parts);
    }
    listParts() {
        console.log(`이 자동차의 옵션: ${this.parts.join(", ")}\n`);
    }
}
class Mannual {
    constructor() {
        this.scripts = [];
    }
    writeScript(script) {
        this.scripts.push(script);
    }
    listScripts() {
        console.log(`이 메뉴얼에 포함된 설명: ${this.scripts.join(", ")}\n`);
    }
}
class CarBuilder {
    constructor() {
        this.reset();
    }
    reset() {
        this.car = new Car();
    }
    setSeats(number) {
        this.car.setPart(`시트 ${number}개`);
    }
    setEngine(engine) {
        this.car.setPart(engine.getType());
    }
    setTripComputer(flag) {
        if (flag)
            this.car.setPart(`트립 컴퓨터`);
    }
    setGPS(flag) {
        if (flag)
            this.car.setPart(`GPS`);
    }
    getProduct() {
        const result = this.car;
        this.reset();
        return result;
    }
}
class CarMannualBuilder {
    constructor() {
        this.reset();
    }
    reset() {
        this.mannual = new Mannual();
    }
    setSeats(number) {
        this.mannual.writeScript(`시트 ${number}개 설명`);
    }
    setEngine(engine) {
        this.mannual.writeScript(`${engine.getType()} 설명`);
    }
    setTripComputer(flag) {
        if (flag)
            this.mannual.writeScript(`트립 컴퓨터 설명`);
    }
    setGPS(flag) {
        if (flag)
            this.mannual.writeScript(`GPS에 대한 설명`);
    }
    getProduct() {
        const result = this.mannual;
        this.reset();
        return result;
    }
}
class SportEngine {
    getType() {
        return "스포츠 엔진";
    }
}
class BasicEngine {
    getType() {
        return "보통 엔진";
    }
}
class Director {
    constructSportsCar(builder) {
        builder.setSeats(2);
        builder.setEngine(new SportEngine());
        builder.setTripComputer(true);
        builder.setGPS(true);
    }
    constructSUV(builder) {
        builder.setSeats(6);
        builder.setEngine(new BasicEngine());
        builder.setTripComputer(false);
        builder.setGPS(true);
    }
}
function makeCar(type) {
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
