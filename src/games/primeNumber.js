import startGameEngine from '../index.js';

import { getRandomNumber } from '../utilities.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function IsPrimeNumber(number1) {
  for (let i = 2; i < number1; i += 1) {
    if (number1 % i === 0) {
      return false;
    }
  }
  return true;
}

function generateRound() {
  const question = getRandomNumber();
  let correctAnswer = '';
  const result = IsPrimeNumber(question);
  if (result === true) {
    correctAnswer = 'yes';
  }
  if (result !== true) {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
}

export default function startGameIsPrimeNumber() {
  startGameEngine(description, generateRound);
}
