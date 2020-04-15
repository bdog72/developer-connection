/* eslint-disable no-unused-vars */
//
//
const Car = require('./src/car/Car');
const RacingCar = require('./src/car/RacingCar');

// Object.prototype.displayInfo = function () {
//   console.log('DISPLAYING OBJECT INFO!!!!!!');
// };

function runApp() {
  const car = new Car({ brand: 'Mazda', type: 3, year: 2010 });
  const car2 = new Car({ type: 'Mustang', brand: 'Ford', year: 2019 });

  const racingCar = new RacingCar({
    category: 'F1',
    brand: 'Nissan',
    type: 'GTR',
    year: 2020,
  });

  racingCar.displayInfo();
  car.displayInfo();

  const cars = [car, car2, racingCar];
}

runApp();
