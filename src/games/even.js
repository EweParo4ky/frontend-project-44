import { getRandomNumber } from '../utilities.js';
import gameEngine from '../index.js';

const description = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

function generateRound() {
  const number1 = getRandomNumber();
  const question = number1;
  const correctAnswer = number1 % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
}

export default function gameEven() {
  gameEngine(description, generateRound);
}
