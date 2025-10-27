function solution(a, b) {
  const getPrime = (num) => {
    const prime = [];
    for (let i = 2; i <= num; i++) {
      while (num % i === 0) {
        num = num / i;
        prime.push(i);
      }
    }
    return [...new Set(prime)];
  };

  const gcd = (num1, num2) => {
    return num1 % num2 === 0 ? num2 : gcd(num2, num1 % num2);
  };

  const isInfinity = (num) => {
    let isTrue = true;
    for (const i of num) {
      if (i !== 2 && i !== 5) {
        isTrue = false;
      }
    }
    return isTrue ? 1 : 2;
  };

  const common = gcd(a, b);
  const denom = b / common;

  var answer = isInfinity(getPrime(denom));

  return answer;
}

function solution(a, b) {
  return Number((a / b).toFixed(10)) === a / b ? 1 : 2;
}

function solution(a, b) {
  let n = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) n = i;
  }

  b /= n;
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}
