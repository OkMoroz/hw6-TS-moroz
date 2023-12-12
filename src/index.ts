class ShapeDimensions {
  public readonly name: string;
  public readonly color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
}

interface PrintItem {
  print(): void;
}

class Circle extends ShapeDimensions {
  private radius: number;

  constructor(name: string, color: string, radius: number) {
    super(name, color);
    this.radius = radius;
  }

  public calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends ShapeDimensions implements PrintItem {
  public readonly name: string = "Rectangle";
  protected length: number;
  protected width: number;

  constructor(name: string, color: string, length: number, width: number) {
    super(name, color);
    this.length = length;
    this.width = width;
  }

  public calculateArea(): number {
    return this.length * this.width;
  }

  public print(): void {
    console.log(
      `Formula area of ${this.name}: Area = Length * Width S = ${this.length} * ${this.width}`
    );
  }
}

class Square extends ShapeDimensions implements PrintItem {
  public readonly name: string = "Square";
  private side: number;

  constructor(name: string, color: string, side: number) {
    super(name, color);
    this.side = side;
  }

  public calculateArea(): number {
    return this.side * this.side;
  }

  public print(): void {
    console.log(
      `Formula area of ${this.name}: Area = Side * Side S = ${this.side} * ${this.side}`
    );
  }
}

class Triangle extends ShapeDimensions {
  private base: number;
  private height: number;

  constructor(name: string, color: string, base: number, height: number) {
    super(name, color);
    this.base = base;
    this.height = height;
  }

  public calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}

const circle = new Circle("My Circle", "red", 5);
const rectangle = new Rectangle("My Rectangle", "green", 4, 6);
const square = new Square("My Square", "blue", 3);
const triangle = new Triangle("My Triangle", "yellow", 4, 5);

console.log(`${circle.name} Area: ${circle.calculateArea()}`);
console.log(`${rectangle.name} Area: ${rectangle.calculateArea()}`);
console.log(`${square.name} Area: ${square.calculateArea()}`);
console.log(`${triangle.name} Area: ${triangle.calculateArea()}`);

rectangle.print();
square.print();
