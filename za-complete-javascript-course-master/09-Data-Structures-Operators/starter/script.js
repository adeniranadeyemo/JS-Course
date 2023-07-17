'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// SOLUTION

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '⛔' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
//     ':',
//     'h'
//   )})`.padStart(45);
//   console.log(output);
// }

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // ES6 enhanced object literals
  openingHours,
  //Predefined values

  orderDeliveryOne({
    time = '21:00',
    address = 'Iwo Road',
    starterIndex = 1,
    mainIndex = 2,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderDeliveryTwo({ mainIndex, starterIndex, address, time }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    // console.log(
    //   `The main ingredient is ${mainIngredient} and other ingredients are ${otherIngredients}.`
    // );
  },
};

////////////////////////////////////////// Working with strings
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// console.log(plane[0]);
// console.log('B737' [0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
//
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat) {
// B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat 😬!');
//   } else {
//     console.log('You got lucky 🤩!');
//   }
// }
//
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Niran'));
// console.log(typeof new String('Niran'));

// console.log(new String('Niran').slice(1));
// console.log(typeof new String('Niran').slice(1));

// Fix capitalization in name
// const passenger = 'nIrAn';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// Comparing email
// const email = 'hello@john.com';
// const loginEmail = ' Hello@John.com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail);
// email === normalizedEmail ? console.log(true) : console.log(false);;

// Replacing
// const priceNGN = '28844.100N'
// const priceGB = priceNGN.replace('N', '£').replace('.', ',');
// console.log(priceGB);

// const announcement = 'All passengers come to boarding door 23. boarding door 23!';
// const cAnnouncement = announcement.replaceAll('door', 'gate');
// console.log(cAnnouncement);

// console.log(announcement.replace(/door/g, 'gate'));

// const bLastIndex = announcement.lastIndexOf('b');
// console.log(bLastIndex);

// const correctAnnouncement = announcement.slice(0, 41).replace('door', 'gate') + announcement[41].toUpperCase() + announcement.slice(42).replace('door', 'gate');
// console.log(correctAnnouncement);

// Boolean
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family.');
// } else {
//   console.log('Might be pretty old.');
// }

// Practice exercise
// const checkBaggage = function(items) {
//   const baggage = items.toLowerCase();
//
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log(`You are NOT allowed onboard!`);
//   } else {
//     console.log('Welcome onboard!');
//   }
// };
//
// checkBaggage('I have a Laptop, some Food and a Pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection')

// Split and Join
// console.log('Niran+is+a+Christian+Stoic'.split('+'));
// console.log('Adeniran Adeyemo'.split(' '));
//
// const [firstname, lastname] = 'Adeniran Adeyemo'.split(' ');
//
// const newName = ['Mr.', firstname, lastname.toUpperCase()].join(' ');
// console.log(newName);

// const passenger = 'jessica ann smith davies'

// const capitalizeName = function(name) {
//   const names = name.split(' ');
//   const namesUpper = []

// for (const n of names) {
// namesUpper.push(n[0].toUpperCase() + n.slice(1));
// OR
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
//   }
//   console.log(namesUpper.join(' '));
// }
//
// capitalizeName(passenger);
// capitalizeName('adeniran adeyemo');

// Padding a string
// const message = 'Go to gate 20!';
// console.log(message.padStart(20, '-').padEnd(30, '-'));
// console.log('Niran'.padStart(20, '-').padEnd(30, '-'));

// const maskCreditCard = function(number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*')
// }

// console.log(maskCreditCard(734838));
// console.log(maskCreditCard(4338039084884390));
// console.log(maskCreditCard('8483403403094984349'));

// Repeat
// const message2 = 'Bad weather... All departures delayed! ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}.`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS CHALLENGE
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const text = document.querySelector('textarea');
// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//   const textarea = text.value;
//   const words = textarea.toLowerCase().split(/\s+/);
//   let sum = '';

//   for (const word of words) {
//     const noUnderScore = word.split('_');

//     const [first, second] = noUnderScore;
//     let final = `${first}${second.replace(second[0], second[0].toUpperCase())}`;

//     sum += '✅';
//     console.log(final.padEnd(20) + sum);
//   }
// });

// OR

// btn.addEventListener('click', function() {
//   const textarea = text.value;
//   const rows = textarea.split('\n');

//   for (const row of rows) {
//     const []
//   }
// })

////////////////////////////////////////////////////////////////////////////////////////////
// PROPERTY NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// PROPERT VALUES
// const values = Object.values(openingHours);
// console.log(values);

//ENTIRE OBJECT
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day}, we open at ${open} and close at ${close}`);
// }

// console.log(restaurant.openingHours.sat.open);
// console.log(restaurant.openingHours.mon.open);

//////////////////////////////////////// OPTIONAL CHAINING (returns undefined if value on object does not exist instead of an error)
// console.log(restaurant.openingHours.sat?.close);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open by ${open}`);
// }

// OPTIONAL CHAINING with methods
// console.log(restaurant.order?.(0, 2) ?? 'Method does not exist.');

