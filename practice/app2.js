//
//
console.log(123);

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const mark = {
  fullName: 'Mark Bozo',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

john.calcBMI();
mark.calcBMI();

console.log(john, mark);
20;

if (john.bmi > mark.bmi) {
  console.log(`${john.fullName} has a higher bmi than ${mark.fullName}`);
} else {
  console.log(`${mark.fullName} has a higher bmi than ${john.fullName}`);
}

// const john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function (birthYear) {
//     return 2018 - this.birthYear;
//   },
// };

// console.log(john.calcAge());

// const john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
// };

// console.log(john);
// console.log(john.firstName);
// console.log(john['lastName']);
// const x = 'birthYear';
// console.log(john['lastName']);
// console.log(john[x]);
// john.job = 'designer';
// john.isMarried = true;
// console.log(john);

// const jane = new Object();
// jane.name = 'Jane';
// console.log(jane);
