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
  