// console.log(restaurant.orderRice?.(0, 2) ?? 'Method does not exist.');

////////////////////////////////////////////////////

// OPTIONAL CHAINING with arrays
// const users = [
//   {
//     name: 'Niran',
//     email: 'hello@niran.com',
//   },
//   {
//     name: 'Kirke',
//     email: 'hello@kirke.com',
//   },
// ];

// console.log(users?.[4]?.name ?? 'Users array or index empty.');
// console.log(users[0]?.name ?? 'Users array index empty.');

// for (const { name, email } of users) {
//   console.log(`Name is ${name}, and email is ${email}`);
// }

/////////////////////////// ES6 FOR OF LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

////////////////////////////////////////////////

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Luka Pellegrini',
// };

// OR Assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);

// NULLISH assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

/////////////////////////////////////////////////

// restaurant.orderDeliveryTwo({
//   time: '22:30',
//   address: 'Kulodi',
//   starterIndex: 2,
//   mainIndex: 1,
// });

// restaurant.orderDeliveryOne({});

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: Hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, Hours, tags);

//Menu is empty as it is not defined in the restaurant oblect. It resturns undefined if the square brackets are not present
// Default values
// let { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 222;
// const obj = {
//   a: 23,
//   b: 7,
//   c: 24,
// };
// ({ a, b } = obj);

// console.log(a, b);

//////////////////////////////////Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// console.log(openingHours.fri);

// const arr = [1, 2, 5];
// console.log(...arr);
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(...restaurant.order(2, 2));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);
// console.log(`${mainCourse} is from Italy.`);

// Nested destructuring
// const nested = [2, 4, [5, 6]];
// let [first, , third] = nested;
// console.log(first, third);

// let [first, , [third, fourth]] = nested;
// console.log(first, third, fourth);

//Default values
// const [p = 1, q = 2, r = 3] = [8, 9];
// console.log(p, q, r);

//////////////////////////////////////////////

//Spread Operator
// const arr = [7, 8, 9];
// const newArr = [1, 2, 3, ...arr];
// console.log(newArr);
// console.log(...arr);

// const newMenu = [...restaurant.mainMenu, 'Broccolli'];
// console.log(newMenu);

//Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

//Joining two or more arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

//Iterables are arrays, strings, maps, sets BUT NOT objects.
// const str = 'Niran';
// const letters = [...str, ' ', `!`];
// console.log(letters);
// console.log(...letters);
// console.log(...str);
// console.log(`${...str} `)

// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];

// console.log(ingredients);
// console.log(...ingredients);
// restaurant.orderPasta(...ingredients);

// const newRestaurant = {
//   ...restaurant,
//   founder: 'Guiseppe Rugani',
//   yearFound: 1980,
// };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// console.log(restaurantCopy);
// restaurantCopy.name = 'Ristorante al Napoli';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/////////////////////////////////////////////////

// SPREAD from the RHS
// const arr = [1, 2, 3, ...[4, 5, 6]];
// console.log(arr);

//Rest Pattern and Parameters

// 1) Destructuring
// REST on the LHS of Arrays
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others);

// const [Pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(Pizza, Risotto, otherFood);

// REST on the LHS of Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     console.log(sum);
//   }
// };

// add(2, 3);
// add(5, 2, 5, 3);
// add(5, 3, 8, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// const pizzaIngredients = [
//   'mushrooms',
//   'onion',
//   'olives',
//   'spinach',
//   'ugwu',
//   'cheese',
// ];
// restaurant.orderPizza(...pizzaIngredients);
// restaurant.orderPizza('mushrooms');

////////////////////////////////////////////////

// Shortcircuiting
// console.log('---OR---');

// console.log(3 || 'Niran');
// console.log('' || 'Niran');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuest = 0;
// restaurant.numGuest = 23;

// const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuest || 10;
// console.log(guests2);

// console.log('---AND---');
// console.log(0 && 'Niran');
// console.log(7 && 'Niran');
// console.log('Hello' && 20 && null && 'Niran');

// Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// restaurant.numGuest = 0;

// const guests2 = restaurant.numGuest || 10;
// console.log(guests2);

// Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

// CHALLENGE
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnabry',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function (...playersThatScored) {
//     let sum = '';
//     for (let i = 0; i < playersThatScored.length; i++) {
//       sum += playersThatScored[i] + ' ';
//     }
// console.log(...playersThatScored);
// console.log(
//   `${playersThatScored} scored ${playersThatScored.length} goals.`
// );
//   },
// };

// 1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// 2
// const [gk1, ...fieldPlayers1] = players1;
// console.log(gk1, fieldPlayers1);

// const [gk2, ...fieldPlayers2] = players2;
// console.log(gk2, fieldPlayers2);

// // 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // 6
// game.printGoals('Gnabry', 'Muller', 'Coman', 'Goretzka', 'Kimmich');
// game.printGoals(...game.scored);

