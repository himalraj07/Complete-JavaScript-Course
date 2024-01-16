/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Himal");
console.log("23");

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let himal_nabin = "JM";
let $function = 27;

let person = "Himal";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);



// DATA TYPES
let javaScritpIsFun = true;
console.log(javaScritpIsFun);

// console.log(typeof true);
console.log(typeof javaScritpIsFun);
// console.log(typeof 23);
// console.log(typeof "Himal");

javaScritpIsFun = "YES!";
console.log(typeof javaScritpIsFun);
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


// LECTURE: let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";

lastName = "Bhusal";
console.log(lastName);


// MATH OPERATORS
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Himal";
const lastName = "Bhusal";
console.log(firstName + " " + lastName);

// ASSIGNMENT OPERATORS
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// COMPARISON OPERATORS
console.log(ageJonas > ageSarah); // >, <. >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// OPERATOR PRECEDENCE
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

const BMIHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, BMIHigherBMI);
*/

////////////////////////////////////
// STRINGS AND TEMPLATE LITERALS
/*
const firstName = "Himal";
const job = "student";
const birthYear = 2004;
const year = 2037;

const himal =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(himal);

const himalNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(himalNew);

console.log(`Just a regular string ...`);

console.log(
  "String with \n\
multiple \n\
lines "
);

console.log(`Srting
multiple 
lines`);
*/

// TAKING DECISIONS: IF / ELSE STATEMENTS
const age = 15;

if (age >= 18) {
  console.log("Himal can start driving licence 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Himal is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
