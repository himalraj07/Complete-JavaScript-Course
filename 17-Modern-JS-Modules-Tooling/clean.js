'use strict'

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'himal' },
  { value: -45, description: 'Groceries 🥑', user: 'himal' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'himal' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'himal' },
  { value: -1100, description: 'New iPhone 📱', user: 'himal' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'himal' },
])

const SpendingLimits = Object.freeze({
  himal: 1500,
  matilda: 100,
})
// SpendingLimits['Jay'] = 500;

const getLimit = (limits, user) => limits?.[user] ?? 0

// Pure function to add an expense
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'himal'
) {
  const cleanUser = user.toLowerCase()

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state
}

const newBudget1 = addExpense(budget, SpendingLimits, 10, 'Pizza 🍕')
const newBudget2 = addExpense(
  newBudget1,
  SpendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
)
const newBudget3 = addExpense(newBudget2, SpendingLimits, 200, 'Stuff', 'Jay')

// const checkExpenses2 = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
// for (const entry of state)
//   if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
// };

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  )

const finalBudget = checkExpenses(newBudget3, SpendingLimits)
console.log(finalBudget)

// Impure
const LogBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => `${entry.description.slice(-2)}`)
    .join(' / ')
  // .reduce((acc, cur) => `${acc} / ${cur.description.slice(-2)}`, '')
  
  console.log(bigExpenses)

  // let output = '';
  // for (const entry of finalBudget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
}

LogBigExpenses(finalBudget, 500)
