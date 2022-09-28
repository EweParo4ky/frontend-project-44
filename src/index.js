import readlineSync from 'readline-sync';

function greetings() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  return userName;
}

function randomNumber() {
  const number1 = Math.floor(Math.random() * 100) + 1;
  return number1;
}

export { greetings, randomNumber };
