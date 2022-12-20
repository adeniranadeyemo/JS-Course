'use strict'

// let hasDriversLicense = false;
// let passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive! :D');

// function logName(name) {
//   console.log(`My name is ${name} `)
// }

// logName('Niran')
// logName('Joshua')
// logName('Nony')

// function fruitProcessor(apples, oranges) {
//   const juice = `We produced ${apples} apple juice boxes and ${oranges} oranges.`
//   console.log(juice)
//   return juice
// }

// fruitProcessor(10, 20)
// fruitProcessor(20, 10)

// console.log(fruitProcessor(10, 20));
// console.log(fruitProcessor(20, 10));

// const num = Number('23')
// console.log(typeof num) // number
// console.log(typeof num)


// Function Declaration
// function calcAge1(birthyear) {
//   return 2040 - birthyear
// }
// const Age1 = calcAge1(2000);

// Function Expression
// const calcAge2 = function(birthyear) {
//   return 2040 - birthyear
// }
// const Age2 = calcAge2(2020);

// Arrow Function
// const calcAge3 = birthyear => 2040 - birthyear
// const Age3 = calcAge3(2000);
// console.log(Age3);

// const yearsUntilRetirement = (birthyear, firstname) => {
//   const age = 2037 - birthyear;
//   const retirement = 70 - age;
//   // return retirement;
//   return `${firstname} retires in ${retirement} years.` 
// }

// console.log(yearsUntilRetirement(2000, 'Cow'))

function fruitProcessor(apples, oranges) {
  const juice = `We produced ${apples} apple juice boxes and ${oranges} oranges.`
  console.log(juice)
  return juice
}

