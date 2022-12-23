let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = false;

let runnerAge = 19;

if (runnerAge > 18) {
  raceNumber += 1000;
}

earlyRegister && runnerAge > 18 ? console.log(`Your race number is ${raceNumber} and your race will start at 9:30.`) : console.log('');

!earlyRegister && runnerAge > 18 ? console.log(`Your race number is ${raceNumber} and your race will start at 11:00`) : console.log('');

if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber} and your race will start at 12:30`);
} else if (runnerAge === 18) {
  console.log('Please see registration desk!');
}
