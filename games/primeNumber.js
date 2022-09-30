import gameEngine from '../src/index.js';

import { randomNumber } from '../src/utilities.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function IsPrimeNumber(number1) {
  for (let i = 2; i < number1; i += 1) {
    if (number1 % i === 0) {
      return false;
    }
  }
  return true;
}

function round() {
  const question = randomNumber();
  let answer = '';
  const result = IsPrimeNumber(question);
  if (result === true) {
    answer = 'yes';
  }
  if (result !== true) {
    answer = 'no';
  }
  return [question, answer];
}

export default function gameIsPrimeNumber() {
  gameEngine(description, round);
}
