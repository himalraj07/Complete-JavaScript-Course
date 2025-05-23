'use strict'
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`
    console.log(output)

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true
      // CREATING NEW variable with same name as outer scope's variable
      const firstName = 'Bikash'

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!'

      const str = `Oh, and you're a millenial, ${firstName}`
      console.log(str)

      function add(a, b) {
        return a + b
      }
    }
    // console.log(str);
    console.log(millenial)
    // console.log(add(2, 3))
    console.log(output)
  }
  printAge()

  return age
}

const firstName = 'Himal'
calcAge(1991)
// console.log(age);
// printAge()


// Variables
console.log(me)
// console.log(job);
// console.log(year);

// Hoisting and TDZ in Practice

var me = 'Himal'
let job = 'teacher'
const year = 1991

// Functions
console.log(addDecl(2, 3))
// console.log(addExpr(2, 3))
console.log(addArrow)
// console.log(addArrow(2, 3))

function addDecl(a, b) {
  return a + b
}

const addExpr = function (a, b) {
  return a + b
}

var addArrow = (a, b) => a + b

// Example
console.log(undefined)
if (!numProducts) deleteShoppingCart()

var numProducts = 10

function deleteShoppingCart() {
  console.log('All products deleted!')
}

var x = 1
let y = 2
const z = 3

console.log(x === window.x)
console.log(y === window.y)
console.log(z === window.z)


// THE THIS KEYWORD IN PRACTICE

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(1991);

const calcAgeAerrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeAerrow(1980);

const himal = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
himal.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = himal.calcAge;
matilda.calcAge();

const f = himal.calcAge;
f();


var firstName = 'Bikash'

// REGULAR FUNCTIONS VS. ARROW FUNCTIONS

const himal = {
  firstName: 'Himal',
  year: 1991,
  calcAge: function () {
    console.log(this)
    console.log(2037 - this.year)

    // Solution 1
    // const self = this // self or that
    // const isMillenial = function () {
    //   console.log(self)
    //   console.log(self.year >= 1981 && self.year <= 1996)
    // }

    // Solution 2
    const self = this // self or that
    const isMillenial = () => {
      console.log(this)
      console.log(this.year >= 1981 && this.year <= 1996)
    }

    isMillenial()
  },

  greet: () => {
    console.log(this)
    console.log(`Hey ${this.firstName}`)
  },
}
himal.greet()
himal.calcAge()

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments)
  return a + b
}
addExpr(2, 5)
addExpr(2, 5, 8, 12)

var addArrow = (a, b) => {
  console.log(arguments)
  return a + b
}
addArrow(2, 5, 8)


// Primitives vs. Objects (Primitive vs. Reference Types)

let age = 30
let oldAge = age
age = 31
console.log(age)
console.log(oldAge)

const me = {
  name: 'Himal',
  age: 30,
}
const friend = me
friend.age = 27
console.log('Friend:', friend)
console.log('Me:', me)
*/

// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Wiliams'
let oldLastName = lastName
lastName = 'Davis'
console.log(lastName, oldLastName)

// Refrence types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
}
const marriedJessica = jessica
marriedJessica.lastName = 'Davis'
console.log('Before marriage:', jessica)
console.log('After marriage:', marriedJessica)
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
}

const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis'

jessicaCopy.family.push('Mary')
jessicaCopy.family.push('John')

console.log('Before marriage:', jessica2)
console.log('After marriage:', jessicaCopy)
