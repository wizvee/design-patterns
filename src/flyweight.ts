class TreeType {
  name: string;
  color: string;
  texture: string;

  constructor(name: string, color: string, texture: string) {
    this.name = name;
    this.color = color;
    this.texture = texture;
  }

  public draw(x: number, y: number): void {
    console.log(
      `좌표 (${x}, ${y})에 ${this.color} ${this.name} ${this.texture} 그리는 중...`
    );
  }

  public match(name: string, color: string, texture: string): boolean {
    return (
      this.name === name && this.color === color && this.texture === texture
    );
  }
}

class TreeFactory {
  static treeTypes: TreeType[] = [];

  static getTreeType(name: string, color: string, texture: string): TreeType {
    let type = this.treeTypes.find((type) => type.match(name, color, texture));
    if (!type) {
      type = new TreeType(name, color, texture);
      this.treeTypes.push(type);
    }
    return type;
  }
}

class Tree {
  x: number;
  y: number;
  type: TreeType;

  constructor(x: number, y: number, type: TreeType) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  public draw() {
    this.type.draw(this.x, this.y);
  }
}

class Forest {
  trees: Tree[] = [];

  public plantTree(
    x: number,
    y: number,
    name: string,
    color: string,
    texture: string
  ) {
    const type = TreeFactory.getTreeType(name, color, texture);
    const tree = new Tree(x, y, type);
    this.trees.push(tree);
  }

  public draw() {
    this.trees.forEach((tree) => tree.draw());
  }
}

const factory = new TreeFactory();
const forest = new Forest();

forest.plantTree(10, 10, "자작나무", "하얀색", "원목");
forest.plantTree(50, 10, "흑단나무", "검은색", "원목");
forest.draw();
