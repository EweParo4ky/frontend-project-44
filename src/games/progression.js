import startGameEngine from '../index.js';

import { getRandomNumber, getRandomInRange } from '../utilities.js';

const description = 'What number is missing in the progression?';
const minLengthProgression = 5;
const maxLengthProgression = 10;

function getProgression(first, length, step) {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(first + step * i);
  }
  return progression;
}

function generateRound() {
  const stepOfprog = getRandomNumber();
  const firstElem = getRandomNumber();
  const lengthOfProg = getRandomInRange(minLengthProgression, maxLengthProgression);
  const progression = getProgression(firstElem, lengthOfProg, stepOfprog);
  const randomIndex = getRandomInRange(0, lengthOfProg - 1);
  const hiddenNumber = progression.splice(randomIndex, 1, '..');

  const question = progression.join(' ');
  const correctAnswer = String(hiddenNumber);
  return [question, correctAnswer];
}

export default function startGameProgression() {
  startGameEngine(description, generateRound);
}
