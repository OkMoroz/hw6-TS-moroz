"use strict";
class ShapeDimensions {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}
class Circle extends ShapeDimensions {
    constructor(name, color, radius) {
        super(name, color);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle extends ShapeDimensions {
    constructor(name, color, length, width) {
        super(name, color);
        this.name = "Rectangle";
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        return this.length * this.width;
    }
    print() {
        console.log(`Formula area of ${this.name}: Area = Length * Width S = ${this.length} * ${this.width}`);
    }
}
class Square extends ShapeDimensions {
    constructor(name, color, side) {
        super(name, color);
        this.name = "Square";
        this.side = side;
    }
    calculateArea() {
        return this.side * this.side;
    }
    print() {
        console.log(`Formula area of ${this.name}: Area = Side * Side S = ${this.side} * ${this.side}`);
    }
}
class Triangle extends ShapeDimensions {
    constructor(name, color, base, height) {
        super(name, color);
        this.base = base;
        this.height = height;
    }
    calculateArea() {
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
