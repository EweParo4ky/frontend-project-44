import { getRandomNumber, getGcdTwoNumbers } from '../utilities.js';

import startGameEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

function generateRound() {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const correctAnswer = String(getGcdTwoNumbers(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
}

export default function startGameGcd() {
  startGameEngine(description, generateRound);
}
