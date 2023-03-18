'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Predefined values
  orderDeliveryOne: function ({
    time = '21:00',
    address = 'Iwo Road',
    starterIndex = 1,
    mainIndex = 2,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderDeliveryTwo: function ({ mainIndex, starterIndex, address, time }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    // console.log(mainIngredient);
    // console.log(otherIngredients);
    // console.log(
    //   `The main ingredient is ${mainIngredient} and other ingredients are ${otherIngredients}.`
    // );
  },
};

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

//Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// console.log(openingHours.fri);

// const arr = [1, 2, 5];
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

//Nested destructuring
// const nested = [2, 4, [5, 6]];
// let [first, , third] = nested;
// console.log(first, third);

// let [first, , [third, fourth]] = nested;
// console.log(first, third, fourth);

//Default values
// const [p = 1, q = 2, r = 3] = [8, 9];
// console.log(p, q, r);

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
//   prompt(`Let's make pizza! Ingredient 1?`),
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
