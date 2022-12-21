//temperature in Kelvin
const kelvin = 300;

//temperature converted to Celsius
const celsius = kelvin - 273;

//formula to convert Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//rounds the result down 
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);