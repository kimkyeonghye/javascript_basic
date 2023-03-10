/**
 * Coding Challenge #1
 */
// TEST DATA 1
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.95;
*/

// TEST DATA 2
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
*/
/*
const BMI = (mass, height) => mass / height ** 2;

const BMIMark = BMI(massMark, heightMark);
const BMIJohn = BMI(massJohn, heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(`BMIMark: ${BMIMark}
BMIJohn: ${BMIJohn}
markHigherBMI: ${markHigherBMI}`);
*/

/**
 * Coding Challenge #2
 */
/*
if (BMIMark > BMIJohn) {
  console.log(
    `Mark's BMI(${BMIMark.toFixed(
      1,
    )}) is higher than John's BMI(${BMIJohn.toFixed(1)})`,
  );
} else {
  console.log(
    `John's BMI(${BMIJohn.toFixed(
      1,
    )}) is higher than Mark's BMI(${BMIMark.toFixed(1)})`,
  );
}
*/

/**
 * Coding Challenge #3
 */
/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fillName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${
      john.fullName
    }'s BMI (${john.bmi.toFixed(1)})`,
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${
      mark.fullName
    }'s BMI (${mark.bmi.toFixed(1)})`,
  );
}
*/

/**
 * Coding Challenge #4
 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAvg = (arr) => arr.reduce((acc, cur) => acc + cur, 0) / arr.length;

console.log(calcAvg(totals));
console.log(calcAvg(tips));
