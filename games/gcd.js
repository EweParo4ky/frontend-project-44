import { randomNumber, gcdTwoNumbers } from '../src/utilities.js';

import gameEngine from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

function round() {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const answer = String(gcdTwoNumbers(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, answer];
}

export default function gameGcd() {
  gameEngine(description, round);
}
