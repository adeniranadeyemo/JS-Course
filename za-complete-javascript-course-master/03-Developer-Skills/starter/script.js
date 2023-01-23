// Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 20, 24, 7, -4];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

//
//

// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 20, 24, 7, -4];
// const temperatures2 = [5, 0, -4, 1, 'error', 11, 15, 19, 22, 26, 9, -2];

// const calcTempAmplitudeNew = function (temp1, temp2) {
//   const temps = temp1.concat(temp2);
//   console.log(temps)

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew(temperatures1, temperatures2);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'clesius',
//     // value: Number(prompt('Degree Celsius:'))
//     value: 10
//   };

//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

//
// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 20, 30, 7, -4];
// const temperatures2 = [5, 0, -4, 1, 'error', 11, 15, 19, 22, 26, 9, -2];

// const calcTempAmplitudeBug = function (temp1, temp2) {
//   const temps = temp1.concat(temp2);
//   console.log(temps);

//   // The Bug
//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 3]);
// console.log(amplitudeBug);
// °c

//
// const forcastedMaximumTemps1 = [17, 21, 23];
// const forcastedMaximumTemps2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr1, arr2) {
//   const arr = arr1.concat(arr2);
//   console.log(arr);

//   for (let i = 0; i < arr.length; i++) {
//     const curTemp = arr[i];
//     console.log(
//       `Forcasted Maximum Temperature is ${curTemp}°c in ${i + 1} ${
//         i + 1 === 1 ? `day.` : `days.`
//       }`
//     );
//   }
//   return arr;
// };
// printForecast(forcastedMaximumTemps1, forcastedMaximumTemps2);

//
// const forcastedMaximumTemps3 = [17, 21, 23];
// const forcastedMaximumTemps4 = [12, 5, -5, 0, 4];

// const printForecastt = function (arr1, arr2) {
//   const arr = arr1.concat(arr2);
//   let str = '';

//   for (let i = 0; i < arr.length; i++) {
//     const curTemp = arr[i];
//     str += `${curTemp}°c in ${i + 1} ${i + 1 === 1 ? `day` : `days`} ... `;
//   }
//   console.log(`... ` + str);
//   return arr;
// };
// printForecastt(forcastedMaximumTemps3, forcastedMaximumTemps4);
