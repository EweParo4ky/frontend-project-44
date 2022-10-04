import gameEngine from '../index.js';

import { getRandomNumber, getRandomInRange } from '../utilities.js';

const description = 'What number is missing in the progression?';
const minLengthProgression = 5;
const maxLengthProgression = 10;

function generateRound() {
  const stepOfprog = getRandomNumber();
  const firstElem = getRandomNumber();
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
  question = question.trim();
  const correctAnswer = String(firstElem + stepOfprog * randomIndex);
  return [question, correctAnswer];
}

export default function gameProgression() {
  gameEngine(description, generateRound);
}
