import gameEngine from '../src/index.js';

import { randomNumber, getRandomInRange } from '../src/utilities.js';

const description = 'What number is missing in the progression?';
const minLengthProgression = 5;
const maxLengthProgression = 10;

function round() {
  const stepOfprog = randomNumber();
  const firstElem = randomNumber();
  const lengthOfProg = getRandomInRange(minLengthProgression, maxLengthProgression);
  const randomIndex = getRandomInRange(0, lengthOfProg - 1);
  let question = '';
  for (let i = 0; i < lengthOfProg; i += 1) {
    const nextElem = firstElem + stepOfprog * i;
    if (i !== randomIndex) {
      question = `${question} ${nextElem}`;
    }
    if (i === randomIndex) {
      question = `${question} ${'..'}`;
    }
  }
  const answer = String(firstElem + stepOfprog * randomIndex);
  return [question, answer];
}

export default function gameProgression() {
  gameEngine(description, round);
}
