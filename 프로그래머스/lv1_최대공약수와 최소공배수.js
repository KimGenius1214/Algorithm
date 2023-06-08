function solution(n, m) {
  const mulNum = n * m;
  const gcd = getGCD(n, m);
  return [gcd, mulNum / gcd];
}

let getGCD = (n, m) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};
