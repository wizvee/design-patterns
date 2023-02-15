class VictorianChair {
    hasLegs() {
        return "다리를 4개 가지고";
    }
    sitOn() {
        return "1명이 앉을 수 있는 빅토리안 의자";
    }
}
class ModernChair {
    hasLegs() {
        return "일체형 다리를 가진";
    }
    sitOn() {
        return "1명이 앉을 수 있는 모던 의자";
    }
}
class VictorianCoffeeTable {
    hasLegs() {
        return "다리를 4개 가지고";
    }
    putOn() {
        return "물건을 올려놓을 수 있는 빅토리안 커피테이블";
    }
}
class ModernCoffeeTable {
    hasLegs() {
        return "다리를 3개 가지고";
    }
    putOn() {
        return "물건을 올려놓을 수 있는 모던 커피테이블";
    }
}
class VictorianSofa {
    hasLegs() {
        return "다리를 4개 가지고";
    }
    sitOn() {
        return "4명이 앉을 수 있는 빅토리안 소파";
    }
}
class ModernSofa {
    hasLegs() {
        return "일체형 다리를 가진";
    }
    sitOn() {
        return "2명이 앉을 수 있는 모던 소파";
    }
}
class ModernFunitureFactory {
    createChair() {
        return new ModernChair();
    }
    createCoffeeTable() {
        return new ModernCoffeeTable();
    }
    createSofa() {
        return new ModernSofa();
    }
}
class VictorianFurnitureFactory {
    createChair() {
        return new VictorianChair();
    }
    createCoffeeTable() {
        return new VictorianCoffeeTable();
    }
    createSofa() {
        return new VictorianSofa();
    }
}
function clientCode(factory) {
    const chair = factory.createChair();
    const coffeeTable = factory.createCoffeeTable();
    const sofa = factory.createSofa();
    console.log(`${chair.hasLegs()} ${chair.sitOn()}`);
    console.log(`${coffeeTable.hasLegs()} ${coffeeTable.putOn()}`);
    console.log(`${sofa.hasLegs()} ${sofa.sitOn()}`);
}
console.log("고객: 모던 가구 세트 주문 중...");
clientCode(new ModernFunitureFactory());
console.log("");
console.log("고객: 빅토리안 세트 주문 중...");
clientCode(new VictorianFurnitureFactory());
console.log("");
