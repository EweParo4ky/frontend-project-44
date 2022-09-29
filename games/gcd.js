import readlineSync from 'readline-sync';

import { greetings, randomNumber, gcdTwoNumbers } from '../src/index.js';

// eslint-disable-next-line consistent-return
export default function getGcd() {
  const userName = greetings();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const number1 = randomNumber();
    const number2 = randomNumber();

    const result = gcdTwoNumbers(number1, number2);

    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(result)) {
      console.log('Correct!');
    }
    if (answer !== String(result)) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`,
      );
      break;
    }
    console.log('Congratulations,', userName, '!');
  }
}
