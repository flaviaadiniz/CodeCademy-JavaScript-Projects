const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);


//-----------------------------------------------------------------------------------------------------
//FOR EACH - .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.

console.log('\nExample using FOR EACH:');
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits
fruits.forEach(fruit => console.log('I want to eat a ' + fruit));


//------------------------------------------------------------------------------------------------------
//MAP - .map() executes the same code on every element in an array and returns a new array with the updated elements.

console.log('\nExamples using MAP:');

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

//creates an array with the first letter of each animal
const secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage.join(''));

//creates a new array with all the numbers from bigNumbers divided by 100
const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(number => number / 100);
console.log(smallNumbers);


//------------------------------------------------------------------------------------------------------
//FILTER - .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria. */

console.log('\nExamples using FILTER:');

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers2 = randomNumbers.filter(number => number < 250);
console.log(randomNumbers);
console.log(smallNumbers2);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(word => word.length > 7);
console.log(favoriteWords);
console.log(longFavoriteWords);


//--------------------------------------------------------------------------------------------------------
//FIND INDEX - .findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.

console.log('\nExamples using INDEX OF:');

const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals2.findIndex(animal => animal === 'elephant');
console.log(foundAnimal);
console.log(animals2[7]);

const startsWithS = animals2.findIndex(animal => animal.startsWith('s'));
console.log(startsWithS);
console.log(animals2[3]);


//-------------------------------------------------------------------------------------------------------
//REDUCE - .reduce() iterates through an array and takes the values of the elements and returns a single value.

console.log('\nExamples using REDUCE:');

const newNumbers = [1, 3, 5, 7];

//using reduce with only one parameter (the callback function):
const newSum = newNumbers.reduce(function(accumulator, currentValue) {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
});

console.log(newSum);

//using reduce with a second parameter (10) as the accumulator:
const newSum2 = newNumbers.reduce(function(accumulator, currentValue) {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
  }, 10);
  
  console.log(newSum2);


//---------------------------------------------------------------------------------------
//OTHER METHODS  

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log('\nExamples using SOME and EVERY:');

//verifies if the condition is true for any of the elements of the array
console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array with numbers with more than 5 characters
const interestingWords = words.filter(word => word.length > 5);

//verifies if the condition is true for every words in the array
console.log(interestingWords.every(word => {
  return word.length > 5;
 }));


