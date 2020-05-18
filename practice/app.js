//
//
console.log('Bozo Boy');

// const names = ['John', 'Mark', 'Jane'];
// const years = new Array(1990, 1969, 1948, 'Bozo');

// console.log(names);
// console.log(years.length);

// names[1] = 'Bozo';
// console.log(names);

const john = ['john', 'smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);

console.log(john.indexOf(1990));
john.indexOf('designer') === -1 ? console.log('Yo') : '';

console.log(john);
// console.log(john);

console.log('Bozo Boy1');
// var whatDoYouDo = function (job, firstName) {
//   switch (job) {
//     case 'teacher':
//       return `${firstName} teaches kids how to code`;
//     // break;
//     case 'driver':
//       return `${firstName} drives you around`;
//     // break;
//     case 'designer':
//       return `${firstName} designs websites`;
//     // break;
//     default:
//       return `No idea what ${firstName} does`;
//   }
// };

// let result = whatDoYouDo('teacher', 'Bozo');
// console.log(result);

// result = whatDoYouDo('driver', 'Molly');
// console.log(result);

// result = whatDoYouDo('designer', 'Josey');
// console.log(result);

// result = whatDoYouDo('', 'Bozo');
// console.log(result);

// function calculateAge(birthYear) {
//   return 2020 - birthYear;
// }

// const ageBrian = calculateAge(1972);
// const ageMolly = calculateAge(2012);
// console.log(ageBrian + ' - ' + ageMolly);

// function yearsUntilRetirement(year, firstName) {
//   const age = calculateAge(year);
//   const total = 65 - age;
//   console.log(`${firstName} retires in ${total} years `);
// }

// yearsUntilRetirement(1972, 'Brian');
