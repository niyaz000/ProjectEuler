const SumOfPrimes = () => {
  let primes = [2, 3, 5];
  for(let number = 7; number < 2000000; number += 2) {
    let isPrime = true;
    for(let i = 0; i < primes.length; i++) {
      if(number % primes[i] == 0) {
        isPrime = false;
        break;
      }
      if(primes[i] > Math.trunc(Math.sqrt(number))) {
        break;
      }
    }
    if(isPrime) {
      primes.push(number);
    }
  }
  let total = 0;
  const primeSum = primes.reduce((total, prime) => {
    return total + prime;
  }, 0);
  return primeSum;
}

console.log(SumOfPrimes());
