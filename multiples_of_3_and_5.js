const getFirstTerm = (num, multiple) => {
  return num + multiple - (num % multiple);
}

const getLastTerm = (num, multiple) => {
  return num - (num % multiple);
}

const getNumberOfTerms = (begin, end, multiple) => {
  return Math.floor((end - begin) / multiple) + 1;
}

const getSum = (begin, end, multiple) => {
  const A0 = getFirstTerm(begin, multiple);
  const An = getLastTerm(end, multiple);
  const nbrTerms = getNumberOfTerms(A0, An, multiple);
  const sum = ((A0 + An) * nbrTerms) / 2;
  return sum;
}

const sumOfMultiples = (begin, end, multiples) => {
  let sum = 0;
  multiples.forEach(multiple => {
    sum += getSum(begin, end, multiple);
  })
  return sum;
}

console.log(sumOfMultiples(1, 999, [3, 5]) - sumOfMultiples(1, 999, [15]));
