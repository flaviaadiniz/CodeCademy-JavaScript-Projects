/*
Dog Years
Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
*/


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
