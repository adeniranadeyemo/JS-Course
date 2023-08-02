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

const displayMovements = function (acc) {
  containerMovements.innerHTML = '';

  acc.movements.forEach(function (mov, i) {
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
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outgoing = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outgoing)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
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
  displayMovements(acc);

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
const dogsAgesOne = [5, 2, 4, 1, 15, 8, 3];
const dogsAgesTwo = [16, 6, 10, 5, 6, 1, 4];

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
