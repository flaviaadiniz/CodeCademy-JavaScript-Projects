/*
Sleep Debt Calculator
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 7;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 8;
        break;
      case 'thursday':
        return 7;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 9;
        break;
      case 'sunday':
        return 9;
        break;
      }
  };
  
const getActualSleepHours = () => 
      getSleepHours('monday')
      + getSleepHours('tuesday')
      + getSleepHours('wednesday')
      + getSleepHours('thursday')
      + getSleepHours('friday')
      + getSleepHours('saturday')
      + getSleepHours('sunday');
  
const getIdealSleepHours = hours => hours * 7;
  
  //console.log(getActualSleepHours());
  //console.log(getIdealSleepHours());
  
const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(9);
  
    if (actualSleepHours < idealSleepHours) {
        console.log(`You got ${idealSleepHours - actualSleepHours} hours less than you should! Get some rest!`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You got ${actualSleepHours - idealSleepHours} hours more than you need! Awesome!`);
    } else if (actualSleepHours === idealSleepHours) {
        console.log('You are sleeping exactly what you need to!');
    } 
}

calculateSleepDebt();


  
  