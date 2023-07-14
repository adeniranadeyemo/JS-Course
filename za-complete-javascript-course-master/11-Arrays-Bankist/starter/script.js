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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

// CHALLENGE ////////////////////////////////////
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

const checkDogs = function (array1, array2) {
  let dogsJuliaCorrected = [...array1];
  let array3 = dogsJuliaCorrected.slice(1, 3);

  const allDogs = [...array3, ...array2];

  allDogs.forEach(function (dog, i) {
    dog >= 3
      ? console.log(`Dog number ${i + 1} is an adult and is ${dog} years old.`)
      : console.log(`Dog number ${i + 1} still a puppy.`);
  });
};
checkDogs(dogsJulia, dogsKate);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

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
// console.log(arr.at(0));

// Typically used to get the last element of an array
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

// New method of getting the last element
// console.log(arr.at(-1));
// console.log('Niran'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
