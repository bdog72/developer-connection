//
//
// console.log(12345);

// (function () {
//   function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
//   }

//   Question.prototype.displayQuestion = function () {
//     console.log(this.question);
//     for (let i = 0; i < this.answers.length; i++) {
//       console.log(`${i}: ${this.answers[i]}`);
//       // console.log(i + ': ' + this.answers[i]);
//     }
//   };

//   Question.prototype.checkAnswer = function (ans) {
//     if (ans === this.correct) {
//       console.log('Correct Answer');
//     } else {
//       console.log('Wrong Answer');
//     }
//   };

//   const q1 = new Question(
//     'Is javascript the coolest coding language?',
//     ['Yes', 'No'],
//     0
//   );

//   const q2 = new Question(
//     'What is the name of this course"s teacher?',
//     ['John', 'Mike', 'Jonas'],
//     2
//   );

//   const q3 = new Question(
//     'What does best describe coding?',
//     ['Boring', 'Hard', 'Fun'],
//     2
//   );

//   const questions = [q1, q2, q3];

//   const n = Math.floor(Math.random() * questions.length);

//   questions[n].displayQuestion();

//   const answer = parseInt(prompt('Please select the correct answer'));

//   questions[n].checkAnswer(answer);
// })();

(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question);
    for (let i = 0; i < this.answers.length; i++) {
      console.log(`${i}: ${this.answers[i]}`);
      // console.log(i + ': ' + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
      console.log('Correct Answer');
    } else {
      console.log('Wrong Answer');
    }
  };

  const q1 = new Question(
    'Is javascript the coolest coding language?',
    ['Yes', 'No'],
    0
  );

  const q2 = new Question(
    'What is the name of this course"s teacher?',
    ['John', 'Mike', 'Jonas'],
    2
  );

  const q3 = new Question(
    'What does best describe coding?',
    ['Boring', 'Hard', 'Fun'],
    2
  );

  const questions = [q1, q2, q3];
  function nextQuestion() {
    const n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    const answer = prompt('Please select the correct answer');

    if (answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer));
      nextQuestion();
    }
  }
  nextQuestion();
})();

// function retirement(retirementAge) {
//   const a = ` years left until retirement`;
//   return function (yearOfBirth) {
//     const age = 2016 - yearOfBirth;
//     console.log(retirementAge - age + a);
//   };
// }

// const retirementUS = retirement(66);
// retirementUS(1990);
// (() => {
//   var score = Math.floor(Math.random() * 10 + 1);
//   console.log(score);

//   console.log(score >= 5);
// })();
///////////////////////
// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function (name) {
//       console.log(`${name}, can you please explain what ux design is`);
//     };
//   } else if ('teacher') {
//     return function (name) {
//       console.log(`${name}, what subject do you teach?`);
//     };
//   } else {
//     return function (name) {
//       console.log(`Hello ${name}, what do you do`);
//     };
//   }
// }

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('Bozo');

// var designerQuestion = interviewQuestion('designer');
// teacherQuestion('Molly Moo');

// const years = [1990, 1965, 1937, 2005, 1998];
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calcAge(el) {
//   return 2016 - el;
// }

// function isFullAge(el) {
//   return el >= 18;
// }

// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - 0.67 * el);
//   } else {
//     return -1;
//   }
// }

// const ages = arrayCalc(years, calcAge);
// console.log(ages);

// const fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);

// const rates = arrayCalc(ages, maxHeartRate);
// console.log(rates);

// var a = 23;
// var b = a;
// a = 46;

// console.log(a);
// console.log(b);

// var obj1 = {
//   name: 'John',
//   age: 26,
// };

// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// var age = 27;
// var obj = {
//   name: 'Jonas',
//   city: 'Lisbon',
// };

// function change(a, b) {
//   a = 30;
//   b.city = 'San Francisco';
// }

// change(age, obj);
// console.log(age);
// console.log(obj.city);

//////////////////////////////////
// const personProto = {
//   calculateAge: function () {
//     console.log(2016 - this.yearOfBirth);
//   },
// };

// const john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// const jane = Object.create(personProto, {
//   name: {
//     value: 'Jane',
//   },
//   yearOfBirth: {
//     value: 1969,
//   },
//   job: {
//     value: 'designer',
//   },
// });

///////////////////////////////
// const Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person.prototype.calcAge = function () {
//   console.log(2020 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// const john = new Person('Bozo', 1972, 'dork');
// const jane = new Person('Jane', 1969, 'designer');
// const mark = new Person('Mark', 1948, 'retired');

// john.calcAge();
// jane.calcAge();
// mark.calcAge();

// console.log(john.lastName);
