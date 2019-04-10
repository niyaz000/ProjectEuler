const gcd = (numA, numB) => {
  if(numB == 0) {
    return numA;
  }
  return gcd(numB, numA % numB);
}

const SmallestMultiple = (array) => {
  let lcm = array[0];
  array.forEach(item => {
    lcm = (lcm * item) / gcd(lcm, item);
    console.log(lcm);
  })
  return lcm;
}

let array = new Array(20);
for(let i = 1; i < 21; ++i) {
  array[i - 1] = i;
}

console.log(SmallestMultiple(array));