// // 7
// team1 < team2 && console.log(`${game.team1} is more likely to win.`);
// team2 < team1 && console.log(`${game.team2} is more likely to win.`);

// CHALLENGE TWO
// 1
// FOR OF LOOP
// let goalEntries = Object.entries(game.scored);

// for (const [i, scorer] of goalEntries) {
//   console.log(`Goal ${Number(i) + 1}: ${scorer}`);
// }
// console.log('');

//OR
// FOR IN LOOP
// let goalScorerss = { ...game.scored };
// for (const x in goalScorerss) {
//   console.log(`Goal ${Number(x) + 1}: ${goalScorerss[x]}`);
// }

// 2
// let odds = Object.values(game.odds);
// let sum = 0;
// let average = 0;
// for (const odd of odds) {
//   sum += odd;
//   average = sum / odds.length;
// }
// console.log(average);
// console.log('');

// 3
// const {
//   team1,
//   team2,
//   odds: { team1: t1, x, team2: t2 },
// } = game;

// console.log(
//   `${team1}'s odd of victory: ${t1}. Odds of draw: ${x}. ${team2}'s odd of victory: ${t2}.`
// );

// let oddsEntries = Object.entries(game.odds);

// for (const [team, odd] of oddsEntries) {
//   const teamStr = team === 'x' ? 'draw:' : `Victory ${game[team]}:`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// console.log('');

// BONUS
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// console.log(scorers);

// let gscorers = { ...game.scored };

// const lewa = 0;
// const gnabry = 1;
// const hummels = 3;

// const lewaValue = gscorers[lewa];
// const gnabryValue = gscorers[gnabry];
// const hummelsValue = gscorers[hummels];

// const lewaCount = Object.values(gscorers).reduce(
//   (accumulator, currentValue) => {
//     if (currentValue === 'Lewandowski') {
//       return accumulator + 1;
//     } else {
//       return accumulator;
//     }
//   },
//   0
// );

// const gnabryCount = Object.values(gscorers).reduce(
//   (accumulator, currentValue) => {
//     if (currentValue === 'Gnabry') {
//       return accumulator + 1;
//     } else {
//       return accumulator;
//     }
//   },
//   0
// );

// const hummelsCount = Object.values(gscorers).reduce(
//   (accumulator, currentValue) => {
//     if (currentValue === 'Hummels') {
//       return accumulator + 1;
//     } else {
//       return accumulator;
//     }
//   },
//   0
// );

// const scorers = {
//   [gnabryValue]: gnabryCount,
//   [hummelsValue]: hummelsCount,
//   [lewaValue]: lewaCount,
// };

// console.log(scorers);

///////////////////////////////////////////////////////
// SETS
// const ordersSet = new Set([
//   'Pizza',
//   'Pasta',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
//   'Pounded yam',
//   'Eba',
//   'Beans',
// ]);

// console.log(ordersSet);

// console.log(new Set('Niran'));

// console.log(ordersSet.size);

// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Spaghetti'));

// ordersSet.add('Garlic Bread');
// console.log(ordersSet);

// ordersSet.add('Garlic Bread');
// ordersSet.add('Porridge');

// ordersSet.delete('Risotto');
// ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// Example;
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// console.log(staff);

// const staffUnique = new Set(staff);
// console.log(staffUnique);

// console.log(staffUnique.size);

////////////////////////////////////////////////////////
// MAPS
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// console.log(rest);
// console.log(rest.set(3, 'Ibadan, Nigeria'));
//
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');
// console.log(rest);
//
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));
//
// const time = 13;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
//
// console.log(rest.has('categories'));
// console.log(rest.has('latitude'));
// rest.delete(2);
//
// rest.set([1, 2], 'Test');
//
// const arr = [3, 4];
// rest.set(arr, 'Quest');
//
// console.log(rest.get([1, 2]));
// console.log(rest.get(arr));
// console.log(rest);

// rest.set(document.querySelector('h1'), 'heading');
// console.log(rest);
// console.log(rest.size);
// // rest.clear();
// console.log(rest);

//////////////////////////////////////////////////////////////////////////////////////////
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['Correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// Converting object to maps
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quiz app
// alert(question.get('question'));

// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);
//
// console.log(question.get(question.get('Correct') === answer));

// OR

// answer === question.get('Correct') ?
//   console.log(question.get(true)) :
//   console.log(question.get(false));

// OR

// if (answer === question.get('Correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// Converting map to array
// console.log(...question);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2
// gameEvents.delete(64);
// console.log(gameEvents);

// 3
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes.`
// );
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes.`
// );

// 4
// for (const [min, eventt] of gameEvents) {
//   min <= 45 ? console.log(`[FIRST HALF] ${min}: ${eventt}`) : console.log(`[SECOND HALF] ${min} : ${eventt}`);
// }
// OR
// for (const [min, eventt] of gameEvents) {
//   let half = min <= 45 ? `FIRST` : `SECOND`;
//   console.log(`[${half} HALF] ${min} : ${eventt}.`);
// }
