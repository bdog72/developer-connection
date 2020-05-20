//
//
console.log(123);

const john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function (birthYear) {
    return 2018 - this.birthYear;
  },
};

console.log(john.calcAge());

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
