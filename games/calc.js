import readlineSync from 'readline-sync';

import { greetings, randomNumber } from '../src/index.js';

export default function gameCalc() {
  const userName = greetings();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const number1 = randomNumber();
    const number2 = randomNumber();
    const mathSigns = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * mathSigns.length);
    const operator = mathSigns[randomIndex];
    let result = 0;
    if (operator === '+') {
      result = number1 + number2;
    }
    if (operator === '-') {
      result = number1 - number2;
    }
    if (operator === '*') {
      result = number1 * number2;
    }
    const expression = `${number1} ${operator} ${number2}`;
    console.log(`Question: ${expression}`);
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
