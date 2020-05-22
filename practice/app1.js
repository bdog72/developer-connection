//
//
// console.log('Bozo Boy');
// console.log(this);

// function calcAge(year) {
//   console.log(2020 - year);
//   console.log(this);
// }

// calcAge(1972);

const john = {
  name: 'Bozo',
  yearOfBirth: 1972,
  calcAge1: function () {
    console.log(this);
    console.log(2020 - this.yearOfBirth);

    // function inner() {
    //   console.log(this);
    // }
    // inner();
  },
};

john.calcAge1();

const mike = {
  name: 'Mike',
  yearOfBirth: 1984,
};

mike.calcAge1 = john.calcAge1;
mike.calcAge1();

// calculateAge(1972);

// function calculateAge(year) {
//   console.log(2020 - year);
// }

// const calcYears = function (year) {
//   console.log(65 - (2020 - year));
// };

// calcYears(1972);
