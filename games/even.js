import readlineSync from 'readline-sync';

import { greetings, randomNumber } from '../src/index.js';

export default function evenGame() {
  const userName = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === 'yes' && number % 2 === 0) {
      console.log('Correct!');
    }
    if (answer === 'no' && number % 2 !== 0) {
      console.log('Correct!');
    }
    if (answer !== 'no' && number % 2 !== 0) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`,
      );
      break;
    }
    if (answer !== 'yes' && number % 2 === 0) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`,
      );
      break;
    }
    console.log('Congratulations,', userName, '!');
  }
}
