/*
Rock, Paper, or Scissors

Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:
Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.

Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
*/

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock') {
      return userInput;
    } else if (userInput === 'paper') {
      return userInput;
    } else if (userInput === 'scissors') {
      return userInput;
    } else if (userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error!');
    }
  }
  
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    }
  
    if (userChoice === 'bomb') {
      return 'BOMB! You won!';
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
  
      if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
  
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'The computer won!'
        } else {
          return 'You won!';
        }
      }
  }
  
  function playGame() {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log('You choose: ' + userChoice);
    console.log('The computer chooses: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  