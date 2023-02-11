interface Graphic {
  move(x: number, y: number): string;
  draw(): string;
}

class Dot implements Graphic {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public move(x: number, y: number): string {
    this.x += x;
    this.y += y;
    return `점을 (${this.x}, ${this.y}) 좌표로 이동...`;
  }

  public draw(): string {
    return `점을 (${this.x}, ${this.y}) 좌표에 그림...`;
  }
}

class Circle extends Dot {
  radius: number;

  constructor(x: number, y: number, radius: number) {
    super(x, y);
    this.radius = radius;
  }

  public draw(): string {
    return `반지름 ${this.radius}인 원을 (${this.x}, ${this.y}) 좌표에 그림...`;
  }
}

class CompoundGraphic implements Graphic {
  children: Graphic[] = [];

  public add(child: Graphic): void {
    this.children.push(child);
  }

  public remove(child: Graphic): void {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }

  public move(x: number, y: number): string {
    return this.children.map((child) => child.move(x, y)).join("\n");
  }

  public draw(): string {
    return this.children.map((child) => child.draw()).join("\n");
  }
}

class ImageEditor {
  all: CompoundGraphic;

  public load(): void {
    this.all = new CompoundGraphic();
    this.all.add(new Dot(1, 2));
    this.all.add(new Circle(5, 3, 10));
  }

  public groupSelected(components: Graphic[]): void {
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
