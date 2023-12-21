// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('Cocoa', 5);
// console.log(price, tq);

// console.log('Importing module');

// import * as ShoppingCart from './shoppingCart. js';
// ShoppingCart.addToCart('Bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// import add from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';
add('vegetables', 7);
add('oranges', 6);
add('apples', 4);

console.log(cart);

// Top level await used outside of an async function
// (available only in modules and not regular script files)
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   //   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// // const lastPost = getLastPost();
// // console.log(lastPost);

// // Not clean
// // lastPost.then(last => console.log(last));

// // const lastPost2 = await getLastPost();
// // console.log(lastPost2);

// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart. Shipping cost is ${shippingCost}.`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier.`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//     orderStock,
//   };
// })();

// shoppingCart2.addToCart('apples', 10);
// shoppingCart2.addToCart('oranges', 15);
// shoppingCart2.orderStock('watermelons', 25);
// console.log(shoppingCart2);

// //  Undefined as it's not returned
// console.log(shoppingCart2.shippingCost);

// COMMONJS Module
// Export - How it looks like
// export.addToCart = function (product, quantity) {
//       cart.push({ product, quantity });
//       console.log(
//         `${quantity} ${product} added to cart. Shipping cost is ${shippingCost}.`
//       );
//     };

// Import - How it looks like
// const { addToCart } = require('./shoppingCart.js');
import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
    {
      product: 'apple',
      quantity: 5,
    },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

// console.log(stateClone);

state.user.loggedIn = false;
// console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
