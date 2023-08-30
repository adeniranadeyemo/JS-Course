'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const y = [...currencies];
// y.forEach(arr => console.log(arr.join(' ')));

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

////////////////////////////////////////////////////

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.reduce(
    (acc, mov) => (mov > 0 ? acc + mov : acc),
    0
  );
  labelSumIn.textContent = `${incomes}€`;

  const outgoing = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outgoing)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((acc, int) => (int >= 1 ? acc + int : acc), 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsername = accs =>
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name.at(0))
      .join('');
  });
createUsername(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event Handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent default form submission
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner
      .split(' ')
      .at(0)}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    // Add movemnt
    currentAccount.movements.push(loanAmount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete UI
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputClosePin.value = inputCloseUsername.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// CHALLENGE ////////////////////////////////////
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];

// const checkDogs = function (array1, array2) {
//   let array3 = [...array1];
//   let dogsJuliaCorrected = array3.slice(1, 3);

//   const allDogs = [...dogsJuliaCorrected, ...array2];

//   allDogs.forEach(function (dog, i) {
//     dog >= 3
//       ? console.log(`Dog number ${i + 1} is an adult and is ${dog} years old.`)
//       : console.log(`Dog number ${i + 1} still a puppy.`);
//   });
// };
// checkDogs(dogsJulia, dogsKate);

// CHALLENGE//////////////////////////////////////
// const dogsAgesOne = [5, 2, 4, 1, 15, 8, 3];
// const dogsAgesTwo = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (dogsAges) {
//   const humanDogAges = dogsAges.map(dogAge =>
//     dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
//   );

//   const filteredAges = humanDogAges.filter(humanDogAge => humanDogAge >= 18);

//   const average =
//     filteredAges.reduce((acc, curr) => acc + curr, 0) / filteredAges.length;

//   // const average = filteredAges.reduce(
//   //   (acc, curr, i, arr) => acc + curr / arr.length,
//   //   0
//   // );

//   return average;
// };

// const calcAverageHumanAge = dogsAges =>
//   dogsAges
//     .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
//     .filter(humanDogAge => humanDogAge >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg1 = calcAverageHumanAge(dogsAgesOne);
// const avg2 = calcAverageHumanAge(dogsAgesTwo);

// console.log(avg1, avg2);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let array = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// console.log(array.slice(2));
// console.log(array.slice(2, 4));
// console.log(array.slice(-1));
// console.log(array);
// console.log(array.slice(-2));
// console.log(array.slice(1, -2));
// console.log(array.slice());
// console.log([...array]);

// SPLICE - Mutates original array
// console.log(array.splice(2));
// array.splice(-1);
// console.log(array);
// array.splice(1, 2);
// console.log(array);

// REVERSE - Mutates original array.
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// CONCAT - Doesn't mutate the original array;
// const letters = array.concat(arr2);
// console.log([...array, ...arr2]);
// console.log(letters);
// console.log(array);

// JOIN
// console.log(letters.join(', '));

// AT
// const arr = [23, 11, 44];
// console.log(arr.at(-1));

// Typically used to get the last element of an array
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

// New method of getting the last element
// console.log(arr.at(-1));
// console.log('Niran'.at(-1));

// for (const movement of movements)
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited $${movement}.`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew $${Math.abs(movement)}.`);
//   }
// }

// console.log(' FOR EACH ');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited $${mov}.`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew $${Math.abs(mov)}.`);
//   }
// });

// Map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
// });

// MAP callback function
// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// OR

// const movementsUSDFor = [];
// for (const mov of movements) {
//   movementsUSDFor.push(mov * eurToUsd);
// }
// console.log(movementsUSDFor);

// const movementsDesc = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} $${Math.abs(
//       mov
//     )}.`
// );

// console.log(...movementsDesc);

// FILTER
// const deposits = movements.filter(function (mov, i, arr) {
//   return mov > 0;
// });
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements)
//   if (mov > 0) {
//     depositsFor.push(mov);
//   }
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// console.log(movements);

// REDUCE
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + curr;
// }, 0);
// console.log(balance);

// const balance = movements.reduce((acc, curr) => acc + curr, 0);
// console.log(balance);

// let balanceFor = 0;
// for (const [i, mov] of movements.entries()) {
//   balanceFor += mov;
//   console.log(`${mov} is at position ${i + 1}`);
// }
// console.log(balanceFor);

// Maximum value with reduce
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);
// console.log(max);

// const eurToUsd = 1.1;

// // PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// FIND METHOD
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// console.log(movements);

// Checks only EQUALITY
// console.log(movements.includes(-130));

// SOME
// Checks for a CONDITION
// const anyDep = movements.some(mov => mov > 1000);
// console.log(anyDep);

// EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// Flat and Flatmap used for nested arrays

// Flat
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(overallBalance);

// Flatmap
// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(overallBalance2);

