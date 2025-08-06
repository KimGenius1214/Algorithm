function solution(numer1, denom1, numer2, denom2) {
  let num = numer1 * denom2 + numer2 * denom1;
  let den = denom1 * denom2;
  const getGcd = (a, b) => (a % b === 0 ? b : getGcd(b, a % b));
  const gcd = getGcd(num, den);
  return [num / gcd, den / gcd];
}
