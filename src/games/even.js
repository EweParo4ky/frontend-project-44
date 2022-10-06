import { getRandomNumber } from '../utilities.js';
import startGameEngine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

function generateRound() {
  const number1 = getRandomNumber();
  const question = number1;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
}

export default function startGameEven() {
  startGameEngine(description, generateRound);
}
