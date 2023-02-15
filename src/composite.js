class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(x, y) {
        this.x += x;
        this.y += y;
        return `점을 (${this.x}, ${this.y}) 좌표로 이동...`;
    }
    draw() {
        return `점을 (${this.x}, ${this.y}) 좌표에 그림...`;
    }
}
class Circle extends Dot {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    draw() {
        return `반지름 ${this.radius}인 원을 (${this.x}, ${this.y}) 좌표에 그림...`;
    }
}
class CompoundGraphic {
    constructor() {
        this.children = [];
    }
    add(child) {
        this.children.push(child);
    }
    remove(child) {
        const index = this.children.indexOf(child);
        this.children.splice(index, 1);
    }
    move(x, y) {
        return this.children.map((child) => child.move(x, y)).join("\n");
    }
    draw() {
        return this.children.map((child) => child.draw()).join("\n");
    }
}
class ImageEditor {
    load() {
        this.all = new CompoundGraphic();
        this.all.add(new Dot(1, 2));
        this.all.add(new Circle(5, 3, 10));
    }
    groupSelected(components) {
        const group = new CompoundGraphic();
        components.forEach((component) => {
            group.add(component);
            this.all.remove(component);
        });
        this.all.add(group);
        const draw = this.all.draw();
        console.log(draw);
    }
}
const editor = new ImageEditor();
editor.load();
editor.groupSelected([new Dot(1, 2), new Dot(5, 3), new Circle(7, 10, 3)]);
