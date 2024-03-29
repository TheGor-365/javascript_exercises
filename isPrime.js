const isPrime = (number) => {
  if (number < 2) { return false };

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) { return false };
  }

  return true;
};


console.log(isPrime(1));
console.log(isPrime(7));
console.log(isPrime(10));
