//
//
console.log('Bozo Boy1');

function calculateAge(birthYear) {
  return 2020 - birthYear;
}

const ageBrian = calculateAge(1972);
const ageMolly = calculateAge(2012);
console.log(ageBrian + ' - ' + ageMolly);

function yearsUntilRetirement(year, firstName) {
  const age = calculateAge(year);
  const total = 65 - age;
  console.log(`${firstName} retires in ${total} years `);
}

yearsUntilRetirement(1972, 'Brian');
