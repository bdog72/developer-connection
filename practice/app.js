//
//
console.log(12345);

const john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];
    this.bozo = [];
    for (let i = 0; i < this.bills.length; i++) {
      let percentage;
      let bill = this.bills[i];
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
      this.bozo = 2;
    }
  },
};

// console.log(john);

const mark = {
  fullName: 'Mark Miller',
  bills: [77, 5, 10, 45],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];
    this.bozo = [];
    for (let i = 0; i < this.bills.length; i++) {
      let percentage;
      let bill = this.bills[i];
      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
      this.bozo = 2;
    }
  },
};

function calcAverage(tips) {
  let sum = 0;
  for (i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(`${john.fullName} family pays higher tips`);
} else {
  console.log(
    `${mark.fullName}'s family pays higher tips, with an average tip of ${mark.average}%`
  );
}
