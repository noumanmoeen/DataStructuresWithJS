// PROBLEM STATEMENT

// Write a program to find GCD from two given numbers using recursion

const gcd = (a, b) => {
   if (b === 0) {
     return a;
  }

  return gcd(b, a % b);
};
console.log(gcd(10, 45));
console.log(gcd(18, 48));
console.log(gcd(1701, 3768));
