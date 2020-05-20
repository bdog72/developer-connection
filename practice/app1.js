//
//
console.log(123);

function tipCalculator(bill) {
  let percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill <= 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

const bills = [124, 48, 268];
const tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];
// const total = tips.toFixed(2);
console.log(tips);

// let tipTotal = tipCalculator(75);
// let total = tipTotal + percentage;
// console.log(tipTotal);
