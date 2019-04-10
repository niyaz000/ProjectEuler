const LargetPrimeFactor = (num) => {
  factors = []
  let isDivisible = false;
  while( num % 2 == 0) {
    num /= 2;
    isDivisible = true;
  }
  if(isDivisible) {
    factors.push(2);
  }
  let currentLargestPrime = 1;
  for(let factor = 3; factor <= Math.trunc(Math.sqrt(num)); ++factor) {
    isDivisible = false;
    while(num % factor == 0) {
      num /= factor;
      isDivisible = true;
    }
    if(isDivisible) {
      factors.push(factor);
    }
  }
  if(num > 1) {
    factors.push(num);
  }
  return factors.reduce((a, b) => {
    return Math.max(a, b);
  })
}

console.log(LargetPrimeFactor(600851475143))
