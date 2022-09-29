function randomNumber() {
  const number1 = Math.floor(Math.random() * 100) + 1;
  return number1;
}

function gcdTwoNumbers(number1, number2) {
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

export { randomNumber, gcdTwoNumbers };
