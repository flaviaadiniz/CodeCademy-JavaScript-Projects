/*
Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.
*/


//temperature in Kelvin
const kelvin = 300;

//temperature converted to Celsius
const celsius = kelvin - 273;

//formula to convert Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//rounds the result down 
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);