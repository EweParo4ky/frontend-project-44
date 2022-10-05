import { getRandomNumber } from '../utilities.js';

import startGameEngine from '../index.js';

const description = 'What is the result of the expression?';
function calculate(number1, number2, operator) {
  switch (operator) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    default:
      return 'undefined operator';
  }
}

function generateRound() {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const mathSigns = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * mathSigns.length);
  const operator = mathSigns[randomIndex];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, operator));
  return [question, correctAnswer];
}

export default function startGameCalc() {
  startGameEngine(description, generateRound);
}
