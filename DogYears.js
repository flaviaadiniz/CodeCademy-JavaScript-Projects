//creates a variable for my age
let myAge = 38;

//creates a variable that represents the early years in human age (which represents 10.5 years each in dog age)
let earlyYears = 2;

//transforms the early years value from human age (2) to dog age (21)
earlyYears *= 10.5;

//gets the later years value in human age by subtracting the early years (2) that have already been counted for
let laterYears = myAge - 2;

//transforms the remaining later years value from human age to dog age
laterYears *= 4;

//gets my human age in dog age
let myAgeInDogYears = earlyYears + laterYears;

const myName = 'Flávia'.toLowerCase();

//prints my name and ages in human and dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years. `);
