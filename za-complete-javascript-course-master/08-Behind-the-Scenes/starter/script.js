// 'use strict';
// function calcAge(birthyear) {
//     const age = 2023 - birthyear;

//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in year ${birthyear}.`;
//         console.log(output);

//         const str = `Oh! You're a millenial, ${firstName}.`;
//         console.log(str);

//     if (birthyear >= 1981 && birthyear <= 1986) {
//       var millenial = true;

//       // Creating NEW variables with same name as outer scope's variable
//       const firstName = 'Steven';
//       const age = 2037 - birthyear;

//       // Reassigning outer scope's variable
//       output = `${firstName}, you are ${age}, born in year ${birthyear}. Interesting!`;
//       console.log(output);

//       const str = `Oh! You're a millenial, ${firstName}.`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       return age;
//     }
//     // console.log(str);
//     // console.log(add(2, 4));
//     console.log(output);
//     console.log(millenial);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Lagbaja';
// // console.log(calcAge(2000));
// calcAge(1983);

// const myName = 'Niran';

// if (myName === 'Niran') {
//   const age = 2023 - 2000;
//   console.log(myName);
//   console.log(age);
//   console.log(`Niran is a ${job}`);
//   const job = `Designer/Developer`;
// }

// Hoisting with variables
// console.log(me);
// console.log(birthyear);
// console.log(job);

// var me = 'Niran';
// let job = 'Dev';
// const birthyear = 2000;

// Hoisting with Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow);

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

//Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;
// //var always returns undefined

// function deleteShoppingCart() {
//   console.log(`All Products deleted!`);
// }

// //Best Practice

// let numbProducts = 10;

// function delShoppingCart() {
//   console.log(`All Products deleted!`);
// }

// if (!numbProducts) delShoppingCart();

// var usually creates variables as property of the window object.
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);
