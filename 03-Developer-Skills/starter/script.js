// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Problem:

// Understanding the problem
// We need ot calculate the amplitude - the difference between the highest and lowest tempratures for the day.

const temperatures = [
  3,
  -2,
  -6,
  -1,
  "error",
  9,
  13,
  17,
  15,
  14,
  9,
  5,
  109,
  -20,
];

//Breaking down into sub problems

//Need to check for any other value than a number
// If (value !== number) return console.log('error')
// Get highest and lowest values
// let Low = 0, let High = 0;
// If (value is <= Low) Low = Value
// Else if (Value is >= high) High = value
// Get difference between low and high

// const calcTempAmplitude = function (temps) {
//   let low = temps[0];
//   let high = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== "number") continue;
//     console.log(currentTemp);
//     if (currentTemp < low) low = currentTemp;
//     else if (currentTemp > high) high = currentTemp;
//     console.log(high, low);
//   }
//   return high - low;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(`The amplitude is ${amplitude}`);

// const calcTempAmplitude2 = function (temps1, temps2) {
//   const temps = temps1.concat(temps2);
//   let low = temps[0];
//   let high = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== "number") continue;
//     console.log(currentTemp);
//     if (currentTemp < low) low = currentTemp;
//     else if (currentTemp > high) high = currentTemp;
//     console.log(high, low);
//   }
//   return high - low;
// };

// const amplitude2 = calcTempAmplitude([3, 5, 1], [-9, -3, 0]);
// console.log(`The amplitude is ${amplitude2}`);

const measureKelvin = function () {
  const measurement = {
    type: "tmep",
    unit: "celsius",
    value: 10,
  };
  console.table(measurement);
  //   const kelvin = measurement.value + 273;
  return kelvin;
};

// console.log(measureKelvin());

// const calcTempAmplitude = function (temps) {
//   let low = temps[0];
//   let high = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== "number") continue;
//     console.log(currentTemp);
//     if (currentTemp < low) low = currentTemp;
//     else if (currentTemp > high) high = currentTemp;
//     console.log(high, low);
//   }
//   return high - low;
// };

// const calcTempAmplitudeBug = function (temps) {
//   let low = 0;
//   let high = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== "number") continue;
//     console.log(currentTemp);
//     debugger;
//     if (currentTemp < low) low = currentTemp;
//     else if (currentTemp > high) high = currentTemp;
//     console.log(high, low);
//   }
//   return high - low;
// };

// const amplitude = calcTempAmplitudeBug(temperatures);
// console.log(`The amplitude is ${amplitude}`);

const printForecast = function (arr) {
  return `${arr[0]} in 1 days...${arr[1]} in 2 days...${arr[2]} in 3 dayss `;
};

console.log(printForecast([45, 67, 90]));
