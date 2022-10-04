import { getRandomNumber } from '../utilities.js';

import gameEngine from '../index.js';

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

function generateRound() {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const mathSigns = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * mathSigns.length);
  const operator = mathSigns[randomIndex];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculator(number1, number2, operator));
  return [question, correctAnswer];
}

export default function gameCalc() {
  gameEngine(description, generateRound);
}
