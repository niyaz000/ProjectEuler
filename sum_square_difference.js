const SumAndSquare = (n) => {
  const sum = (n * (n+1)) / 2;
  return sum * sum;
}

const SumOfSquares = (n) => {
  return (n * (n+1) * (2*n + 1) ) / 6
}

console.log(SumAndSquare(100) - SumOfSquares(100));
