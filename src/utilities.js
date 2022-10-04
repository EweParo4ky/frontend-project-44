function getRandomNumber() {
  const number1 = Math.floor(Math.random() * 100) + 1;
  return number1;
}

function getGcdTwoNumbers(number1, number2) {
  if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    return false;
  }
  let a = Math.abs(number1);
  let b = Math.abs(number2);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomNumber, getGcdTwoNumbers, getRandomInRange };
