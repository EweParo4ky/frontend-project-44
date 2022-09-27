import readlineSync from 'readline-sync';

export default function evenGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === 'yes' && number % 2 === 0) {
      console.log('Correct!');
    }
    if (answer === 'no' && number % 2 !== 0) {
      console.log('Correct!');
    }
    if (answer !== 'no' && number % 2 !== 0) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      break;
    }
    if (answer !== 'yes' && number % 2 === 0) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      break;
    }
    if (i === 2) {
      console.log('Congratulations,', userName, '!');
    }
  }
}
