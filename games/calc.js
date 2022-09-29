import { randomNumber } from '../src/utilities.js';

import gameEngine from '../src/index.js';

const description = 'What is the result of the expression?';
function calculator(number1, number2, operator) {
  if (operator === '+') {
    return number1 + number2;
  }
  if (operator === '-') {
    return number1 - number2;
  }
  if (operator === '*') {
    return number1 * number2;
  }
  return 'undefined operator';
}

function round() {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const mathSigns = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * mathSigns.length);
  const operator = mathSigns[randomIndex];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculator(number1, number2, operator));
  return [question, answer];
}

export default function gameCalc() {
  gameEngine(description, round);
}

/* const expression = `${number1} ${operator} ${number2}`;
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(result)) */
