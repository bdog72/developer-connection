//
//
//

class Car {
  brand = '';
  type = '';
  year = null;

  constructor(brand, type, year) {
    this.brand = brand;
    this.type = type;
    this.year = year;
  }

  displayInfo() {
    console.log(`${this.brand} ${this.type} - ${this.year}`);
  }
}

function runApp() {
  const car = new Car('Nissan', 'GTR', 2016);
  // const car = new Car();
  // car.brand = 'Mazda';
  // car.type = 3;
  // car.year = 2010;
  const car2 = new Car('Ford', 'Mustang', 2020);
  // const car2 = {
  //   brand: 'Ford',
  //   type: 'Mustang',
  //   produceYear: 2020,
  //   displayInfo: function () {
  //     console.log(`${this.brand} ${this.type} - ${this.produceYear}`);
  //   },
  // };

  car.displayInfo();
  car2.displayInfo();
}

runApp();