// Sort mutates
// const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// console.log(movements);

// Return < 0, A, B (Keep order)
// Return > 0. B, A (Switch order)

// Ascending order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);

// movements.sort((a, b) => a - b);
// console.log(movements);

// Descending order
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });

// movements.sort((a, b) => b - a);
// console.log(movements);
// const arr = [1, 2, 3, 4, 5, 6, 7];

// Empty arrays + fill method
// const x = new Array(7);
// console.log(x);
// console.log(x.map(() => 5));

// x.fill(1, 3, 5);
// x.fill(1);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// const a = Array.from({ length: 100 }, (_, i) =>
//   Math.floor(Math.random() * i + 1)
// );
// console.log(a);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')].map(
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI2);
// });

/////////////////////////////////////////////////////
// Array Methods Practice

// 1.
// const bankDepositsSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, curr) => sum + curr, 0);
// console.log(bankDepositsSum);

// const bankDepositsSum = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((sum, curr) => (curr > 0 ? sum + curr : sum), 0);
// console.log(bankDepositsSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);

// Prefixed ++ operator
// let a = 10;
// console.log(++a);
// console.log(a);

// 3.
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, curr) => {
//       // curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
//       sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

// 4
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleCase);
// };

// console.log(convertTitleCase('this is a nice title.'));
// console.log(convertTitleCase('this is a LONG title but not too long.'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE.'));

/////////////////////////////////////////////
/// CHALLENGE

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Maltida'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Micheal'] },
];

let eatingMuchOrLittle;

// 1.
dogs.forEach(
  dog => (dog.recommendedFood = Math.floor(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// 2.
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));

const sarahsDogTenPercent = sarahsDog.recommendedFood * 0.1;
const sarahsDogEnoughPos = sarahsDog.recommendedFood + sarahsDogTenPercent;
const sarahsDogEnoughNeg = sarahsDog.recommendedFood - sarahsDogTenPercent;

if (sarahsDog.curFood > sarahsDogEnoughPos) {
  console.log(`Sarah's dog eats too much!`);
} else if (sarahsDog.curFood === sarahsDog.recommendedFood) {
  console.log(`Sarah's dog eats just enough.`);
} else if (
  sarahsDog.curFood === sarahsDogEnoughPos ||
  sarahsDog.curFood === sarahsDogEnoughNeg ||
  (sarahsDog.curFood < sarahsDogEnoughPos &&
    sarahsDog.curFood > sarahsDog.recommendedFood) ||
  (sarahsDog.curFood > sarahsDogEnoughNeg &&
    sarahsDog.curFood < sarahsDog.recommendedFood)
) {
  console.log(`Sarah's dog eats within the recommended range.`);
} else {
  console.log(`Sarah's dog eats too little!`);
}

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////// PERSONAL CHALLENGE ON MAP callback function, BIND and FOREACH
// OBSOLETE
// const passengersNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const passengersNames = [
//   'Niran',
//   'James',
//   'Tunmise',
//   'Asiwaju',
//   'Yori',
//   'Abha',
//   'Joko',
//   'Koko',
//   'Praise',
//   'Kem-Kem',
// ];

// OBSOLETE
// const numbsAndNames = passengersNumbs.map((number, index) => [
//   number,
//   passengersNames[index],
// ]);
// console.log(numbsAndNames);

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// const swiss = {
//   airline: 'Lufthansa',
//   iataCode: 'SW',
//   bookings: [],
// };

// const book = lufthansa.book;
// const bookLH = book.bind(lufthansa);
// const bookSW = book.bind(swiss);

// passengersNames.forEach(function (name, number) {
//   bookLH(number + 1, name);
// });

// console.log('');

// passengersNames.forEach(function (name, number) {
//   bookSW(number + 1, name);
// });

///////////////////////////////////////////////////////////
// function calcAge(birthyear, firstName) {
//   let millenial;
//   let millStatus;
//   let str;

//   const age = 2023 - birthyear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in year ${birthyear}.`;
//     console.log(output);
//   }
//   printAge();

//   function statusAndStr() {
//     millStatus = `${firstName}'s millenial status: ${millenial}`;

//     str = millenial
//       ? `You're are a millenial ${firstName}. Nice!`
//       : `${firstName}, you're not a millenial.`;
//   }

//   if (birthyear >= 1981 && birthyear <= 1986) {
//     millenial = true;
//     statusAndStr();

//     console.log(millStatus);

//     console.log(str);
//   } else {
//     millenial = false;
//     statusAndStr();

//     console.log(millStatus);

//     console.log(str);
//   }

//   console.log('');

//   return age;
// }

// // let firstName = 'Lagbaja';
// calcAge(1981, 'Lagbaja');

// // firstName = 'Steven';
// calcAge(1983, 'Steven');

// // firstName = 'Adefolarin';
// calcAge(2011, 'Adefolarin');
