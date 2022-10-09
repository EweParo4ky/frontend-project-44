import { getRandomNumber } from '../utilities.js';

import startGameEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

function getGcd(number1, number2) {
  if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    return false;
  }
  let a = Math.abs(number1);
  let b = Math.abs(number2);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function generateRound() {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const correctAnswer = String(getGcd(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
}

export default function startGameGcd() {
  startGameEngine(description, generateRound);
}
