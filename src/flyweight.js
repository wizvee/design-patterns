class TreeType {
    constructor(name, color, texture) {
        this.name = name;
        this.color = color;
        this.texture = texture;
    }
    draw(x, y) {
        console.log(`좌표 (${x}, ${y})에 ${this.color} ${this.name} ${this.texture} 그리는 중...`);
    }
    match(name, color, texture) {
        return (this.name === name && this.color === color && this.texture === texture);
    }
}
class TreeFactory {
    static getTreeType(name, color, texture) {
        const matchType = (type) => type.match(name, color, texture);
        let type = this.treeTypes.find(matchType);
        if (!type) {
            type = new TreeType(name, color, texture);
            this.treeTypes.push(type);
        }
        return type;
    }
}
TreeFactory.treeTypes = [];
class Tree {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
    draw() {
        this.type.draw(this.x, this.y);
    }
}
class Forest {
    constructor() {
        this.trees = [];
    }
    plantTree(x, y, name, color, texture) {
        const type = TreeFactory.getTreeType(name, color, texture);
        const tree = new Tree(x, y, type);
        this.trees.push(tree);
    }
    draw() {
        this.trees.forEach((tree) => tree.draw());
    }
}
const factory = new TreeFactory();
const forest = new Forest();
forest.plantTree(10, 10, "자작나무", "하얀색", "원목");
forest.plantTree(50, 10, "흑단나무", "검은색", "원목");
forest.draw();
