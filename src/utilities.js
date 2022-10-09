function getRandomNumber() {
  const number1 = Math.floor(Math.random() * 100) + 1;
  return number1;
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomNumber, getRandomInRange };
