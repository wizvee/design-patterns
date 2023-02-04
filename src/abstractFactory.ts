interface Chair {
  hasLegs(): string;
  sitOn(): string;
}

class VictorianChair implements Chair {
  public hasLegs(): string {
    return "다리를 4개 가지고";
  }

  public sitOn(): string {
    return "1명이 앉을 수 있는 빅토리안 의자";
  }
}

class ModernChair implements Chair {
  public hasLegs(): string {
    return "일체형 다리를 가진";
  }

  public sitOn(): string {
    return "1명이 앉을 수 있는 모던 의자";
  }
}

interface CoffeeTable {
  hasLegs(): string;
  putOn(): string;
}

class VictorianCoffeeTable implements CoffeeTable {
  public hasLegs(): string {
    return "다리를 4개 가지고";
  }

  public putOn(): string {
    return "물건을 올려놓을 수 있는 빅토리안 커피테이블";
  }
}

class ModernCoffeeTable implements CoffeeTable {
  public hasLegs(): string {
    return "다리를 3개 가지고";
  }

  public putOn(): string {
    return "물건을 올려놓을 수 있는 모던 커피테이블";
  }
}

interface Sofa {
  hasLegs(): string;
  sitOn(): string;
}

class VictorianSofa implements Sofa {
  public hasLegs(): string {
    return "다리를 4개 가지고";
  }

  public sitOn(): string {
    return "4명이 앉을 수 있는 빅토리안 소파";
  }
}

class ModernSofa implements Sofa {
  public hasLegs(): string {
    return "일체형 다리를 가진";
  }

  public sitOn(): string {
    return "2명이 앉을 수 있는 모던 소파";
  }
}

interface FurnitureFactory {
  createChair(): Chair;
  createCoffeeTable(): CoffeeTable;
  createSofa(): Sofa;
}

class ModernFunitureFactory implements FurnitureFactory {
  public createChair(): Chair {
    return new ModernChair();
  }

  public createCoffeeTable(): CoffeeTable {
    return new ModernCoffeeTable();
  }

  public createSofa(): Sofa {
    return new ModernSofa();
  }
}

class VictorianFurnitureFactory implements FurnitureFactory {
  public createChair(): Chair {
    return new VictorianChair();
  }

  public createCoffeeTable(): CoffeeTable {
    return new VictorianCoffeeTable();
  }

  public createSofa(): Sofa {
    return new VictorianSofa();
  }
}

function clientCode(factory: FurnitureFactory) {
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
