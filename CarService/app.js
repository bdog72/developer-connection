/* eslint-disable no-unused-vars */
//
//
const Car = require('./src/car/Car');
const RacingCar = require('./src/car/RacingCar');
const readline = require('readline-sync');
const i = require('./src/lib/i');

function runApp() {
  function displayOptions() {
    console.log('Press "1" to add a car');
    console.log('Press "2" to remove a car');
    console.log('Press "3" to list all of the cars');
    console.log('Press "exit" quit the program');
  }

  const car = new Car({ brand: 'Mazda', type: 3, year: 2010 });
  const car2 = new Car({ type: 'Mustang', brand: 'Ford', year: 2019 });
  const car3 = new Car({ type: 'M6', brand: 'BMW', year: 2018 });
  const car4 = new Car({ type: 'C500', brand: 'Mercedes', year: 2020 });

  const racingCar = new RacingCar({
    category: 'F1',
    brand: 'Nissan',
    type: 'GTR',
    year: 2020,
  });

  const cars = [car, car2, car3, car4, racingCar];

  let appIsRunning = true;

  displayOptions();

  while (appIsRunning) {
    let userInput = readline.question('Write Me Something: ').toLowerCase();

    switch (userInput) {
      case '1':
        console.log('Creating Car');
        break;
      case '2':
        console.log('Removing Car');
        break;
      case '3':
        cars.forEach(function (car) {
          car.displayInfo();
        });
        break;
      case 'exit':
        console.log('GoodBye Bozo');
        appIsRunning = false;
        break;
      default:
        console.log('Invalid Option');
        break;
    }

    // if (userInput === '1') {
    //   //
    //   console.log('Creating Car');
    // } else if (userInput === '2') {
    //   //
    //   console.log('Removing Car');
    // } else if (userInput === '3') {
    //   //
    //   cars.forEach(function (car) {
    //     car.displayInfo();
    //   });
    //   console.log('List all Cars');
    // } else if (userInput === 'exit') {
    //   console.log('GoodBye Bozo');
    //   appIsRunning = false;
    // } else {
    //   console.log('Invalid Option');
    // }
  }
}

runApp();
