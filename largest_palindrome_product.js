const isPalindrome = (num) => {
  const numString = num.toString();
  return numString.split('').reverse().join('') === numString;
}

const LargestPalindromeProduct = () => {
  let maxPalindromeSoFar = 0
  for(let i = 999; i >= 100; --i) {
    for(let j = 999; j >= 100; --j) {
      const product = i * j;
      if(isPalindrome(product) && product > maxPalindromeSoFar) {
        maxPalindromeSoFar = product;
      }
    }
  }
  return maxPalindromeSoFar;
}

console.log(LargestPalindromeProduct());
