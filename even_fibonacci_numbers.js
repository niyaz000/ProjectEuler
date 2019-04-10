const isEven = (num) => {
  return num %2 == 0;
}

const EvenFibonacciSum = (upperThreshold) => {
  let netSum = 0;
  let F0 = 1;
  let F1 = 2;
  while(F1 < upperThreshold) {
    if(isEven(F1)) {
      netSum += F1;
    }
    [F0, F1] = [F1, F0 + F1]
  }
  return netSum;
}

console.log(EvenFibonacciSum(4000000));
