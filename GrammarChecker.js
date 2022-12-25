/*
Grammar Checker
In this project, you’ll use what you know about iterating over arrays to gather information and improve the quality of a paragraph.
*/

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

//The .split() method separates the story string by the space character (' ') and stores each word as an element of the array.
let storyWords = story.split(' ');

//To change the storyWords array back into a readable string, we can invoke the .join() method on storyWords.
//console.log(storyWords.join(' '));

let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let count = 0;
storyWords.forEach(word => count++);
//console.log(count);

//finds the unnecessary word and removes it
storyWords = storyWords.filter(word => word != unnecessaryWord);

//finds the misspelled word and replaces it by 'beautiful'
storyWords = storyWords.map(word => {
  if (word === misspelledWord) {
    return 'beautiful';
  } else {
    return word;
  }
});

// finds the index of the bad word
const badWordIndex = storyWords.findIndex(word => {
    if (word === badWord) {
      return storyWords.indexOf(word);
    }
  });
 console.log('Index of badWord: ' + badWordIndex);

 //changes the word in the index found to 'really'
 storyWords[badWordIndex] = 'really';

 //checks if every word of the story is equals to or less than 10 characters long
 let lengthCheck = storyWords.every(word => word.length <= 10);
console.log('Are all the words shorter than 10 characters? ' + lengthCheck);

//filters the array to find the word that has more than 10 characters and prints it
console.log('The word with more than 10 characters is: ' + storyWords.filter(word => word.length > 10));

//finds the index of the word found in the previous step
let breathTakingIndex = storyWords.findIndex(word => word === 'breathtaking');

//prints the index
console.log('The index of the word \'breathtaking\' is: ' + breathTakingIndex);

//changes the word at index 111
storyWords[111] = 'stunning';


//prints all the story
console.log('\n' + storyWords.join(' '));