class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Создаем экземпляр класса
const rectangle = new Rectangle(5, 3);

// Вычисляем площадь и периметр
console.log(`Area of the rectangle: ${rectangle.getArea()}`); // Вывод: Area of the rectangle: 15
console.log(`Perimeter of the rectangle: ${rectangle.getPerimeter()}`); // Вывод: Perimeter of the rectangle: 16
