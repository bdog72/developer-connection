//
//

const CarStorage = require('./src/car/CarStorage');
const CarManager = require('./src/car/CarManager');
const Car = require('./src/car/Car');
const RacingCar = require('./src/car/RacingCar');
const readline = require('readline-sync');

const i = require('./src/lib/i');

function runApp() {
  function displayOptions() {
    console.log('Press "1" to add a car');
    console.log('Press "2" to remove a car');
    console.log('Press "3" to list all of the cars');
    console.log('Press "exit" to quit to program');
  }
  const car = new Car({ brand: 'Mazda', type: 3, year: 2010 });
  const car2 = new Car({ type: 'Mustang', brand: 'Ford', year: 2020 });
  const car3 = new Car({ type: 'm6', brand: 'BMW', year: 2000 });
  const car4 = new Car({ type: 'GTR', brand: 'Nissan', year: 2005 });
  const racingCar = new RacingCar({
    category: 'f1',
    brand: 'Supra',
    type: 'Toyota',
    year: 2020,
  });
  console.log('Bozo');

  const cars = [car, car2, racingCar, car3, car4];
  const carStorage = new CarStorage([...cars]);
  const carManager = new CarManager();

  let appIsRunning = true;
  displayOptions();

  while (appIsRunning) {
    let userInput = readline.question('Write me something: ').toLowerCase();

    switch (userInput) {
      case '1':
        const newCar = carManager.createCar();
        carStorage.addCar(newCar);
        break;
      case '2':
        const carId = carManager.askQuestion('Provide car id: \n');
        carStorage.removeCar(carId);
        break;
      case '3':
        carStorage.listCars();
        break;
      case 'exit':
        console.log('Good Bye!');
        appIsRunning = false;
        break;
      default:
        console.log('Invalid Option!');
    }
  }
}

// runApp();

const runTestApp = function () {
  const car = new Car({ brand: 'mercedes', type: 'benz', year: 1995 });
  car.setCarDate();

  const data = i.getDBData((dbData) => {
    console.log(dbData);
  });

  console.log(data);
  console.log('Finish runtestapp');
};

runTestApp();