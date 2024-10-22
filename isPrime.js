const isPrime = (n) => {
  if (n < 2) return false;

  let i = 2;
  while (i < n) {
    if (n % i === 0) return false;
    i++;
  }
  return true;
};


console.log(isPrime(5))