import { getRandomNumber, getGcdTwoNumbers } from '../src/utilities.js';

import gameEngine from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

function generateRound() {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const correctAnswer = String(getGcdTwoNumbers(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
}

export default function startGameGcd() {
  gameEngine(description, generateRound);
}
