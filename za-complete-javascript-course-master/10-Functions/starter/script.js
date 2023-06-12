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
