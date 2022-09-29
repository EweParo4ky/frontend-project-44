import { randomNumber } from '../src/utilities.js';
import gameEngine from '../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function round() {
  const number1 = randomNumber();
  const question = number1;
  const answer = number1 % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
}

export default function gameEven() {
  gameEngine(description, round);
}
