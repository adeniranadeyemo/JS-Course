'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LM123', 2);
// createBooking('LM123', 8);
// createBooking('LM123', undefined, 1000);

// console.log(bookings);

// const flight = 'LH234';
// const niran = {
//   name: 'Adeniran Adeyemo',
//   passport: 2847275452340239,
// };

// const thomas = {
//   name: 'Thomas Anderson',
//   passport: 4894340024884844,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH484';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 4894340024884844) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, niran);
// console.log(flight);
// console.log(niran);

// 'flight' is the same in the variable declared and in the function because
// the value is a string which is a primtive value that stays the same in the memory
// heap while 'nirans' are different because object is a reference and a
// fallback to it in a function creates a new object.

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000000000);
// };

// newPassport(niran);
// newPassport(thomas);

// checkIn(flight, niran);
// checkIn(flight, thomas);

// console.log(flight, thomas);
// console.log(flight, niran);

///////////////////////////////////////////////////////////////////////////////////////////////
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...otherWords] = str.split(' ');
//   return [first.toUpperCase(), ...otherWords].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}.`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
// const high5 = function () {
//   console.log('👋🏾');
// };
// document.body.addEventListener('click', high5);
// ['N', 'I', 'R', 'A', 'N'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Niran');
// greeterHey('Rice');
// greet('Hello')('Niran');

//OR

// const greetAg = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// greetAg('Hello')('Niran');
// greetAg('Hello')('Sumborii');

// OR

// const greetAgAg = greeting => name => console.log(`${greeting} ${name}`);

// greetAgAg('Hi')('Warrior');

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

// lufthansa.book(239, 'Adeniran Adeyemo');
// lufthansa.book(634, 'John Smith');
// console.log(lufthansa.bookings);

// const book = lufthansa.book;

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// Call Method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 12, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 30, 'Bruce Wayne');
// book.call(swiss, 204, 'Clark Kent');
// console.log(swiss);

// Apply method
// const flightData = [124, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steve Rogers');
// bookLX(44, 'Natasha Romanov');

// const bookEW25 = book.bind(eurowings, 25);
// bookEW25('Barry Allen');
// bookEW25('Tony Stark');

// console.log(eurowings);
// console.log(swiss);

// Bind with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(50));

// const addTax = (rate, value) => value + value * rate;

// const addVAT = function (rate, value, fn) {
//   console.log(fn(rate, value));
// };

// addVAT(0, 200, addTax);
// addVAT(0.2, 400, addTax);

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(50));

/////////////////////////////////////////////////////////////////////////// CHALLENGE
// MY SOLUTION
const ansPoll = document.querySelector('.poll');

// const poll = {
//   question: 'What is your favourite progamming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
// };

// const newAnswer = function () {
//   poll.registerNewAnswer = prompt(
//     `${poll.question} \n ${poll.options.join('\n')}\nWrite option number:`
//   );

//   poll.registerNewAnswer < poll.answers.length &&
//     poll.registerNewAnswer &&
//     poll.answers[poll.registerNewAnswer]++;

//   if (
//     poll.registerNewAnswer >= poll.answers.length ||
//     isNaN(poll.registerNewAnswer) ||
//     !poll.registerNewAnswer
//   ) {
//     alert('Option invalid! Kindly reselect.');
//     console.log('\nInvalid Option! Poll remains the same as last!');
//   }

//   poll.displayResults();
//   poll.displayResults('string');
// };

// poll.displayResults = function (type = 'array') {
//   if (type === 'array') {
//     console.log(poll.answers);
//   } else if (type === 'string') {
//     console.log(`Poll results are ${this.answers.join(', ')}.`);
//   }
// };
//   poll.displayResults = function (...type) {
//     return `\nPoll results are ${type}.`;
//   };
//   console.log(poll.displayResults(poll.answers.join(', ')));

// const testDisplayResults = poll.displayResults.bind();
// console.log(testDisplayResults([1, 5, 3, 9, 6, 1].join(', ')));
// console.log(testDisplayResults([5, 3, 1].join(', ')));
// };

// ansPoll.addEventListener('click', newAnswer);

//////////////////////////////////////////////////////////////////////// JONAS' SOLUTION
// const poll = {
//   question: 'What is your favourite progamming language?',
//   options: ['1: JavaScript', '2: Python', '3: Rust', '4: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     //Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\nWrite option number`
//       )
//     );
//     console.log(answer);

//     //Register answer
//     typeof answer === 'number' &&
//       answer !== 0 &&
//       answer < this.answers.length + 1 &&
//       this.answers[answer - 1]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}.`);
//     }
//   },
// };

// ansPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [5, 2, 3] });

// Immediately Invoked Function Expressions [IIFE]
// Used when a function is needed to be called only once.

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

//IIFE
// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This will ALSO never run again'))();

// CLOSURE - The closed-over variable environment of the execution context in
// which a function was created, even after that execution context is gone;

// A function always has access to the varaibles in the variable environment
// of the execution context in which it was created; The function keeps a
// reference to its outer scope, which preserves the scope chain throughout time

// let passengerCount = 10;

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} ${passengerCount === 1 ? `passenger` : `passengers`} `);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

// Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// Re-assigning f function
// h();
// f();
// console.dir(f);

// Example 2
// Closure has priority over the scope chain.
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers.`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers.`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds.`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

//////////////////////////////////////////////////////////////////////// Closure CHALLENGE
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
