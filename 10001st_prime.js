const Get10001stPrime = () => {
  let primes = [2, 3, 5];
  let number = 7;
  while(primes.length < 10001) {
    let isPrime = true;
    for(let prime of primes) {
      if(number % prime == 0) {
        isPrime = false;
        break;
      }
      if(prime > Math.trunc(Math.sqrt(number))) {
        break;
      }
    }
    if(isPrime) {
      primes.push(number);
    }
    number += 2;
  }
  return primes[10000];
}

console.log(Get10001stPrime());
