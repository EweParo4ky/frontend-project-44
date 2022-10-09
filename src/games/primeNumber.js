import startGameEngine from '../index.js';

import { getRandomNumber } from '../utilities.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function generateRound() {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
}

export default function startGameIsPrimeNumber() {
  startGameEngine(description, generateRound);
}
