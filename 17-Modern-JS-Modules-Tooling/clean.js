const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'himal' },
  { value: -45, description: 'Groceries 🥑', user: 'himal' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'himal' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'himal' },
  { value: -1100, description: 'New iPhone 📱', user: 'himal' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'himal' },
];

const SpendingLimits = {
  himal: 1500,
  matilda: 100,
};

const getLimit = user => SpendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user = 'himal') {
  user = user.toLowerCase();

  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user });
  }
};

addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');

const checkExpenses = function () {
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
checkExpenses();

console.log(budget);

const LogBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
LogBigExpenses(500);
